import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import {StayProvider} from "../src/store";
export default function RootLayout(){return <StayProvider><StatusBar style="dark"/><Stack screenOptions={{headerShown:false}}/></StayProvider>}
