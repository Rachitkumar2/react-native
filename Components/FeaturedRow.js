import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import RestaurantCard from './RestaurantCard';


const FeaturedRow = ({title , description , id}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-gilroy font-bold text-lg">{title}</Text>
        <AntDesign name="arrow-right" size={24} color="#00CCBB" />
      </View>

        <Text className="font-gilroy text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* Restaurant Cards */}
            <RestaurantCard 
                id={123}
                imgUrl={'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                title="Bhai Restaurant"
                rating={4.5}
                genre="Indian"
                address="Sector-3 Faridabad"
                short_description='This a Very bad Restaurant'
                dishes={[]}
                long={20}
                lat={0}   
            />
            <RestaurantCard 
                id={123}
                imgUrl={'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                title="Bhai Restaurant"
                rating={4.5}
                genre="Indian"
                address="Sector-3 Faridabad"
                short_description='This a Very bad Restaurant'
                dishes={[]}
                long={20}
                lat={0}   
            />
            <RestaurantCard 
                id={123}
                imgUrl={'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                title="Bhai Restaurant"
                rating={4.5}
                genre="Indian"
                address="Sector-3 Faridabad"
                short_description='This a Very bad Restaurant'
                dishes={[]}
                long={20}
                lat={0}   
            />
            <RestaurantCard 
                id={123}
                imgUrl={'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                title="Bhai Restaurant"
                rating={4.5}
                genre="Indian"
                address="Sector-3 Faridabad"
                short_description='This a Very bad Restaurant'
                dishes={[]}
                long={20}
                lat={0}   
            />
            <RestaurantCard 
                id={123}
                imgUrl={'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                title="Bhai Restaurant"
                rating={4.5}
                genre="Indian"
                address="Sector-3 Faridabad"
                short_description='This a Very bad Restaurant'
                dishes={[]}
                long={20}
                lat={0}   
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow