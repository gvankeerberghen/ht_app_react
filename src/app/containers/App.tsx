import * as React from 'react';
import {IDispatch} from '~react-redux~redux/redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import {addTech, deleteTech, editTech} from '../actions/index';

interface IAppProps {
  techs?: any[];
  actions?: any;
}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  static propTypes = {
    techs: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  render() {
    const {techs, actions} = this.props;
    return (
      <div>
        <Header
          addTech={actions.addTech}
          />
        <MainSection
          techs={techs}
          actions={actions}
          />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    techs: state.techs
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    actions: bindActionCreators({
      addTech,
      deleteTech,
      editTech
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
