import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import { Image } from 'react-native';
import CourseContent from '../Components/CourseContent';
import { TouchableOpacity } from 'react-native';
import GlobalApi from '../Shared/GlobalApi';
import { AuthContext } from '../Context/AuthContext';
export default function CourseDetails() {
    const param=useRoute().params;
    const [course,setCourse]=useState([])
    const [userProgress,setUserProgess]=useState([])


    const {userData,setUserData}=useContext(AuthContext);

    const navigation=useNavigation();
    useEffect(()=>{
      
        setCourse(param?.courseData);
        console.log("CourseId",param?.courseData.id) 
        param?.courseData.id?  getCourseProgress():null;
    },[param.courseContentId])

    const getCourseProgress=()=>{
        GlobalApi.getCourseProgress(userData.id,param?.courseData.id).then(resp=>{
          if(resp.data)
          {
          const result=resp?.data?.data.map(item=>({
            id:item.id,
            "courseId": item.attributes.courseId,
            "courseContentId":item.attributes.courseContentId,
          }))

          setUserProgess(result);
        }
        })
    }

 
  return (
    <ScrollView style={{padding:20,paddingTop:50}}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginBottom:10}}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <View>
            <Text style={{fontSize:20,
            fontWeight:'bold'}}>{course.name}</Text>
            <Text style={{color:Colors.gray}}>By Tubeguruji</Text>
            <Image source={{uri:course.image}} 
            style={{height:180,marginTop:10,borderRadius:10}} />
            <Text style={{marginTop:15,
               fontSize:16, fontWeight:'bold'}}>About Course</Text>
            <Text numberOfLines={4} 
            style={{color:Colors.gray,lineHeight:22}}>{course.description}</Text>
        </View>
        <CourseContent course={course} userProgress={userProgress}
        courseType={param.courseType} />
    </ScrollView>
  )
}