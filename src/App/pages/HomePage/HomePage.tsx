import React from 'react';
import {ScrollView, View, Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {MODAL_ACTIONS} from '../../store/modalReducer';
import ActionTransaction from '../../components/ActionTransaction/ActionTransaction';
import Transaction from '../../components/Transaction/Transaction';
import Button from '../../components/Button/Button';

import {styles} from './HomePage.style';

interface HomePageProps {
  transactions: Array<{
    id?: number;
    type: string;
    libele: string;
    price: number;
  }>;
  solde: number;
  makeTransact: Function;
}

const HomePage: React.FC<HomePageProps> = ({
  transactions,
  solde,
  makeTransact,
}) => {
  return (
    <View data-testID="HomePage" style={styles.HomePage}>
      <View style={styles.header}>
        <View style={styles.imgHeader}>
          <Image
            style={{width: '100%', height: 150}}
            source={require('./../../../assets/images/NoelseAmbassadorDigital.png')}
          />
        </View>
      </View>
      <View style={styles.header2}>
        <View style={styles.containerButtons}>
          <Button
            text="Transaction"
            bgColor="orange"
            onTap={() => {
              makeTransact();
            }}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./../../../assets/images/arrow_down_go_two_up_icon.png')}
            />
          </Button>
        </View>
        <Text style={styles.solde}>Solde : {solde}€</Text>
      </View>
      <ScrollView contentContainerStyle={{}}>
        {transactions.map(item => (
          <Transaction key={item.id} libele={item.libele} price={item.price} />
        ))}
      </ScrollView>
    </View>
  );
};
function mapStateToProps(state: any, own: any) {
  return {
    ...own,
    ...state.data,
  };
}
function mapDispatchToProps(dispatch: Function) {
  return {
    makeTransact: () => {
      dispatch({
        type: MODAL_ACTIONS.SHOW,
        value: <ActionTransaction />,
      });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
