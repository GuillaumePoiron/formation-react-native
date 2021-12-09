import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Modal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  content: {
    backgroundColor: 'white',
    elevation: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingTop: 24,
    paddingBottom: 12,
  },
});
