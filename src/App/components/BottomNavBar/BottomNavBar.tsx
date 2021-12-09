import React from 'react';
import {Image, View} from 'react-native';
import {connect} from 'react-redux';
import Budget from '../../pages/Budget/Budget';
import HomePage from '../../pages/HomePage/HomePage';
import Profil from '../../pages/Profil/Profil';
import ItemNavBar from '../ItemNavBar/ItemNavBar';
import Virement from '../../pages/Virement/Virement';

import {styles} from './BottomNavBar.style';

interface BottomNavBarProps {
  goTo: Function;
  name: string;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({goTo, name}) => {
  return (
    <View data-testID="BottomNavBar" style={styles.BottomNavBar}>
      <ItemNavBar
        text="Home"
        icon={
          <Image
            style={{width: 25, height: 25}}
            source={require('../../../assets/images/home_icon.png')}
          />
        }
        selected={name === 'Home' ? true : false}
        action={() => {
          goTo(<HomePage />, 'Home');
        }}
      />
      <ItemNavBar
        text="Budget"
        icon={
          <Image
            style={{width: 25, height: 25}}
            source={require('../../../assets/images/fromage_icon.png')}
          />
        }
        selected={name === 'Budget' ? true : false}
        action={() => {
          goTo(<Budget />, 'Budget');
        }}
      />
      <ItemNavBar
        text="Virement"
        icon={
          <Image
            style={{width: 25, height: 25}}
            source={require('../../../assets/images/send_icon.png')}
          />
        }
        selected={name === 'Virement' ? true : false}
        action={() => {
          goTo(<Virement />, 'Virement');
        }}
      />
      <ItemNavBar
        text="Profil"
        icon={
          <Image
            style={{width: 25, height: 25}}
            source={require('../../../assets/images/person_icon.png')}
          />
        }
        selected={name === 'Profil' ? true : false}
        action={() => {
          goTo(<Profil />, 'Profil');
        }}
      />
    </View>
  );
};

function mapStateToProps(state: any, own: any) {
  return {
    ...own,
    ...state.nav,
  };
}
function mapDispatchToProps(dispatch: Function) {
  return {
    goTo: (value: any, name: string) => {
      dispatch({
        type: 'GO_TO',
        value: value,
        name: name,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavBar);
