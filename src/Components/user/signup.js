import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangemail = this.onChangemail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email:''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email:this.state.email
    }

    console.log(user);

    axios.post('/api/user/add', user)
      .then(res => console.log(res.data))
      .catch(err=>console.log(err))

    this.setState({
      username: '',
      email:''
    })
  } 

  render() {
    return (
      
      <div className="container-md">
        <h3>Wait List</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Names: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangemail}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Join Us" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}