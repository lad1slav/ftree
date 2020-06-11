import React, { Component } from 'react';

class FamilyTree extends Component {
  render() {
    return (
      <div>
      	<div className="search">
          <input type="text" placeholder="Find BESTie" />
          <span><i className="fas fa-search"></i></span>
        </div>
        <div className="buttons">
          <button className="button"><i className="fas fa-plus pr-2"></i>Add New BESTie</button>
          <button className="button"><i className="fas fa-file-download pr-2"></i>Download As PNG</button>
        </div>
        <div className="size">
          <div>
            <i className="fas fa-plus"></i>
          </div>
          <div>
            <i className="fas fa-minus"></i>
          </div>
        </div>

        <div className="area"></div>
      </div>
    );
  }
}

export default FamilyTree;