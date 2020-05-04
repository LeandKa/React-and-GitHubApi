import React, { Component } from 'react'
import ListItem from '../repos/ListItem';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bar from '../SearchBar/Bar';
import Pagination from '../Pagination/pagination'
import Loader from 'react-loader-spinner';
import parse from 'parse-link-header';

const style = {
  border:'1px solid',
  padding:'10px',
  margin:'10px',
  fontFamily:'arial',
  fontSize:'12px',
  textAlign:'center'
}

const margin = {
    marginTop:'100px'
}

export default class List extends Component {

    constructor(){
        super();
        this.state ={
            gitHubDat:[],
            search:'',
            isSearch:false,
            selectLan:'',
            selectDesc:'',
            isLoading:true,
            totalPerPage:20,
            currentPage:1,
            total:0
         }
     
         this.onChange = this.onChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
         this.handlePageChange = this.handlePageChange.bind(this);
}

    componentDidMount(){
        setTimeout(()=>{
            axios.get(`https://api.github.com/search/repositories?q=language:java`)
            .then(result =>{
                const parsed = parse(result.headers.link)
                const lastpage = parseInt(parsed.last.page)
                const state = this.state.totalPerPage;
                const multi = (lastpage * state)/state
                this.setState({gitHubDat:result.data.items})
                this.setState({isLoading:false});
                this.setState({total:multi})
            })
        },600)
    }

    onChange = (event) =>{
     this.setState({[event.target.name]:event.target.value});
    }

     onSubmit = (event)=>{
       event.preventDefault();
       axios.get(`https://api.github.com/search/repositories?q=${this.state.search}+language:${this.state.selectLan}&sort=${this.state.selectDesc}`)
       .then(result =>{
         const parsed = parse(result.headers.link)
         console.log(result.headers) 
         const lastpage = parseInt(parsed.last.page)
         const state = this.state.totalPerPage;
         const multi = (lastpage * state)/state
         this.setState({gitHubDat:result.data.items});
         this.setState({isSearchAux:true});
        this.setState({total:multi}) 
       });
     }

     handlePageChange(event,value) {
        axios.get(`https://api.github.com/search/repositories?q=${this.state.search}+language:${this.state.selectLan}&sort=${this.state.selectDesc}&page=${value}`)
       .then(result =>{
         this.setState({gitHubDat:result.data.items});
         this.setState({isSearchAux:true});
       });
      }

    render() {

        if(this.state.isLoading){
          return(
            <div>
            <Container>
                <Row>
                    <Col xs={12}>
                       <h1 style={style}>Some repositories from GitHub</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 5 }} style={margin}>
                       <Loader style={margin} type="TailSpin" color="#00BFFF" height={100} width={100}></Loader>
                    </Col>
                </Row>
            </Container>
        </div>
          )
        }else{
            return (
                <div>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <h1 style={style}>Some repositories from GitHub</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} >
                                <Bar onChange={this.onChange} onSubmit={this.onSubmit}></Bar>
                            </Col>
                            <Col xs={12}>
                            <ListItem isList={this.state.gitHubDat} isSearchAux={this.state.isSearch}></ListItem> 
                            </Col>
                            <Col md={{ span: 5, offset: 5 }} style={margin}>
                              <Pagination total={this.state.total} handlePageChange={this.handlePageChange} ></Pagination>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ) 
        }
    }
}
