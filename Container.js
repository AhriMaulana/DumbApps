import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//Import Icon
import { Ionicons } from "@expo/vector-icons"


// Import Theme Native Base
import { useTheme } from "native-base";

// Import Screen
import Calculator from "./src/screens/calculator";
import ToDo from "./src/screens/todo-app";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator()

// Create Component Bottom Tab Navigation
function MyTab() {
    const theme = useTheme()

    return (
        <Tab.Navigator
            initialRouteName="CalCulator"
            screenOptions={({ route }) => ({
                headerMode: "screen",
                headerTintColor: "white",
                headerStyle: { backgroundColor: theme.colors.primary["300"] },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === "CalCulator") {
                        iconName = focused ? "ios-calculator" : "ios-calculator-outline"
                    } else if (route.name == "Todo") {
                        iconName = focused ? "checkbox" : "checkbox-outline"
                    }
                    "calculator-variant"
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: theme.colors.primary["800"],
                tabBarInactiveTintColor: "gray"
            })}
        >
            <Tab.Screen name="CalCulator" component={Calculator} options={{ headerShown: false }} />
            <Tab.Screen name="Todo" component={ToDo} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default function Container() {
    // Init Theme
    const theme = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Main"
                    component={MyTab}
                    options={{
                        headerShown: false
                    }}
                />
              
            </Stack.Navigator>
        </NavigationContainer>
    );
}
