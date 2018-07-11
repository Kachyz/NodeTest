import React from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
//Agregamos el alias Router para BrowserRouter (como usando const)

import App from "./App"
import Book from "./components/Book"

// Esto es un componente funcional (no tiene class)
export default () => {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={App} ></Route>
          <Route exact path="/book/:bookId" component={Book} ></Route>
        </Switch>
      </Router>
    </div>
  )
}
