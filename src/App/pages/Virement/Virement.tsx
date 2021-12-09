import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './Virement.style';

interface VirementProps {}

const Virement: React.FC<VirementProps> = () => {
  return (
    <View data-testID="Virement" style={styles.Virement}>
      <Text
        style={{
          color: 'black',
          fontSize: 32,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        virement
      </Text>
    </View>
  );
};

function mapStateToProps(state: any, own: any) {
  return {
    ...own,
    ...state,
  };
}
function mapDispatchToProps(dispatch: Function) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Virement);
