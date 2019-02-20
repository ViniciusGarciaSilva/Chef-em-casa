import * as React from 'react';
import MenuDetailContainer from './menu-detail.controller';

class MenuDetailPage extends React.Component<any, any> {
  render() {
    return <MenuDetailContainer id={this.props.match.params.id}/>;
  }
}

export default MenuDetailPage;