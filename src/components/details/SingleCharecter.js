import axios from 'axios';
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class SingleCharecter extends Component {
  state = {
    detail: [],
  };
  componentDidMount() {
    let requestedProfile = [];
    axios.get('http://localhost:5000/api/charecter/ron').then((res) => {
      let { data } = res;
      data = data.detail[0];
      console.log(data);
      //   requestedProfile.push(data);
      this.setState({ detail: data });
    });
    console.log(requestedProfile);
  }
  render() {
    console.log(this.state.detail);
    return (
      <div>
        <Image src={this.state.detail.photo} roundedCircle fluid />
        <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
          <Tab eventKey='profile' title='Profile'>
            {this.state.detail.name}
          </Tab>
          <Tab eventKey='description' title='description'>
            {this.state.detail.description}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SingleCharecter;
