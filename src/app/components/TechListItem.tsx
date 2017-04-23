import * as React from 'react';
import * as classnames from 'classnames';
import TechNameInput from './TechNameInput';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

interface ITechItemProps {
  tech: any;
};

interface ITechListItemState {};

class TechListItem extends React.Component<ITechItemProps, ITechListItemState> {
  static propTypes = {
    tech: React.PropTypes.object.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    const {tech} = this.props;

    return (
        <ListItem
          primaryText={tech.name}
          secondaryText={tech.type}
          leftAvatar={
            <Avatar
              size={30}
            >
              {tech.votes}
            </Avatar>
          }
        />
    );
  }
}

export default TechListItem;
