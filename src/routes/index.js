import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SignIn from '../pages/signin'
import UserRegister from '../pages/userRegister'
import Home from '../pages/home'
import News1 from '../pages/news1'
import News2 from '../pages/news2'
import News3 from '../pages/news3'

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
         <Stack.Screen 
        name="News1" 
        component= { News1 }
        options= { {headerShown: false} }
         />
         <Stack.Screen 
        name="News2" 
        component= { News2 }
        options= { {headerShown: false} }
         />
         <Stack.Screen 
        name="News3" 
        component= { News3 }
        options= { {headerShown: false} }
         />
    </Stack.Navigator>
  )
}