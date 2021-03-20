import React, {Component} from 'react';
import axios from 'axios';


class AnimalPage extends Component{

    state = {
        order: '',
        suborder: '',
        scientificName: '',
        RLT: ''
    }

    componentDidMount() {
        const url = '/api' + window.location.pathname;
        axios.get(url)
            .then(res => {
                const {
                    order, 
                    suborder, 
                    family, 
                    genus, 
                    scientificName, 
                    commonName, 
                    location, 
                    RLT, 
                    // attribution, 
                    // link
                } = res.data;

                this.setState({
                    order, 
                    suborder, 
                    // family, 
                    // genus, 
                    scientificName, 
                    // commonName, 
                    // location, 
                    RLT
                })

            })
    }


    render() {
        return(
            <div className='article'>
                <h1>{this.state.scientificName}</h1>
            </div>
        )
    }
}

export default AnimalPage;