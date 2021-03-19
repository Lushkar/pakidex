import React, {Component} from 'react';
import axios from 'axios';
import PokeIndex from './pokeindex'

class Main extends Component {
    state = {
        animals: []
    }
    
    componentDidMount() {
        axios.get('/api/animals')
            .then( res => {
                this.setState({animals: res.data});
            })
            .catch(err => console.error(err));
    }


    render() {
        return (
            <React.Fragment>
                {
                    this.state.animals.map((animal, i) => {
                        return <PokeIndex key={i} animal={animal}/> 
                    })
                }
            </React.Fragment>
        )
    }
}

export default Main;