import React, {Component} from 'react';
import axios from 'axios';

async function get(url) {
    try {
        const response = await fetch(url, {
            method: "GET",
            mode: 'cors', 
            cache: 'no-cache',
            headers: {
                'Content-Type': 'image/jpeg'
            }
        })
        const blob = await response.blob();
        return [URL.createObjectURL(blob), null]
    }
    catch (error) {
        console.error(`get: error occurerd ${error}`);
        return [null, error];
    }
}


class AnimalPage extends Component{
    
    state = {
        order: '',
        suborder: '',
        scientificName: '',
        RLT: '',
        screenshot: undefined,
        setscreenshot: undefined
    }

    componentDidMount() {
        const url = '/api' + window.location.pathname;
        axios.get(url)
            .then(res => {
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
                })

            })
            .then(this.setImage())
    }


    render() {
        {console.log(this.state.screenshot)}
        return(
            <div className='article'>
                <h1>{this.state.scientificName}</h1>
                <img src={this.state.screenshot}></img>
            </div>
        )
    }

    setImage = async  () => {
        const url = '/api/animals' + this.state.scientificName;
        console.log(url);
        const [response, error] = await get(url);
        if (error)
            console.log(error)
        else {
            console.log(`got response ${response}`)
        }
        this.setState({
            screenshot: response
        })
    }
}

export default AnimalPage;