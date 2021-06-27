// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

import Landing from './components/landing/landing';
import SingleChrecter from './components/details/SingleCharecter';

function App() {
  return (
    <Router>
      <Container fluid>
        <header>
          <div>Harry Poter Database</div>
        </header>
      </Container>
      <Switch>
        <Route path='/' exact component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
