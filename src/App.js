import React from 'react'
import './App.css';
import Swal from 'sweetalert'
import CardInputField from './Components/cardInputField/cardInputField';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      status:false
    }
  }

  handleSubmit = (e) => {
    const { name } = e.target
    if (e.key === 13 || name === "submitPin") {
      this.setState({
        status: true,
      })
    }
  }

  handleDelete = () => {
     Swal({
            title: "Are You sure?",
            text: "Once deleted, won't get back",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then(res => {
            if (res) {
              this.setState({
                value: "",
                status:false
                })
            }
        })
  }
  render() {
    const isSuccess=this.state.value
  return (  
    <div className="App">
    <div>
      <h1 className="heading">Card Number*</h1></div>
      <CardInputField
        length={4}
        isSuccess={isSuccess}
        onChange={(val) => this.setState({ value: val })} />
      <br />
      <br/>
      <button className="btn-submit" name="submitPin" onClick={this.handleSubmit}>Submit</button>
      <div>
        {this.state.status ? <div><h3>{this.state.value}</h3><button className="btn-delete" onClick={this.handleDelete}>Delete</button></div>:<div><h3>Fill Up All The Input Fields</h3></div>}
      </div>
    </div>
  );
  }
  
}

