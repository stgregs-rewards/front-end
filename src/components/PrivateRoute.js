import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authUser, ...rest }) => {
  window.localStorage.setItem('last-page', window.location.pathname);

  return (
    <Route {...rest} render={props =>
      authUser 
      ?
        <Component {...props} />
      :
      <Redirect to="/login" />
    }/>
  );
}

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.authUser
  }
}

export default connect(mapStateToProps)(PrivateRoute);