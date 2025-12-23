import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons , FontAwesome, Feather } from '@expo/vector-icons';

export default function HomeScreen() {
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[])

  return (
    <SafeAreaView className='bg-white pt-5'>

        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2 px-4 gap-2'>
            <Image
                source={{
                    uri:'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }}

                className='h-8 w-8  bg-gray-300 rounded-full'
            />
            <View className='flex-1'>
                <Text className='font-bold text-xs text-gray-400'>Deliver Now!</Text>
                <View className='flex-row items-center'>
                    <Text className='font-bold text-xl'>Current Location</Text>
                    <Ionicons name="chevron-down" size={20} color="#00CCBB" />
                </View>
            </View>

            <FontAwesome name="user" size={35} color="#00CCBB"/>
            </View>

            {/* Search */}
            <View className='flex-row items-center space-x-2 pb-2 mx-4 gap-2  '>
                <View className='flex-row items-center space-x-2 flex-1 bg-gray-200 rounded-full px-3 py-1'>
                    <Feather name="search" size={20} color="gray" />
                    <TextInput 
                        placeholder='Restaurants and cuisines' 
                        keyboardType='default'
                        className='flex-1'
                    />
                </View>
                
                <Ionicons name="filter-outline" size={24} color="#00CCBB"/>

            </View>
            {/* Body */}
            <ScrollView>
                {/* Categories */}


                {/* Featured Rows */}

            </ScrollView>
    </SafeAreaView>
    
  )
}