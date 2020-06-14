import React, { Component } from 'react';
// import { Card, TextField, Button, Tooltip } from '@material-ui/core';
import CreateNote from './CreateNote'
import Service from '../services/services';
const service = new Service()



class Notes extends Component {

constructor(props) {
    super(props)

    this.state = {
         notes : []
    }
}

componentDidMount(){
    this.getNotes()
} 

getNotes = () => {

    service.getNotes()
    .then(data=> {console.log(data)
            this.setState({ 
                notes: data.data.data.data
            })
    }
    )
    .catch(err=>{console.log(err);
    })

}

render(){
    return(
        <div>
            <CreateNote 
             getNotes = {this.getNotes}
            />
        </div>
    )
}

}
export default Notes