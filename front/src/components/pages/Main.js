import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import MembersArea from '../MembersArea';
import FamilyTree from '../FamilyTree';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';

class Main extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios
    .get('http://localhost:8081/person')
    .then(res => this.setState({ users: res.data }));
  }

  render() {
    return (
     	<React.Fragment>
     		<Header />
        <SideBar />

        <div className="main">
          <Router>
            <Route path="/family-tree" component={FamilyTree}/>
            <Route path="/members"> 
              <MembersArea users={this.state.users} />
            </Route>
            <Route path="/statistics" component={MembersArea} users={this.state.users} />  
          </Router>
        </div>
     	</React.Fragment>
    );
  }
}

export default Main;