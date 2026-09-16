import { router } from "expo-router";
import { store } from "./screen/score"
import React from "react";
import { Button, ScrollView, Text } from "react-native";

export default function (){
  const nomeProduto = store(() => store.nomeProduto)

  return(
    <ScrollView>
      <Text>Esse é o index</Text>
      <Button title="Pesquisar" onPress={() => router.push("./pesquisa")}></Button>
      <Text>Você Pesquisou [Nada]</Text>
    </ScrollView>
  );
}