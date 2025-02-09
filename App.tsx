import React from "react";
import { StyleSheet } from "react-native";
import { StackNavigator } from "./src/navigation/StackNavigator";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default App;