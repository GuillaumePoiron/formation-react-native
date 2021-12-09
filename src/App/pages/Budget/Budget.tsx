import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './Budget.style';

interface BudgetProps {}

const Budget: React.FC<BudgetProps> = () => {
  return (
    <View data-testID="Budget" style={styles.Budget}>
      <Text
        style={{
          color: 'black',
          fontSize: 32,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        budget
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

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
