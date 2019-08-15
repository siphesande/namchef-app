import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: "url('../nam.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: 0,
                margin: 0
            }}>
                <div style={{
                    color: '#fafafa'
                }} className="container">
                    <h1>NamChef!</h1>
                    <p>Delicious recipes!</p>
                    <br/>
                    <Link className='btn' to='/recipes/'>Browse</Link>
                </div>
            </div>
        )
    }
}
