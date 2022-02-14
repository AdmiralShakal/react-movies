import {Header} from './Layout/Header'
import {Footer} from './Layout/Footer'
import { Main } from './Layout/Main';
import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>    
      )
  }
}

export default App;
