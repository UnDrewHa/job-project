import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import CreateModal from '../components/CreateModal';

const modalTypes = {
  'CREATE_MODAL': CreateModal
};

const RootModal = ({modalType}) => {
  if (!modalType) return null;

  const SpecificModal = modalTypes[modalType];
  return <SpecificModal />
}

export default connect(state => state.modal)(RootModal)