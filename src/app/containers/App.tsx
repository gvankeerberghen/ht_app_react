import * as React from 'react';
import {IDispatch} from '~react-redux~redux/redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import {addTech, deleteTech, editTech, switchVote} from '../actions/index';

interface IAppProps {
  userId: string;
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
    const {userId, techs, actions} = this.props;
    return (
      <div>
        <Header/>
        <MainSection
          userId={userId}
          techs={techs}
          actions={actions}
          />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    userId: state.user.id,
    techs: state.techs
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    actions: bindActionCreators({
      addTech,
      deleteTech,
      editTech,
      switchVote
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
