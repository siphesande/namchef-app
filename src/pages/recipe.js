import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {recipes} from '../recipes'

export default class extends Component {
    render() {
        const recipe = recipes[this.props.match.params.category][this.props.match.params.recipe_id];
        return (
            <div>
                <br/>
                <Link className='button btn-block' to={'/recipes/' + this.props.match.params.category}>Back to {this.props.match.params.category} Recipes</Link>
                <br/>
                <img src={recipe.img_url} style={{
                    width: '100%',
                    maxWidth: '300px',
                    height: 'auto'
                }}/>
                <h2>{recipe.name.toUpperCase()}</h2>
                <h4>Ingredients</h4>
                {
                    recipe.ingredients.map((item, index) => (
                        <li key={index}>{item.qty + ' ' + item.name}</li>
                    ))
                }
                <h4>Method</h4>
                {
                    recipe.method.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
                <br/><br/>
            </div>
        )
    }
}
