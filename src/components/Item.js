import React, { Component } from 'react';

class Item extends Component {
	render() {
		const { data }  = this.props;
		return (
			<li className="item">
				<span className="item-elements">
					<img className="item-img" src="/no-image.jpg" alt="No Image :(" />
				</span>
				<span className="item-name">{data.system.name}</span>
			</li>
		);
	}
}

export default Item;
