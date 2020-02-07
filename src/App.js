import React from 'react';
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drupal Case Studies</h1>
      </header>
    </div>
  );
}

const mapStateToProps = state => {

};

export default connect(() =>
    mapStateToProps,
  {
  }
)(App);
