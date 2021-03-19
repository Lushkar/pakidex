import React, {Component} from 'react';

class PokeIndex extends Component {
    
    handleClick = () => {
        const id = this.props.animals._id;
        const url = 'animals/' + id;
        window.location.assign(url)
    };

    render() {
        return(
            <p>{}</p>
        )
    }
}

export default PokeIndex;