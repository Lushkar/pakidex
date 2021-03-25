import React, {Component} from 'react';
import axios from 'axios';
import PhotoContainer from './photoContainer';



class AnimalPage extends Component{
    
    constructor() {
        super();
        this.state  = {
            order: '',
            suborder: '',
            scientificName: '',
            RLT: '',
            photo: []
        };
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
                    attribution, 
                    link
                } = res.data;

                this.setState({
                    order, 
                    suborder, 
                    family, 
                    genus, 
                    scientificName, 
                    commonName, 
                    location, 
                    RLT
                });

                // This thing is gonna be a pain in the ass when I push to production
                // const imgURL = `/images/${this.state.order}/${this.state.scientificName.replace(/\s/g, '')}.jpg`;
                // const imgURL = `/images/primates/${this.state.scientificName.replace(/\s/g, '')}.jpg`;
                const imgURL = `http://localhost:5000/images/primates/Kashmirgraylangur.jpg`;
                fetch(imgURL)
                    .then(res => {
                        console.log(`response`, res);
                        if (!res.ok) {
                            throw Error(`Error fetching the image`);
                        }
                        return res.url;  
                    })
                    .then(res => {
                        this.setState({photo: res});
                    })
                    .catch(err => {
                        console.error(err);
                    })
                // axios.get(imgURL)
                //     .then( res => {
                //         console.log(res)
                //     })
            })    
    }

    render() {
        
        return(
            <div className='article'>
                <h1>{this.state.scientificName}</h1>
                <PhotoContainer url={this.state.photo}/>
            </div>
        )
    }
}

export default AnimalPage;