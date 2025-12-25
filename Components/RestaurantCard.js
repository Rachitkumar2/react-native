import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow"> 
        <Image 
        source={{
            uri: imgUrl,
        }}
        className="w-64 h-36 rounded-sm"
        />
        <View className=" px-3 pb-4 ">
            <Text className="font-gilroy font-bold text-lg pt-2 ">{title}</Text>
            <View className="flex-row items-center gap-1">
                <AntDesign name="star" size={15} color="green" opacity={0.5} style={{ marginLeft: -1 }} />
                <Text className="font-gilroy text-xs text-gray-500">
                    <Text className="text-green-500 ">{rating}</Text> . {genre}
                </Text>
            </View>

            <View className="flex-row items-center gap-1">
                <EvilIcons name="location" size={22} color="gray" opacity={1} style={{ marginLeft: -4 }} />
                <Text className="text-sm text-gray-500">Nearby . {address}</Text>
            </View>
        </View>

    </TouchableOpacity>
    
  )
}

export default RestaurantCard