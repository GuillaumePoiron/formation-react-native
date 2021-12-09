import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './Transaction.style';

interface TransactionProps {
  libele: string;
  price: number;
}

const Transaction: React.FC<TransactionProps> = ({libele, price}) => {
  return (
    <View data-testID="Transaction" style={styles.Transaction}>
      {price < 0 ? (
        <Image
          style={{width: 25, height: 25}}
          source={require('./../../../assets/images/arrow_down_go_two_up_icon.png')}
        />
      ) : (
        <Image
          style={{width: 25, height: 25}}
          source={require('./../../../assets/images/share_icon.png')}
        />
      )}
      <Text style={styles.libelle}>{libele}</Text>
      <Text style={styles.price}>{price}€</Text>
    </View>
  );
};

export default Transaction;
