import React, {Component} from 'react';
import axios from 'axios';




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

    // state = {
    //     order: '',
    //     suborder: '',
    //     scientificName: '',
    //     RLT: '',
    //     photo: []
    // }

    componentDidMount() {
        const url = '/api' + window.location.pathname;
        axios.get(url)
            .then(res => {
                console.log(res)
                const {
                    order, 
                    suborder, 
                    // family, 
                    // genus, 
                    scientificName, 
                    // commonName, 
                    // location, 
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
                });

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
        //     .then(this.setImage())

        
    }

    displayPhotos = () => {
        return <img src={this.state.photo}></img>
    }
    render() {
        
        return(
            <div className='article'>
                <h1>{this.state.scientificName}</h1>
                <section>{this.displayPhotos()}</section>
            </div>
        )
    }
}

export default AnimalPage;