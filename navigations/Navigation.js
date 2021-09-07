import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'


import RestaurantsStack from './RestaurantsStack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import SearchStack from './SearchStack'
import AccountStack from './AccountStack'

const Tab = createBottomTabNavigator()

export default function Navigation(){                                                                                                                                                                                                         
	const screenOptions = (route, color) =>{
		let iconName
		switch (route.name) {
			case "restaurants":
				iconName = "compass-outline"
				break;
			case "favorites":
				iconName = "heart-outline"
				break;
			case "toprestaurants":
				iconName = "star-outline"
				break;
			case "search":
				iconName = "magnify"
				break;
			case "account":
				iconName = "home-outline"
				break;
		}
		return (
			<Icon
				type="material-community"
				name={iconName}
				size={22}
				color={color}
			/>
		)
	}	
	return (
		<NavigationContainer>
			<Tab.Navigator
			initialRouteName="restaurants"
			tabBarOptions={{
				tabBarStyle: { position: 'absolute' },
				"tabBarInactiveTintColor":"#a17dc3",
				"tabBarActiveTintColor":"#442484"
				
			}}
			screenOptions={({route}) => ({
				tabBarIcon:({color})=> screenOptions(route, color)
			})}
			>
				<Tab.Screen
					name="restaurantes"
					component={RestaurantsStack}
					options={{title:"Restaurantes"}}
				/>
				<Tab.Screen
					name="favoritos"
					component={FavoritesStack}
					options={{title:"Favoritos"}}
				/>
				<Tab.Screen
					name="toprestaurantes"
					component={TopRestaurantsStack}
					options={{title:"Top 10 Restaurantes"}}
				/>
				<Tab.Screen
					name="search"
					component={SearchStack}
					options={{title:"Buscar"}}
				/>
				<Tab.Screen
					name="account"
					component={AccountStack}
					options={{title:"Cuenta"}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}
