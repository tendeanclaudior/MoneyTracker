import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [picture, setPicture] = useState('');
  const [hasPicture, sethasPicture] = useState(false);

  const getPic = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
      maxWidth: 200,
      maxHeight: 200,
      includeBase64: true,
    };

    launchImageLibrary(option, res => {
      if (res.didCancel) {
        sethasPicture(false);
        showMessage({
          message: 'Upload Foto Dibatalkan',
          type: 'default',
          backgroundColor: '#D9435E',
          color: '#FFFFFF',
        });
      } else {
        const data = res.assets[0];
        setPicture(data);
        console.log(data);
        sethasPicture(true);
      }
    });
  };
  return (
    <View style={styles.page}>
      <Header title="Sign Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <TouchableOpacity onPress={getPic}>
              {hasPicture && (
                <Image source={{uri: picture.uri}} style={styles.addphoto2} />
              )}
              {!hasPicture && (
                <View style={styles.addPhoto}>
                  <Text style={styles.addPhototext}>Add Photo</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TextInput text="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput text="Email Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  addPhototext: {
    fontSize: 14,
    fontFamily: 'Poppins-Black',
    maxWidth: 45,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  addphoto2: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
});
