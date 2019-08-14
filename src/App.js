import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/index'
import Recipes from './pages/recipes'
import Recipe from './pages/recipe'
import Categories from './pages/categories'
import './App.css'
import './simple-grid.min.css'

function AppRouter() {
  return (
    <Router>
     <div>
        <Route path="/" exact component={Home} />
        <div className='container center'>
          <Route path="/recipes" exact component={Categories} />
          <Route path="/recipes/:category" exact component={Recipes} />
          <Route path="/recipes/:category/:recipe_id" exact component={Recipe} />
        </div>
     </div>
    </Router>
  );
}

export default AppRouter;