import * as React from 'react';
import * as classnames from 'classnames';

interface ITechNameInputProps {
  onSave: (text: string) => void;
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTech?: boolean;
};

interface ITechNameInputState {
  text: string;
};

class TechNameInput extends React.Component<ITechNameInputProps, ITechNameInputState> {
  static propTypes = {
    onSave: React.PropTypes.func.isRequired,
    text: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    editing: React.PropTypes.bool,
    newTech: React.PropTypes.bool
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: any) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTech) {
        this.setState({text: ''});
      }
    }
  }

  handleChange(e: any) {
    this.setState({text: e.target.value});
  }

  handleBlur(e: any) {
    if (!this.props.newTech) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input
        className={
          classnames({
            'edit': this.props.editing,
            'new-todo': this.props.newTech
          })}
        type='text'
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        />
    );
  }
}

export default TechNameInput;