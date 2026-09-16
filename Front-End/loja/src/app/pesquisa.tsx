import { router } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";

export default function Pesquisa(){
    return(
        <View>
            <Text>Frango Frito</Text>
            <Text>Picanha</Text>
            <Text>Tilápia</Text>

            <Button title="Voltar" onPress={() => router.back()}></Button>
        </View>
    );
}