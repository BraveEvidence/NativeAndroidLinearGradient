/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CealGradientView from './components/CealGradientView';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const BorderButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: 'orange',
        height: 100,
        borderColor: 'yellow',
        borderWidth: 3,
      }}
      onPress={() => {}}>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 48,
          textTransform: 'uppercase',
          color: 'red',
        }}>
        Hello
      </Text>
    </TouchableOpacity>
  );
};

const App: () => Node = () => {
  return (
    <CealGradientView
      colors={['#2d3133', '#464A4D', '#444DBB']}
      style={{flex: 1}}>
      <BorderButton />
    </CealGradientView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
