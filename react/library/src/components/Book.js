import React from 'react'
import axios from 'axios'

import logo from '../logo.svg';


class Book extends React.Component{

  state = {
    info: ""
  }

  componentWillMount(){
    setTimeout(() => {
      axios.get('http://localhost:3000/book/' + this.props.match.params.bookId)
        .then( res => {
          this.setState({ info: res.data })
        })
        .catch( err => {
          console.log(`ERROR - ${err}`);
        })
    }, 2000)
  }

  emptyState(info){
    if (this.state.info === '')
      // return (<div> Cargando... </div>)
      return (<img src={logo} alt="" className="App-logo"/>)
    else
      return(
        <div>
          <p>{info.title}</p>
          <p>{info.desc}</p>
        </div>
      )
  }

  render(){

    const {info} = this.state

    return(
      <div>
        {this.emptyState(info)}
      </div>
    )
  }

}

export default Book