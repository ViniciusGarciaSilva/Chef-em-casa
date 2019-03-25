import React from 'react';
import Header from './components/header/header.component';
import MenuDetailPage from './modules/menus/details/menu-detail.page';
import MenusPage from './modules/menus/general/menus.page';
import HomePage from './modules/home/home.page'
import { Route, Switch } from 'react-router-dom';
import './app.css';
import Footer from './components/footer/footer.component';
import OrderDetailPage from './modules/menus/orders/details/order-detail.page';
import OrdersPage from './modules/menus/orders/general/orders.page';


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
              <Route path="/orders" component={OrdersPage} />
              <Route path="/order-detail/:id" component={OrderDetailPage} />
            </Switch>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
