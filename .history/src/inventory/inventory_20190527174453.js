import React from 'react';

import './inventory.css';
import heisiyeti from '../assets/heiseyeti.png';
class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dragStatus: false,
      X: 0,
      Y: 0
    }
    this.startDragDrop = this.startDragDrop.bind(this);
    this.moveDragDrop = this.moveDragDrop.bind(this);
    this.endDragDrop = this.endDragDrop.bind(this);
  }

  startDragDrop() {
    this.setState({
      dragStatus: true
    });
  }

  moveDragDrop(event) {
    this.setState({
      X: event.touches[0].clientX - 25 + 'px',
      Y: event.touches[0].clientY - 30 + 'px'
    });
  }

  endDragDrop() {
    this.setState({
      dragStatus: false
    });
  }
    
  render() {
    return (
      <div className="inventory-content-wrap">
        {this.props.prop ? <img onTouchStart={this.startDragDrop} onTouchEnd={this.endDragDrop} onTouchMove={ this.moveDragDrop } src={heisiyeti} alt="" /> : "道具为空"}
        { this.state.dragStatus ? <img className="drag-drop-el" style={{left: this.state.X, top: this.state.Y}} src={heisiyeti} alt="" /> : null}
        X: {this.state.X}
        y: {this.state.Y}
      </div>
    );
  }
}

export default Inventory;
