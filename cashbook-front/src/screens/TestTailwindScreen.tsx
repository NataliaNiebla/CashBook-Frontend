import React from 'react';
import { View, Text } from 'react-native';

export default function TestTailwindScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      <Text className="text-2xl font-bold text-green-600 mb-4">
        ¡NativeWind funciona!
      </Text>
      <View className="bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-gray-800 text-center">
          Este texto usa clases de Tailwind CSS
        </Text>
      </View>
    </View>
  );
}
