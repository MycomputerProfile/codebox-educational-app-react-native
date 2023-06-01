import AsyncStorage from '@react-native-async-storage/async-storage';


const setUserAuth=async(value)=>{
    await AsyncStorage.setItem('userData',JSON.stringify(value))
}

const getUserAuth=async()=>{
   const value=await AsyncStorage.getItem('userData');
   return JSON.parse(value)
}

const Logout=()=>{
    AsyncStorage.clear()
}


const setCourseProgress=async(key,value)=>{
    await AsyncStorage.setItem(key,value.toString() )
}

const getCourseProgress=async(key)=>{
   return JSON.parse( await AsyncStorage.getItem(key))
}

export default{
    setUserAuth,
    getUserAuth,
    Logout,
    setCourseProgress,
    getCourseProgress
}