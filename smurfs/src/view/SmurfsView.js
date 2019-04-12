import React from 'react';
import { fetchSmurfs, addSmurf } from '/Users/nestq/Documents/Lambda/Sprint-Challenge-Redux-Smurfs/smurfs/src/actions';
import { connect } from 'react-redux';
import Smurfs from '../components/Smurfs';


class SmurfsView extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            age: 0,
            height: 0
         
        };
    }

    componentDidMount() {
        this.props.fetchSmurfs();
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addSmurf(this.state);
    }

    render() {
        return (
            <div>
                <h1>This is my Smurfs List</h1>
                 <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    onChange={this.handleChanges}
                    placeholder="Smurf Name"
                    value={this.state.name}
                    autoComplete="off"
                    />
                    
             
                
                    <input
                    type="number"
                    name="age"
                    onChange={this.handleChanges}
                    placeholder="Smurf Age"
                    value={this.state.age}
                    autoComplete="off"
                    />
                   
              
                
                    <input
                    type="number"
                    name="height"
                    onChange={this.handleChanges}
                    placeholder="Smurf height"
                    value={this.state.height}
                    autoComplete="off"
                    />
                    <button>Add Smurf</button>
                </form> 
                <Smurfs smurfs={this.props.smurfs} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("STATE: ", state)
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{fetchSmurfs, addSmurf})(SmurfsView)