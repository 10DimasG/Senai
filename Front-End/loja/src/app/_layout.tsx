import { Stack } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Stack>
        <Stack.Screen name="(tabs)/index" options={{headerTitle:"Página Principal"}}/>
        <Stack.Screen name="(tabs)/pesquisa" options={{headerTitle:"Pesquisa"}}/>
    </Stack>
  );
}
