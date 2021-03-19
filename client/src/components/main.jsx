import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        axios.get('/api/animals')
            .then( res => {
                this.setState({articles: res.data});
            })
            .catch(err => console.error(err));
    }


    render() {
        return (
            <React.Fragment>
                {
                    this.state.articles.map((article, i) => {
                        // return <Card key={i} article={article}/>
                        return <p>{article.order}</p>
                    })
                }
            </React.Fragment>
        )
    }
}

export default Home;