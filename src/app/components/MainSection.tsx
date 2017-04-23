import * as React from 'react';
import TechItem from './TechItem';
import TechListItem from './TechListItem';
import Footer from './Footer';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

interface IMainProps {
  techs: any[];
  actions: any;
};

interface IMainState {
  sortBy: string;
};

class MainSection extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    techs: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {sortBy: 'votes'};
  }

  render() {
    const {techs, actions} = this.props;
    const {sortBy} = this.state;

    techs.sort((a, b) => a[sortBy] > b[sortBy] ? -1 : 1);
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
                tech={tech}
                />
            )}
          </List>
        </Paper>
      </section>
    );
  }
}

export default MainSection;
