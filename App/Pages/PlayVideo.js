import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import YoutubePlayer from "react-native-youtube-iframe";
export default function PlayVideo() {

    const param=useRoute().params;
    const [videoChapter,setVideoChapter]=useState([])
    const navigation=useNavigation();
    useEffect(()=>{
        console.log("--Video",param.courseContent);
        setVideoChapter(param.courseContent)
    },[])

    const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
<<<<<<< HEAD
     
=======
      
>>>>>>> bc3a4f168ff4b7e92dad656aa2ab719ac57ef85d
    }
  }, []);
  return (
    <View style={{padding:20,marginTop:25}}>
<<<<<<< HEAD
           <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginBottom:10}}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        {videoChapter?
        <View>
             <Text style={{marginBottom:10,fontSize:20,fontWeight:'bold'}}>{videoChapter.name}</Text>
             <YoutubePlayer
        height={220}
        play={playing}
        videoId={videoChapter.videoUrl}
        onChangeState={onStateChange}
      />
            <Text style={{fontWeight:'bold',marginBottom:10}}>Description</Text>
             <Text style={{lineHeight:20}}>{videoChapter?.description}</Text>
        </View>
            
        :null}
     
=======
          <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
    {videoChapter? 
    <View>
       
    <Text style={{marginBottom:10,fontSize:20,fontWeight:'bold'}}>{videoChapter?.name}</Text>
      <YoutubePlayer
        height={220}
        play={playing}
        videoId={videoChapter?.videoUrl}
        onChangeState={onStateChange}
      />
      </View>:null}
      <Text style={{fontWeight:'bold',marginBottom:10}}>Description</Text>
      <Text style={{lineHeight:20}}>{videoChapter?.description}</Text>
>>>>>>> bc3a4f168ff4b7e92dad656aa2ab719ac57ef85d
    </View>
  )
}