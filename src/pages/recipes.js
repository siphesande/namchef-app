import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {recipes} from '../recipes'

export default class extends Component {
    state = {
        value: ''
    }
    render() {
        // console.log("RECIPES", recipes);

        const categories = Object.keys(recipes);
              console.log("print something", categories);
            //   alert(categories);
      
        // const test_array = ['test1', "test2"]
        var new_array = [];
        
        // categories ["","",""]
        categories.map((category, key)=>{
            // recipes {category: [], category2: []}

            const recipe_list_by_category = recipes[category];

            recipe_list_by_category.forEach((recipe) => {
                new_array.push({
                    name: recipe.name,
                    category: category
                 }) 
            })
              
        })

        console.log("THIS IS THE PROCESSED ARRAY",new_array);

        return (
            <div className='container'>
                {/*<input 
                    value={this.state.value} 
                    type='text' 
                    onChange={e => {
                        this.setState({ value: e.target.value })
                    }}
                />
                {
                    new_array.filter(i => i.name.includes(this.state.value))
                    .map((item, index) => (
                        <div key={index}>
                            {item.name}
                        </div>
                    ))
                }
                <br/>
            */}

                <Link className='button btn-block' to='/recipes/'>Back to Categories</Link>
                <h2>{this.props.match.params.category.toUpperCase()} RECIPES</h2>
                {
                    recipes[this.props.match.params.category].map((r, i) => (
                        <div key={i}>
                            <Link className='btn btn-block' to={'/recipes/' + this.props.match.params.category + '/' + i}>{r.name}</Link>
                            <br/>
                        </div>
                    ))
                }
            </div>
        )
    }
}
