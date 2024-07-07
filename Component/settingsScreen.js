import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, isDarkMode && styles.darkText]}>Language</Text>
          <Icon name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, isDarkMode && styles.darkText]}>My Profile</Text>
          <Icon name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, isDarkMode && styles.darkText]}>Contact Us</Text>
          <Icon name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, isDarkMode && styles.darkText]}>Change Password</Text>
          <Icon name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
          <Text style={[styles.itemText, isDarkMode && styles.darkText]}>Privacy Policy</Text>
          <Icon name="chevron-forward" size={20} color={isDarkMode ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      <View style={styles.themeContainer}>
        <View style={styles.item}>
          <Text style={[styles.itemText, isDarkMode && styles.darkText]}>Theme</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#16ff16' }}
            thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 50,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  itemContainer: {
    paddingVertical: 30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
  },
  darkText: {
    color: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 0,
  },
  themeContainer: {
    paddingVertical: 20,
    marginTop: 40,
  },
});
