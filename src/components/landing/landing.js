import React, { Component } from 'react';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import harry from './../../assets/harry.jpg';
import Container from 'react-bootstrap/Container';

import CardComponent from './card';

class Landing extends Component {
  state = {
    charecters: [],
  };
  componentDidMount() {
    this.fetchCharecters();
  }

  fetchCharecters = () => {
    let charecter = [];
    axios.get('http://localhost:5000/api/listAll').then((res) => {
      const { data } = res;

      data.charecters.forEach((ch) => {
        let newCharecter = {
          name: ch.name,
          description: ch.description,
          photo: ch.photo,
        };
        charecter.push(newCharecter);
      });
      this.setState({ charecters: charecter });
    });
  };
  render() {
    return (
      <Container>
        <CardComponent charecters={this.state.charecters} />
      </Container>
    );
  }
}

export default Landing;
