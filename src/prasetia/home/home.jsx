import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <h1>Hello World Header</h1>
        );
    }
}

class TableRow extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Foo",
                    "age": "20"
                }, {
                    "id": 2,
                    "name": "Bar",
                    "age": "30"
                }, {
                    "id": 3,
                    "name": "Bar",
                    "age": "30"
                }, {
                    "id": 4,
                    "name": "Bar",
                    "age": "30"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <table>
                    <tbody>
                    {this.state.data.map((person,i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;