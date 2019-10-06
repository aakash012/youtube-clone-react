import React, {Component} from 'react';
import {Home} from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <AppLayout>
       <Route path="/watch" component={Watch}/>
       <Route path="/" component={Home}/>
      </AppLayout>
    );
  }
}

export default App;