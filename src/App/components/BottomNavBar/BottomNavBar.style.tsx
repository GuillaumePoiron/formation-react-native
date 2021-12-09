import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  BottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: 'white',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.5,
    shadowColor: 'black',
  },
});
