import React, { Component } from 'react';

class ItemWithImage extends Component {
  render() {
    const { data }  = this.props;
    return (
      <li className="item">
        <span className="item-elements">
          <img className="item-img" src={data.elements.image.value[0].url} alt={data.elements.image.name} />
        </span>
        <span className="item-name">{data.system.name}</span>
      </li>
    );
  }
}

export default ItemWithImage;
