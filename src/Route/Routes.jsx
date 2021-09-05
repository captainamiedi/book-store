import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Book from '../Pages/Book/Book';
import Books from '../Pages/Books/Books';

export default function Routes() {
    return (
        <Router>
           <Switch>
               <Route exact path='/'>
                <Books />
               </Route>
               <Route exact path='/book/:id'>
                <Book />
               </Route>
            </Switch> 
        </Router>
    )
}
