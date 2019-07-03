import React from 'react';
import axios from 'axios';
import css from './statistic.module.css';

class Statistic  extends React.Component{
    state = {
        people: []
    };
    componentDidMount() {
        axios.get(`http://localhost:5001/api/Users`)
            .then(res => {
                const people= res.data;
                this.setState({ people});
            })
    }
    render(){
        return(
            <div>
                <p>Список пользователей</p>
                <ol>
                    {this.state.people.map(person => <li>{person.FullName}</li>)}
                </ol>
            </div>
        )
    }
};


export default Statistic