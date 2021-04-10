import React, {Component} from 'react';
import IndexPhoto from './indexPhoto';
class PokeIndex extends Component {
    
    state = {
        imgURL: ''
    }

    componentDidMount() {
        let sciName = this.props.animal.scientificName;
        let order = this.props.animal.order;
        sciName = sciName.replace(/\s/g, '');
        order = order.charAt(0).toLowerCase() + order.slice(1);
        order = order.replace(/ *\([^)]*\) */g, "");
        // console.log(sciName);
        // const imgURL = `http://localhost:5000/images/primates/Kashmirgraylangur.jpg`;
        // const imgURL = `http://localhost:5000/images/primates/${sciName}.jpg`;
        const imgURL = `http://localhost:5000/images/${order}/${sciName}.jpg`;
        console.log(imgURL);
        // console.log(imgURL);

        fetch(imgURL)
            .then(res => {
                // console.log(`image response`, res);
                if (!res.ok) {
                    throw Error(`Error fetching the image`);
                }
                return res.url;
            })
            .then(res => {
                this.setState({imgURL: res});
            })
            .catch(err => {
                console.error(err);
            })

    }

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
                <h1 className='index-order'>{order}</h1>
                {/* <h1>{suborder}</h1>
                <h1>{family}</h1>
                <h1>{genus}</h1> */}
                <h2 className='index-sciname'>{scientificName}</h2>
                <h2 className='index-cname'>{commonName}</h2>
                {/* <h3>{location}</h3>
                <h3>{RLT}</h3> */}
                <IndexPhoto url={this.state.imgURL}/>
                        
            </div>
        )
    }
}

export default PokeIndex;