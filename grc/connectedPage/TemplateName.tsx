import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './TemplateName.style';

interface TemplateNameProps {}

const TemplateName: React.FC<TemplateNameProps> = () => {
  return (
    <View data-testID="TemplateName" style={styles.TemplateName}>
      <Text>templateName</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName);
