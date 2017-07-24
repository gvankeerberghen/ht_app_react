import * as React from 'react';
import * as classnames from 'classnames';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import {
  cyan300,
  grey500
} from 'material-ui/styles/colors';

interface ITechItemProps {
  userId: string;
  tech: any;
  switchVote: (usedId: string, techId: number) => void;
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

  render() {
    const {tech, userId, switchVote} = this.props;
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
              onClick={() => switchVote(userId, tech.id)}
            >
              <FontIcon className='material-icons' color={hasUserVote ? cyan300 : grey500 }>bookmark</FontIcon>
            </IconButton>
          }
        />
    );
  }
}

export default TechListItem;
