import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

import Members from '../Members';
import FamilyTree from '../FamilyTree';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';

class Main extends Component {
  render() {
    return (
     	<React.Fragment>
     		<Header />
        <SideBar />

        <div class="main">
          <Router>
            <Route path="/family-tree" component={FamilyTree}/>
            <Route path="/members" component={Members} />  
            <Route path="/statistics" component={Members} />  
          </Router>
        </div>
     	</React.Fragment>
    );
  }
}

export default Main;