import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'Sedan', value: '1' },
  { label: 'SUV', value: '2' },
  { label: 'Sports Car', value: '3' },
  { label: 'Truck', value: '4' },
];

const data1 = [
  { label: 'Yes', value: '1' },
  { label: 'No', value: '2' },
];

const data2 = [
  { label: 'Yes', value: '1' },
  { label: 'No', value: '2' },
];

const SurveyContest = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}></Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>Survey Contest</Text>
      </View>
      <ScrollView  style={{padding:20}}>
        <Text>First Name</Text>
        <TextInput style={styles.input}
          placeholder="Enter FirstName"></TextInput>

        <Text>Email Address</Text>
        <TextInput style={styles.input}
          placeholder="Enter Email"></TextInput>

        <Text>Phone No</Text>
        <TextInput style={styles.input}
          placeholder="(###)###-####"></TextInput>

        <Text>What type of car do you own?</Text>

        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
              width={310}
              height={30}
              marginBottom={10}
              padding={10}
            />
          )}
        />

        <Text>Do you plan on attending the event this year?</Text>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data1}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
              width={310}
              height={30}
              marginBottom={10}
              padding={10}
            />
          )}
        />
        <Text>If you are attending, what is your main reason for attending?</Text>
        <TextInput style={styles.input}
          placeholder="Enter Reason"></TextInput>


        <Text>Do you have any comments or suggestions for the event organizers?</Text>
        <TextInput style={styles.input}
          placeholder="Enter cmments here..."></TextInput>

        <TouchableOpacity style={styles.submit}>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
export default SurveyContest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: "flex-start",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    width: 350,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d9d9d9',
  },
  messagebox: {
    marginBottom: 10,
    padding: 10,
    width: 350,
    height: 250,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d9d9d9',

  },
  submit: {
    backgroundColor: '#004B87',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    margin: 10
  },
  text: {
    color: 'white',
    textAlign: 'center',

  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
    padding: 10,
    width: 350,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d9d9d9',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  HeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#004B87',
    padding: 20,
},
HeaderView: {
    backgroundColor: '#fff',
    marginLeft: '2%',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
        width: 3,
        height: 3
    },
},
}
);