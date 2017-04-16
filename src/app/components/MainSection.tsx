import * as React from 'react';
import TechItem from './TechItem';
import Footer from './Footer';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

interface IMainProps {
  techs: any[];
  actions: any;
};

interface IMainState {
  filter: string;
};

class MainSection extends React.Component<IMainProps, IMainState> {
  static propTypes = {
    techs: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {filter: SHOW_ALL};
    this.handleShow = this.handleShow.bind(this);
  }

  handleShow(filter: string) {
    this.setState({filter});
  }

  renderFooter(completedCount: number) {
    const {techs} = this.props;
    const {filter} = this.state;
    const activeCount = techs.length - completedCount;

    if (techs.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onShow={this.handleShow}
          />
      );
    }
  }

  render() {
    const {techs, actions} = this.props;
    const {filter} = this.state;

    const filteredTechs = techs.filter(TODO_FILTERS[filter]);
    const completedCount = techs.reduce((count, tech) =>
      tech.completed ? count + 1 : count,
      0
    );

    return (
      <section className='main'>
        <ul className='todo-list'>
          {filteredTechs.map(tech =>
            <TechItem
              key={tech.id}
              tech={tech}
              {...actions}
              />
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}

export default MainSection;
