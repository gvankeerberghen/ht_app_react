import * as React from 'react';
import {IDispatch} from '~react-redux~redux/redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {login} from '../actions/index';
import { routerActions } from 'react-router-redux';
import GoogleLogin from 'react-google-login';

interface IMainProps {
  login?: any;
  location?: any;
  redirect?: any;
};

interface IMainState {};

class Login extends React.Component<IMainProps, IMainState> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  onSuccess = (e) => {
    this.props.login(e.profileObj);
    this.props.redirect(this.props.location.query.redirect || '/');
  }

  failure = (e) => {
    console.log('Google login error', e);
  }

  render() {
    return (
      <Paper>
        <Card className='container'>
          <CardTitle title='Let us know who you are' subtitle='Login with a Google account' />
          <CardText>
            To add new technologies, vote and leave your notes we'd like to know you
          </CardText>
          <Paper>
            <GoogleLogin
              clientId='915912997435-abd8tbnutgn9fheta7e6ed04hmhd50t9.apps.googleusercontent.com'
              buttonText='Login with Google'
              onSuccess={this.onSuccess}
              onFailure={this.failure}
            />
          </Paper>
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
