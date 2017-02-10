import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Item from './Item';
import ItemWithImage from './ItemWithImage';
import KenticoCloudAPI from 'kentico-deliver-js';
import { projectId, previewAPIKey }  from '../config/default';

@observer
class App extends Component {
  static loadProps(params, cb) {
    const api = new KenticoCloudAPI(projectId, previewAPIKey);
    api
      .type('developer')
      .run()
      .then(data => cb(null, { data }))
      .catch(error => console.warn(error));
  }

  renderContent(content) {
    // This is a bad example of what to do with the data. We would want
    // to process this `functionally` and sort into some sort of a 
    // view model. But for now, let's just output some stuff.

    return content.map(item => {
      if (item.elements.image != undefined) {
        return <ItemWithImage key={item.system.codename} data={item} />
      }
      else {
        return <Item key={item.system.codename} data={item} />
      }
    })
  }

  handleClick() {
    alert('💩');
  }
  
  render() {
    const content = this.props.data.items;

    return (
      <div className="app-wrapper">
        <div className="app-container">
          <strong className="page-title">This data is being pulled from the Kentico Cloud endpoint 😏</strong>
          <button onClick={this.handleClick}>Button to test that JS is on and working</button>
          <ul className="items">
            {this.renderContent(content)}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
