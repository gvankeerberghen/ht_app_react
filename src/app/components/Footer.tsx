import * as React from 'react';
import * as classnames from 'classnames';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants/TodoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

interface IFooterProps {
  completedCount: number;
  activeCount: number;
  filter: string;
  onShow: (filter: string) => void;
};

interface IFooterState {};

class Footer extends React.Component<IFooterProps, IFooterState> {
  static propTypes = {
    completedCount: React.PropTypes.number.isRequired,
    activeCount: React.PropTypes.number.isRequired,
    filter: React.PropTypes.string.isRequired,
    onShow: React.PropTypes.func.isRequired
  };

  renderTodoCount() {
    const {activeCount} = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    return (
      <span className='todo-count'>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );
  }

  renderFilterLink(filter: string) {
    const title = FILTER_TITLES[filter];
    const {filter: selectedFilter, onShow} = this.props;
    const handleChange = () => onShow(filter);

    return (
      <a
        className={classnames({selected: filter === selectedFilter})}
        style={{cursor: 'pointer'}}
        onClick={handleChange}
        >
        {title}
      </a>
    );
  }

  render() {
    return (
      <footer className='footer'>
        {this.renderTodoCount()}
        <ul className='filters'>
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
      </footer>
    );
  }
}

export default Footer;
