import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SignIn from '../pages/signin'
import UserRegister from '../pages/userRegister'
import Home from '../pages/home'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component= { Welcome }
        options= { {headerShown: false} }
         />
      <Stack.Screen 
        name="SignIn" 
        component= { SignIn } 
        options= { {headerShown: false} }
        />
      <Stack.Screen 
        name="UserRegister" 
        component= { UserRegister } 
        options= { {headerShown: false} }
        />
        <Stack.Screen 
        name="Home" 
        component= { Home }
        options= { {headerShown: false} }
         />
    </Stack.Navigator>
  )
}