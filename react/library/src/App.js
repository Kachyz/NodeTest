import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import AppBar from './components/appbar'
import Card from './components/card'
// import Search from './components/Search'

import Tacocat from './images/tacocat.jpg'
import Img2 from './images/xxx.jpg'

class App extends Component {

  state = {
    filtro: "",
    libros: []
  }

  filtro = (event) => {
    this.setState({ filtro: event.target.value })
  }

  componentDidMount(){
    // Hacemos la peticion al backend
    axios.get("http://localhost:3000/book/")
      .then( resp => {
        console.log('La respuesta del server:', resp)
        this.setState({libros: resp.data})
      }).catch( err => {
        console.log('ERROR -',err)
      })
  }

  render() {

    // const libros =[
    //   {
    //     id: 1,
    //     title: "Tacocat",
    //     desc: "Tacocat Tacocat Tacocat Tacocat Tacocat",
    //     image: Tacocat,
    //   },
    //   {
    //     id: 111,
    //     title: "Taco.cat",
    //     desc: "Tacocat Tacocat Tacocat Tacocat Tacocat",
    //     image: Tacocat,
    //   },
    //   {
    //     id: 2,
    //     title: "WOOOOO",
    //     desc: "Esta es la descripcion de el 2do libro",
    //     image: Img2,
    //   },
    // ];

    const {filtro, libros} = this.state

    const librosFiltrados = libros.filter( libro => {
      if(filtro.length === 0)
        return true
      else if(libro.title.toLowerCase().indexOf(filtro.toLocaleLowerCase()) >= 0)
        return true
      else
        return false
    })

    return (
      <div className="App">
        <AppBar title="Libreria Devf!" value={this.filtro}/>
        {/* <Search value={this.filtro}/> */}
        <div className="flex">
        { 
          librosFiltrados.map(libro =>{
            return <Card
              key={libro._id}
              title={libro.title}
              desc={libro.desc}
              image= {libro.image}
            />
          })
        }
        </div>
      </div>
    );
    // return (
    //   <div className="App">
    //     <AppBar title="Libreria Devf!" />
    //     <Card image={Tacocat} title="Tacocat"/>
    //   </div>
    //);
  } 
}

export default App;
