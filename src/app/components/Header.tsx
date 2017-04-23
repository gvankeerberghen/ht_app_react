import * as React from 'react';
import TechNameInput from './TechNameInput';

interface IHeaderProps {
  addTech: (text: string) => void;
};

interface IHeaderState {};

class Header extends React.Component<IHeaderProps, IHeaderState> {
  static propTypes = {
    addTech: React.PropTypes.func.isRequired
  };
  constructor(props: any) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text: string) {
    if (text.length !== 0) {
      this.props.addTech(text);
    }
  }

  render() {
    return (
      <header className='header'>
        <h1>Techs</h1>
        <TechNameInput
          newTech
          onSave={this.handleSave}
          placeholder='What techs do you want to add?'
          />
      </header>
    );
  }
}

export default Header;
