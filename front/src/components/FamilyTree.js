import React, { Component } from 'react';

class FamilyTree extends Component {
  render() {
    return (
      <div>
      	<div class="search">
          <input type="text" placeholder="Find BESTie" />
          <span><i class="fas fa-search"></i></span>
        </div>
        <div class="buttons">
          <button class="button"><i class="fas fa-plus pr-2"></i>Add New BESTie</button>
          <button class="button"><i class="fas fa-file-download pr-2"></i>Download As PNG</button>
        </div>
        <div class="size">
          <div>
            <i class="fas fa-plus"></i>
          </div>
          <div>
            <i class="fas fa-minus"></i>
          </div>
        </div>

        <div class="area"></div>
      </div>
    );
  }
}

export default FamilyTree;