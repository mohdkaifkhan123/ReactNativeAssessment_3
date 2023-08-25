/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import {
  Ellipse,
  Car,
  User,
  EyeSlash,
  Lock,
  Envelope,
  UncheckBox,
  CheckBox,
  Circle,
  Google,
  Facebook,
  Twitter,
  OpenEye,
} from '../assets/SVG';
import Color from '../assets/UI/Color';
const UIPAGE = () => {
  const [checked, setChecked] = useState(false);
  const [eye, setEye] = useState(false);
  const [eye1, setEye1] = useState(false);
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const handlePress = () => {
    setChecked(!checked);
  };

  const handleSignUp = () => {
    if (!Username || !Email || !Password || !ConfirmPassword) {
      Alert.alert('Please fill out all fields');
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email)
    ) {
      Alert.alert('Email is not valid');
    } else if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/.test(
        Password,
      )
    ) {
      Alert.alert(
        'Password must contain at least one special character, one number, one uppercase alphabet, and be at least 8 characters long.',
      );
    } else if (Password !== ConfirmPassword) {
      Alert.alert('Passwords do not match.');
    } else if (!checked) {
      Alert.alert('Please click on t&c');
    } else {
      setSuccessModalVisible(true);
    }
  };
  const closeModal = () => {
    setSuccessModalVisible(false);
  };
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}> Successfully LoggedIn!</Text>
            <Text style={styles.txtn}>Username: {Username}</Text>
            <Text style={styles.txtn}>Email: {Email}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.top}>
        <Ellipse style={styles.ellipse} />
        <Car style={styles.car} />
      </View>

      <ScrollView style={{flex: 0.6}}>
        <View style={styles.formContainer}>
          <View style={styles.text}>
            <Text style={styles.text1}>SignUp</Text>
            <Text style={styles.text2}>Get Your Car Sparkling Clean</Text>
          </View>
          <Text>{''}</Text>
          <View style={styles.input}>
            <User />
            <TextInput
              style={styles.itext}
              placeholder="Username"
              value={Username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.input}>
            <Envelope />
            <TextInput
              style={styles.itext}
              placeholder="Email"
              value={Email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.input}>
            <Lock />
            <TextInput
              secureTextEntry={!eye}
              style={styles.itext}
              placeholder="Password"
              value={Password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setEye(!eye)} style={styles.eye}>
              {eye ? <OpenEye /> : <EyeSlash />}
            </TouchableOpacity>
          </View>
          <View style={styles.input}>
            <Lock />
            <TextInput
              secureTextEntry={!eye1}
              style={styles.itext}
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setEye1(!eye1)} style={styles.eye}>
              {eye1 ? <OpenEye /> : <EyeSlash />}
            </TouchableOpacity>
          </View>
          <View style={styles.checkbox}>
            <View>
              <TouchableOpacity onPress={handlePress}>
                {checked ? <CheckBox /> : <UncheckBox />}
              </TouchableOpacity>
            </View>
            <View style={styles.text3}>
              <Text style={styles.txt}>
                I Agree to the Terms and Conditions,
              </Text>
              <Text style={[styles.txt, {marginTop: 8}]}>
                {'  '}
                Privacy Policy & Medical Disclaimer
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
            <Text style={styles.text4}>SignUp</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <View style={styles.textOR}>
            <Text style={styles.or}>OR</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Circle style={styles.Circle} />
              <Facebook style={styles.icon} />
            </View>
            <View>
              <Circle style={styles.Circle} />
              <Google style={styles.icon} />
            </View>
            <View>
              <Circle style={styles.Circle} />
              <Twitter style={styles.icon} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    flex: 0.4,
    alignItems: 'flex-end',
  },
  ellipse: {
    marginTop: -55,
    marginRight: -40,
  },
  car: {
    marginTop: -120,
    marginRight: 12,
    color: Color.lightGrey,
  },
  formContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 400,
    paddingBottom: 160,
    backgroundColor: Color.darkPink,
  },
  text: {
    marginTop: -350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '800',
    color: Color.white,
  },
  text2: {
    marginTop: 19,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    color: Color.white,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
    marginLeft: 22,
    marginRight: 42,
    borderRadius: 20,
    shadowColor: '#000',
    height: 40,
    backgroundColor: Color.white,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    elevation: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  itext: {
    paddingHorizontal: 17,
    marginLeft: '5%',
    width: '75%',
  },
  eye: {
    position: 'absolute',
    right: '5%',
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: 22,
    marginLeft: 35,
  },
  text3: {
    marginLeft: 6,
  },
  txt: {
    color: Color.white,
    fontSize: 14,
    fontWeight: '500',
  },
  primaryButton: {
    marginLeft: 68,
    marginRight: 98,
    marginVertical: 18,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
  },
  text4: {
    color: Color.darkPink,
    fontSize: 16,
    fontWeight: '500',
  },
  line: {
    padding: 0.5,
    marginTop: 19,
    backgroundColor: Color.white,
    marginLeft: 48,
    marginRight: 58,
  },
  textOR: {
    alignItems: 'center',
    marginTop: 8,
  },
  or: {
    color: Color.white,
    fontSize: 14,
    fontWeight: '500',
  },
  Circle: {
    marginTop: 50,
    marginLeft: 67,
  },
  icon: {
    marginLeft: 74,
    marginTop: -30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: Color.black,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  txtn: {
    fontSize: 17,
  },
  modalDetail: {
    fontSize: 19,
    marginBottom: 5,
  },
  modalButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.darkPink,
    borderRadius: 5,
  },
  modalButtonText: {
    color: Color.lightCream,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default UIPAGE;
