import React, { Component } from 'react'
import Pagination from '@material-ui/lab/Pagination';


const style = {
    textAlign:'center'
}

export default class pagination extends Component {

    constructor() {
      super();
      this.state={
        page:1
      }
      this.onChange = this.onChange.bind(this)
    }

    onChange(event,value){
      this.setState({page:value});
    }

    componentDidUpdate(){
      console.log(this.state.page);
    }

    render() {

      const {total} = this.props
      return(
        <Pagination count={total} onChange={this.props.handlePageChange}/>
      )
    }
}
