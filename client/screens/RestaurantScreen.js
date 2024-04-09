import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';

export default function RestaurantScreen() {
  const route = useRoute(); // Get the current route
  const item = route.params; // Directly use route.params to access the passed item

  console.log('restaurant : ', item);
  return (
    <View>
      <ScrollView>
        <View className="relative">
          {/* Adjusted to use item.image directly */}
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute top-14 bg-gray-50 p-2 rounded-full shadow">
                   <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
