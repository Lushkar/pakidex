import React, {Component} from 'react';

class PokeIndex extends Component {
    
    handleClick = () => {
        const id = this.props.animal._id;
        const url = 'animals/' + id;
        window.location.assign(url)
    };

    render() {

        const animal = this.props.animal;
        // Keep adding the features of the animals as you go along
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
        } = animal;


        return(
            <div className="pakidex-card" onClick={this.handleClick}>
                <h1>{order}</h1>
                <h1>{suborder}</h1>
                <h1>{family}</h1>
                <h1>{genus}</h1>
                <h2>{scientificName}</h2>
                <h2>{commonName}</h2>
                <h3>{location}</h3>
                <h3>{RLT}</h3>
                        
            </div>
        )
    }
}

export default PokeIndex;