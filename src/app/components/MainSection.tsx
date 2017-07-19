import * as React from 'react';
import TechItem from './TechItem';
import TechListItem from './TechListItem';
import Footer from './Footer';
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

    techs.sort((a, b) => a.votes.length > b.votes.length ? -1 : 1);
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
                addVote={actions.addVote}
                removeVote={actions.removeVote}
                />
            )}
          </List>
        </Paper>
      </section>
    );
  }
}

export default MainSection;
