import React from 'react';
import { Component, useState } from 'react/cjs/react.production.min';

const Button = ({props}) => {

    const [name, setName] = useState('Hola');
    
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

const BtnTwo = ({text}) => <button text={text} />;


class App extends Component{

    constructor(){
        super();
        this.state = {
            name: 'Hola'
        }
    }

    render(){
        return(
            <div>
                <h1>HELLO WORLD</h1>
            </div>
        )
    }
}


function ComponentWrapper(WhapperComponent){
    class Wrapper extends Component{
        render(){
            return(
                <div>
                    <WhapperComponent {...this.props}/>
                </div>
            )
        }
    }
}
