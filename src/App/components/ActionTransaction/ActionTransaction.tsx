import React, {useEffect, useState} from 'react';
import {Image, Switch, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {MODAL_ACTIONS} from '../../store/modalReducer';
import Button from '../Button/Button';

import {styles} from './ActionTransaction.style';

interface ActionTransactionProps {
  onCancel: Function;
  onOk: Function;
}

const ActionTransaction: React.FC<ActionTransactionProps> = props => {
  const [libele, setLibele] = useState('');
  const [price, setPrice] = useState('0.0');
  const [actionType, setActionType] = useState(true);

  useEffect(() => {
    const pfPrice = parseFloat(price);
    if (pfPrice > 0) {
      setPrice(pfPrice.toFixed(2));
    } else {
      setPrice('0');
    }
  }, [price]);

  return (
    <View data-testID="ActionTransaction" style={styles.ActionTransaction}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          marginBottom: 5,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
            paddingVertical: 8,
          }}>
          Enregistrez une transaction
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
        }}>
        <Text
          style={{
            flexGrow: 1,
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'right',
          }}>
          Credit
        </Text>
        <Switch
          value={actionType}
          onValueChange={bool => {
            setActionType(bool);
          }}
        />
        <Text
          style={{
            flexGrow: 1,
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            paddingHorizontal: 8,
          }}>
          Débit
        </Text>
      </View>
      <View>
        <Text style={{color: 'black', paddingHorizontal: 16}}>Libele</Text>
        <TextInput
          value={libele}
          placeholder="Votre libelé"
          onChangeText={val => {
            setLibele(val);
          }}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={{color: 'black', paddingHorizontal: 16}}>Montant</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={val => {
            setPrice(val);
          }}
          keyboardType="decimal-pad"
        />
      </View>
      <Text>
        {libele} / {price}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          text="Annuler"
          bgColor="red"
          onTap={() => {
            props.onCancel();
          }}>
          <Image
            style={{width: 25, height: 25}}
            source={require('./../../../assets/images/cross_icon.png')}
          />
        </Button>
        <Button
          text="Valider"
          bgColor="blue"
          onTap={() => {
            props.onOk(actionType ? 'RETRAIT' : 'DEPOT', {
              libele: libele,
              price: actionType ? -Number(price) : Number(price),
            });
          }}>
          <Image
            style={{width: 25, height: 25}}
            source={require('./../../../assets/images/cross_icon.png')}
          />
        </Button>
      </View>
    </View>
  );
};

function mapStateToProps(state: any, own: any) {
  return {
    ...own,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    onCancel: () => {
      dispatch({type: MODAL_ACTIONS.HIDE});
    },
    onOk: (actionType: string, value: {libele: string; price: number}) => {
      if (value.price !== 0) {
        dispatch({type: actionType, value: value});
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionTransaction);
