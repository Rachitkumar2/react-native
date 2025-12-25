import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const FeaturedRow = ({title , description , id}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrow-right" size={24} color="#00CCBB" />
      </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* Restaurant Cards */}
        </ScrollView>
    </View>
  )
}

export default FeaturedRow