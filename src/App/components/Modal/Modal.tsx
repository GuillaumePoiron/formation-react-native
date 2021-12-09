import React, {ReactNode} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './Modal.style';
import {connect} from 'react-redux';

interface ModalProps {
  children?: Array<ReactNode> | ReactNode;
}

const Modal: React.FC<ModalProps> = ({children}) => {
  return children ? (
    <View data-testID="Modal" style={styles.Modal}>
      <View style={styles.content}>{children}</View>
    </View>
  ) : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

function mapStateToProps(state: any, own: any) {
  return {
    ...own,
    ...state.modal,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
export const ModalDisconnected = Modal;
