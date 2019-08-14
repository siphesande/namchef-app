import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {recipes} from '../recipes'

export default class extends Component {
    state = {
        value: '',
        placeholder:'Search for recipe...'
    }
    render() {
        const categories = Object.keys(recipes);
        console.log("print something", categories);
        var new_array = [];
        // categories ["","",""]
        categories.map((category, key)=>{
       // recipes {category: [], category2: []}
            const recipe_list_by_category = recipes[category];
            recipe_list_by_category.forEach((recipe, key) => {
                new_array.push({
                    name: recipe.name,
                    category: category,
                    key: key
                }) 
            })
        })

        const filtered_array = new_array.filter(i => i.name.includes(this.state.value) || i.name.toLowerCase().includes(this.state.value));

    return(
        <div className='container row'>
            <Link className='button btn-block' to='/'>Back to Home</Link>
                <h2>RECIPES</h2>
                <input 
                    value={this.state.value} 
                    type='text' 
                    placeholder={this.state.placeholder}
                    onChange={e => {
                        this.setState({ value: e.target.value })
                    }}
                />
                {
                    filtered_array.length > 0 ?
                    filtered_array
                    .map((item, index) => (
                        this.state.value ?
                        <div key={index}>
                            <Link className='' to={'/recipes/' + item.category + '/' + item.key}>{item.name}</Link>
                        </div>
                        :
                        <p></p>
                    )) :
                    <p>No results found!</p>
                }
                <br/>
                <div className="col-6-sm">
                    <Link className='btn btn-block' to='/recipes/indian'>Indian</Link>
                </div>
                <div className="col-6-sm">
                    <Link className='btn btn-block' to='/recipes/mexican'>Mexican</Link>
                </div>
                <div className="col-6-sm">
                    <Link className='btn btn-block' to='/recipes/american'>American</Link>
                </div>
                <div className="col-6-sm">
                    <Link className='btn btn-block' to='/recipes/soups'>Soups</Link>
                </div>
                <div className="col-6-sm">
                    <Link className='btn btn-block' to='/recipes/vegan'>Vegan</Link>
                </div>
            </div>
        )
    }
}
