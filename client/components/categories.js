import { View, Text, ScrollView, } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { categories } from '../constants';

export default function Categories() {
    const {activeCategory , setActiveCategory } = useState ('null');
  return (
    <View className = "mt-4">
      <ScrollView horizontal 
      ShowHorizontalScrollIndicator = {false} 
      className ='overflow-visible' 
      contentContainerStyle = {{paddingHorizontal : 15}} >
   {  categories.map((category, index) => {
  return (
    <View key={index} className="flex justify-center items-center mr-6">
      <TouchableOpacity
        onPress={() => {}}
        className="p-1 rounded-full shadow bg-gray-200">
        <Image style={{ width: 45, height: 45 }} source={category.image} />
        <Text className="text-sm">{category.name}</Text>
      </TouchableOpacity>
    </View>
  )
})
}


      </ScrollView>
    </View>
  )
}