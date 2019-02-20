import React from 'react';
import Header from './components/header/header.component';
import MenuDetailPage from './modules/menus/details/menu-detail.page';
import MenusPage from './modules/menus/general/menus.page';
import HomePage from './modules/home/home.page'
import { Route, Switch } from 'react-router-dom';
import './app.css';
import Footer from './components/footer/footer.component';


class App extends React.Component {
  render() {
    return (
      <div className='app'>
          <Header/>
          <div className='app__page'>
            <Switch>
              <Route path='/' exact={true}  component={HomePage} />
              <Route path="/menu-detail/:id" component={MenuDetailPage} />
              <Route path="/menus" component={MenusPage} />
            </Switch>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
