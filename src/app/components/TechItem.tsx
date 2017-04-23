import * as React from 'react';
import * as classnames from 'classnames';
import TechNameInput from './TechNameInput';

interface ITechItemProps {
  tech: any;
  editTech: (id: string, text: string) => void;
  deleteTech: (id: string) => void;
};

interface ITechItemState {
  editing: boolean;
};

class TechItem extends React.Component<ITechItemProps, ITechItemState> {
  static propTypes = {
    tech: React.PropTypes.object.isRequired,
    editTech: React.PropTypes.func.isRequired,
    deleteTech: React.PropTypes.func.isRequired,
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleClick() {
    this.props.deleteTech(this.props.tech.id);
  }

  handleDoubleClick() {
    this.setState({editing: true});
  }

  handleSave(name: string) {
    if (name.length === 0) {
      this.props.deleteTech(this.props.tech.id);
    } else {
      this.props.editTech(this.props.tech.id, name);
    }
    this.setState({editing: false});
  }

  render() {
    const {tech} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TechNameInput
          text={tech.name}
          editing={this.state.editing}
          onSave={this.handleSave}
          />
      );
    } else {
      element = (
        <div className='view'>
          <label
            onDoubleClick={this.handleDoubleClick}
            >
            {tech.name}
          </label>
          <button
            className='destroy'
            onClick={this.handleClick}
            />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          editing: this.state.editing
        })}
        >
        {element}
      </li>
    );
  }
}

export default TechItem;
