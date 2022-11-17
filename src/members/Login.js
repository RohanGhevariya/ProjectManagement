import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Loader from '../common/Loader';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [badEmail, setBadEmail] = useState(false);
    const [badPassword, setBadPassword] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const adminemail = 'Abc';
    const adminPass = 'Abc';

    const login = () => {
        setModalVisible(true);
        if (email == '') {
            setModalVisible(false);
            setBadEmail(true);
        } else {
            setBadEmail(false);
            if (password == '') {
                setModalVisible(false);
                setBadPassword(true);
            } else {
                setTimeout(() => {
                    setBadPassword(false);
                    getData();
                }, 1500);
            }
        }
    }

    const getData = async () => {
        if (email == 'Abc' && password == 'Abc') {
            setModalVisible(false);
            navigation.navigate('Home');
        }
        else {
            setModalVisible(false);
            alert('Invalid Login and Password')
        }
    }

    return (
        <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, }}>
                <Image
                    source={require('../images/project.png')}
                    style={{
                        width: 60,
                        height: 60,
                        alignSelf: 'center',
                        marginTop: 100
                    }}
                />
                <Text
                    style={{
                        marginTop: 50,
                        alignSelf: 'center',
                        fontSize: 24,
                        fontWeight: '600',
                        color: '#000'
                    }}>Member Login</Text>

                <CustomTextInput
                    placeholder='Enter Email Id'
                    icon={require('../images/email.png')}
                    value={email}
                    onChangeText={(txt) => {
                        setEmail(txt)
                    }}
                />
                {
                    badEmail === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                            Please Enter Email Id
                        </Text>)
                }
                <CustomTextInput
                    placeholder='Enter Password'
                    type={'password'}
                    icon={require('../images/password.png')}
                    value={password}
                    onChangeText={(txt) => {
                        setPassword(txt)
                    }}
                />
                {
                    badPassword === true && (
                        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
                            Please Enter Password
                        </Text>)
                }
                <CommonButton
                    title={'Login'}
                    bgColor={'#000'}
                    textColor={'#fff'}
                    onPress={() => {
                        login();
                    }}
                />
                <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </View>
        </ScrollView>
    )
}

export default Login;