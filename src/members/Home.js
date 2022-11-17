import { View, Text, Touchable, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Main from '../bottom/Main';
import Profile from '../bottom/Profile';

const Home = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            {selectedTab == 0 ? (
                <Main />
            ) : selectedTab == 1 ? (
                <Orders />
            ) : (
                <Profile />
            )
            }
            <View
                style={{
                    position: 'absolute',
                    bottom: 1,
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    elevation: 5,
                }}>
                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(0);
                    }}
                >
                    <Image
                        source={require('../images/home.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedTab == 0 ? '#000' : '#BeBeBe'
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(1);
                    }}
                >
                    <Image
                        source={require('../images/home.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedTab == 1 ? '#000' : '#BeBeBe'
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '20%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setSelectedTab(3);
                    }}
                >
                    <Image
                        source={require('../images/user.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: selectedTab == 3 ? '#000' : '#BeBeBe'
                        }}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Home