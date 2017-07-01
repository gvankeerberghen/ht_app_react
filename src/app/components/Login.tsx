import * as React from 'react';
import {IDispatch} from '~react-redux~redux/redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {login} from '../actions/index';
import { routerActions } from 'react-router-redux';

interface IMainProps {
  login?: any;
  location?: any;
  redirect?: any;
};

interface IMainState {
  email: String;
  name: String;
};

class Login extends React.Component<IMainProps, IMainState> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      email: null,
      name: null
    };
  }

  onSubmit = (e) => {
    this.props.login(this.state.name, this.state.email);
    this.props.redirect(this.props.location.query.redirect || '/');
  }

  render() {
    return (
      <Paper>
        <Card className='container'>
          <form onSubmit={this.onSubmit}>
            <h2 className='card-heading'>Sign in</h2>
            <div className='field-line'>
              <TextField
                floatingLabelText='Name'
                name='name'
                onChange={(event, newValue) => this.setState({name: newValue})}
              />
            </div>

            <div className='field-line'>
              <TextField
                floatingLabelText='Email'
                name='email'
                onChange={(event, newValue) => this.setState({email: newValue})}
              />
            </div>

            <div className='button-line'>
              <RaisedButton type='submit' label='Sign in' primary onClick={this.onSubmit} />
            </div>
          </form>
        </Card>
      </Paper>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: IDispatch) {
  return bindActionCreators({
      login,
      redirect: routerActions.replace
    }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
