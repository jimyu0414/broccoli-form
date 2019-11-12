import React from 'react';
import './Main.scss';
import { Button, ButtonToolbar } from 'react-bootstrap';
import BrocoModal from './components/BrocoModal';

class App extends React.Component {
  state = {
    showModal : false,
  }
  render(){
    return (
      <div className="App">
        <header className="App__header">
            <div className="container">
              <h1>Broccoli & Co</h1>
            </div>
        </header>
        <div className="App__request">
        <div className="container">
          <h1>A better way <br/>to enjoy every day.</h1>
          <p>Be the first to know hwen we launch.</p>
          <ButtonToolbar>
            <Button 
            className="button button__simple"
            onClick={() => this.setState({
              showModal : true
            })}
            >
              Request an invite</Button>
          </ButtonToolbar>
          <BrocoModal 
          show={this.state.showModal}
          onHide={() => this.setState(
            {showModal : false}
          )}
        />
        </div>
        </div>
        <footer className="App__footer">
          <div className="container">
                <p>Broccoli is an edible green plant in the cabbage family
                  <br />
                  whose large flowering head and stalk is eaten as a vegetable.
                </p>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
