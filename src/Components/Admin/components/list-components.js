import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>
      <Link to={"/edit/"+props.user._id}>edit</Link> | <a href="#" 
      onClick={() => { props.deleteuser(props.user._id) }}>delete</a>
    </td>
  </tr>
)


export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.deleteuser = this.deleteuser.bind(this)

    this.state = {user: []};
  }

  componentDidMount() {
    axios.get('/api/user/')
      .then(response => {
        this.setState({ user: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteuser(id) {
    axios.delete('/api/user/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.user.filter(el => el._id !== id)
    })
  }

  userList() {
    return this.state.user.map(currentuser => {
      return <User user={currentuser} deleteuser={this.deleteuser} key={currentuser._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3></h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.userList() }
          </tbody>
        </table>
      </div>
    )
  }
}