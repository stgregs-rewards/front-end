import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authUser, ...rest }) => {
  return (
    <Route {...rest} render={props =>
      authUser 
      ?
        <Component {...props} />
      :
      <Redirect to="/login" />
    }/>
  );
};

const mapStateToProps = (state) => {
  return {
    authUser: state.auth.authUser
  }
};

export default connect(mapStateToProps)(PrivateRoute);