import React, { Component } from 'react';
import Service from '../services/services';


const service = new Service()

class Archive extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             notes : []
        }
    }
    
    componentDidMount() {
        this.getArchivedNotes()
    }
   
 
getArchivedNotes = () => {

    service.getArchivedNotes()
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

  render() {
    return (
      <div> 
           
      </div>
    );
  }
}

export default Archive;