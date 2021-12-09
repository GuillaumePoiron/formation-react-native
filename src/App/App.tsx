import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
} from 'react-native';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import {connect} from 'react-redux';

interface BottomNavBarProps {
  page: any;
}

const App = ({page}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="transparent" />
      {page}
      <BottomNavBar />
      <Modal>
        <View>
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
              Titre
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                paddingVertical: 12,
              }}>
              Oh breizh
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button text="Annuler" bgColor="orange" onTap={() => null}>
              <Image
                style={{width: 25, height: 25}}
                source={require('./../assets/images/cross_icon.png')}
              />
            </Button>
            <Button text="Valider" bgColor="blue" onTap={() => null}>
              <Image
                style={{width: 25, height: 25}}
                source={require('./../assets/images/cross_icon.png')}
              />
            </Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 60,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  containerHeader: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  card: {
    marginVertical: 8,
    elevation: 3,
  },
  textHeader: {
    color: 'white',
    fontSize: 24,
  },
  text: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
});

function mapStateToProps(state: any, own: any) {
  return {
    ...own,
    ...state.nav,
  };
}
function mapDispatchToProps(dispatch: Function) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
