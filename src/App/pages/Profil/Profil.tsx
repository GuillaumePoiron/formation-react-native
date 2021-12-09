import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './Profil.style';

interface ProfilProps {}

const Profil: React.FC<ProfilProps> = () => {
  return (
    <View data-testID="Profil" style={styles.Profil}>
      <Text
        style={{
          color: 'black',
          fontSize: 32,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        profil
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

export default connect(mapStateToProps, mapDispatchToProps)(Profil);
