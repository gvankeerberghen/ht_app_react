import * as React from 'react';
import * as classnames from 'classnames';
import TechNameInput from './TechNameInput';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

interface ITechItemProps {
  userId: string;
  tech: any;
  addVote: (usedId: string, techId: number) => void;
  removeVote: (usedId: string, techId: number) => void;
};

interface ITechListItemState {};

class TechListItem extends React.Component<ITechItemProps, ITechListItemState> {
  static propTypes = {
    tech: React.PropTypes.object.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);
  }

  hasUserVote = () => {
    return this.props.tech.votes.indexOf(this.props.userId) > -1;
  }

  onClick = () => {
    const techId = this.props.tech.id;
    const userId = this.props.userId;

    if (this.hasUserVote()) {
      this.props.removeVote(userId, techId);
    } else {
      this.props.addVote(userId, techId);
    }
  }
 
  render() {
    const {tech} = this.props;
    const hasUserVote = this.hasUserVote();

    return (
        <ListItem
          primaryText={tech.name}
          secondaryText={tech.type}
          leftAvatar={
            <Avatar
              size={30}
            >
              {tech.votes.length}
            </Avatar>
          }
          rightIconButton={
            <IconButton
              onClick={this.onClick}
            >
              <FontIcon className="material-icons">{hasUserVote ? 'clear' : 'add'}</FontIcon>
            </IconButton>
          }
        />
    );
  }
}

export default TechListItem;
