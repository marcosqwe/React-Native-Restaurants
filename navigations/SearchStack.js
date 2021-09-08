import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Search from '../screens/Search'

const Stack = createStackNavigator()

export default function SearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="searchs"
            component={Search}
            options={{title:"Buscador"}}  //Second Component
            />
        </Stack.Navigator>
    )
}
