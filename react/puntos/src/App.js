import React, { Component } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client'

class App extends Component {

  color = '#AAA'

  componentDidMount(){
    this.socket = socketIOClient('http://localhost:4000/')
    
    this.socket.on('point_added', resp => {
      // console.log('El server dijo:', resp)
      this.renderPixel(resp.x, resp.y, resp.color)
    })
  
    // this.socket.emit('add_point', {valor: 'Algo random'})

    //Make it fullscreen
    this.refs.elCanvas.width = window.innerWidth
    this.refs.elCanvas.height = window.innerHeight

    this.color = '#' + (Math.random()*0xFFFFFF<<0).toString(16)

  }

  renderPixel = (x,y, color) => {
    const contexto = this.refs.elCanvas.getContext('2d')
    // contexto.fillStyle = 'orange'
    // const r = Math.random()*255;
    // const g = Math.random()*255;
    // const b = Math.random()*255;
    // contexto.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
    contexto.fillStyle = color
    contexto.fillRect(x,y,10,10)
  }

  elMouse = (evt) => {
    console.log(evt.clientX, evt.clientY)
    this.socket.emit('add_point', {x: evt.clientX, y: evt.clientY, color: this.color})

    this.renderPixel(evt.clientX, evt.clientY)
  }
  
  render() {
    return (
      <canvas ref="elCanvas" onClick={evt=>this.elMouse(evt)} />
    );
  }
}

export default App;
