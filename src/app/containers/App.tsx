import * as React from 'react';
import {IDispatch} from '~react-redux~redux/redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import TechCard from '../components/TechCard';
import {addTech, deleteTech, editTech, switchVote, selectTech} from '../actions/index';

interface IAppProps {
  userId: string;
  techs?: any[];
  actions?: any;
  selectedTechId: number;
}

interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  static propTypes = {
    techs: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  };

  render() {
    const {userId, techs, actions, selectedTechId} = this.props;

    const styles = {
      mainContainer: {
        display: 'flex'
      },
      listContainer: {
        flex: '1',
        marginRight: '10px',
        marginTop: '10px'
      },
      techCard: {
        flex: '2',
        marginTop: '10px'
      }
    };

    return (
      <div>
        <Header/>
        <div style={styles.mainContainer}>
          <div style={styles.listContainer}>
            <MainSection
              userId={userId}
              techs={techs}
              actions={actions}
              />
          </div>
          <div style={styles.techCard}>
            <TechCard tech={techs.find( (tech) => tech.id === selectedTechId )} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    userId: state.user.id,
    techs: state.techs,
    selectedTechId: state.selections.selectedTechId
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    actions: bindActionCreators({
      addTech,
      deleteTech,
      editTech,
      switchVote,
      selectTech
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
