import React, { useLayoutEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firsttime, setFirsttime] = useState(true)

    const Loggedin = () => {

        email == "" || password == "" || password.length < 6 ? 
        Alert.alert("Invalid Input", "Please enter the required informations"):
        navigation.navigate("Home")

    }

    useLayoutEffect(() => {
        setFirsttime(false)
    })
       {firsttime ? (
          <View style = {styles.overall}>
        <View style = {styles.titlefamily}>
            <Text style = {styles.title}>Login</Text>
        </View>
        <View>
            <Text style = {styles.emailtxt}>Email: </Text>
            <TextInput 
            value={email}
            onChangeText={(newemail) => setEmail(newemail)}
            placeholder="Your email address"
            textContentType="emailAddress"
            autoCorrect = {false}
            autoCapitalize="none"
            style = {styles.emailinput}
            />
        </View>
        <View>
            <Text style = {styles.emailtxt}>Password: </Text>
            <TextInput 
            value={password}
            onChangeText={(newpassword) => setPassword(newpassword)}
            placeholder="Your password"
            textContentType="password"
            autoCorrect = {false}
            autoCapitalize="none"
            style = {styles.emailinput}
            />
        </View>
        <View>
            <TouchableOpacity
            onPress={Loggedin}
            style = {styles.loginbtn}
            >
                <Text style={{fontSize: 20}}>Login</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.breaker}>Log with your social media sites</Text>
        <View style = {{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <View style = {{marginHorizontal: 5}}>
            <TouchableOpacity>
            <Image 
            source={require('../assets/facebook_icon.png')}
            style = {{width: 50, height: 50, borderRadius: 30, marginHorizontal: 20}}
            />
            <Text>Facebook</Text>
            </TouchableOpacity>
        </View>
        <View style = {{marginLeft: '12%'}}>
            <TouchableOpacity>
            <Image 
            source={require('../assets/Twitter_icon.png')}
            style = {{width: 50, height: 50, borderRadius: 30, marginHorizontal: 15}}
            />
            <Text>Twitter</Text>
            </TouchableOpacity>
        </View>
        <View style = {{marginLeft: '12%'}}>
            <TouchableOpacity>
            <Image 
            source={require('../assets/google_icon.png')}
            style = {{width: 50, height: 50, borderRadius: 30, marginHorizontal: 20}}
            />
            <Text>Google</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
       ):navigation.replace("Home")}
        
}

const randomRGB = () => {

    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create ({
    overall: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: randomRGB(),
        marginVertical: 10,
        width: 340,
        marginHorizontal: 9,
        borderRadius: 20
    },
    titlefamily: {
        marginVertical: 10,
        paddingVertical: 10,
        width: 200,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderRadius: 30,
        height: 70
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        textDecorationLine: 'underline'
    },
    emailtxt: {
      marginHorizontal: 10,
      fontSize: 20,
      
    },
    emailinput: {
        marginHorizontal: 40,
        backgroundColor: randomRGB(),
        height: 55,
        textAlign: 'center',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        width: 280
    },
    loginbtn: {
        alignSelf: 'center',
        backgroundColor: randomRGB(),
        marginVertical: 15,
        width: '50%',
        alignItems: 'center',
        height: 70,
        justifyContent: 'center',
        borderRadius: 25
    },
    breaker: {
        marginHorizontal: 10,
        height: 70,
        width: 320,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    }
})

export default Login