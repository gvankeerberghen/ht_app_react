import * as React from 'react';
import AppBar from 'material-ui/AppBar';

interface IHeaderProps {
};

interface IHeaderState {};

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <AppBar
          showMenuIconButton={false}
          title='Web Techs to explore'
        />
    );
  }
}

export default Header;
