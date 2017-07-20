import * as React from 'react';
import TechListItem from './TechListItem';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

interface IMainProps {
  userId: string;
  techs: any[];
  actions: any;
};

interface IMainState {};

class MainSection extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    techs: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    const {userId, techs, actions} = this.props;

    techs.sort((a, b) => {
      if (a.votes.length > b.votes.length) {
        return -1;
      } else if (a.votes.length < b.votes.length) {
        return 1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    });

    const completedCount = techs.reduce((count, tech) =>
      tech.completed ? count + 1 : count,
      0
    );

    return (
      <section className='main'>
        <Paper>
          <List>
            {techs.map(tech =>
              <TechListItem
                key={tech.id}
                userId={userId}
                tech={tech}
                switchVote={actions.switchVote}
                />
            )}
          </List>
        </Paper>
      </section>
    );
  }
}

export default MainSection;
