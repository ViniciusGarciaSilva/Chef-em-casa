import React from 'react';
import Header from './components/header/header.component';
import MenuDetailPage from './modules/menus/details/menu-detail.page';
import MenusPage from './modules/menus/general/menus.page';
import { Route, Switch } from 'react-router-dom';
import './app.css';


class App extends React.Component {
  render() {
    return (
      <div>
          <Header/>
          <div className='app__page'>
            <Switch>
              <Route path="/" exact={true} component={MenuDetailPage} />
              <Route path="/menus" component={MenusPage} />
            </Switch>
          </div>
      </div>
    );
  }
}

export default App;
