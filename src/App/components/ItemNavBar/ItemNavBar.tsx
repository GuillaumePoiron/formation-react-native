import React, {ReactElement, ReactNode} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {styles} from './ItemNavBar.style';

interface ItemNavBarProps {
  text?: string;
  icon: Image | ReactNode | ReactElement;
  selected?: boolean;
  action: Function;
}

const ItemNavBar: React.FC<ItemNavBarProps> = ({
  text,
  icon,
  selected,
  action,
}) => {
  return (
    <View
      data-testID="ItemNavBar"
      style={{
        ...styles.ItemNavBar,
      }}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          action();
        }}>
        {icon}
        <Text style={{color: selected ? 'blue' : 'black'}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItemNavBar;
