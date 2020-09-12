import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangeemail = this.onChangeemail.bind(this);
      this.onChangerefid = this.onChangerefid.bind(this);
      this.onChangequeue = this.onChangequeue.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        email: '',
        refid: '',
        queue: '',
        users: []
      }
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/api/user/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            username: response.data.username,
            description: response.data.description
          })   
        })
        .catch(function (error) {
          console.log(error);
        })
  
      axios.get('/Api/user/')
        .then(response => {
          this.setState({ users: response.data.map(user => user.username) });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
  
    onChangeemail(e) {
      this.setState({
        email: e.target.value
      });
    }
  
    onChangerefid(e) {
      this.setState({
        refid: e.target.value
      });
    }
    onChangequeue(e) {
        this.setState({
          queue: e.target.value
        });
      }
    
    
    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        email: this.state.email,
        refid: this.state.refid,
        queue: this.state.queue,
      };
  
      console.log(user);
  
      axios.post('http://localhost:5000/api/user/update/'+this.props.match.params.id, user)
        .then(res => console.log(res.data));
      
      window.location = '/';
    }
  
    render() {
      return (
        <div>
          <h3>Edit User</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <select ref="userInput"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}>
                  {
                    this.state.users.map(function(user) {
                      return <option 
                        key={user}
                        value={user}>{user}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group"> 
              <label>Email: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeemail}
                  />
            </div>
            <div className="form-group">
              <label>refid: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.refid}
                  onChange={this.onChangerefid}
                  />
            </div>
            <div className="form-group">
              <label>Queue: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.queue}
                  onChange={this.onChangequeue}
                  />
            </div>
            
            <div className="form-group">
              <input type="submit" value="Edit" className="btn btn-outline-dark" />
            </div>
          </form>
        </div>
      )
    }
  }