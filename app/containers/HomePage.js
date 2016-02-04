import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import { bindActionCreators } from 'redux';
import * as PartsActions from '../actions/parts';


function mapStateToProps(state) {
  return {
    parts: state.parts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PartsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);