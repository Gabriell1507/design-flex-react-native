import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import Pipoca from "./assets/pipoca.jpeg";

export default function App() {
  const [text, setText] = useState("");
  const [movies, setMovies] = useState([]);

  const handleAddMovie = () => {
    if (text.trim()) {
      setMovies((prevMovies) => [...prevMovies, text]);
      setText("");
    }
  };

  const handleClearText = () => {
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.stretch} source={Pipoca} />

      <Text style={styles.texto}>Cadastre o seu filme:</Text>

      <View style={styles.flex}>
        <Text style={styles.texto2}>Título:</Text>
        <TextInput
          style={styles.box}
          onChangeText={(newText) => setText(newText)}
          value={text}
        />
      </View>

      <View style={styles.flex}>
        <Button
          style={styles.buttons}
          title="LIMPAR"
          onPress={handleClearText}
        />

        <Button
          style={styles.buttons}
          onPress={handleAddMovie}
          title="CADASTRAR"
        />
      </View>

      <FlatList
        data={movies}
        renderItem={({ item }) => <Text style={styles.movie}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "#fe5bac",
    padding: 8,
  },
  texto: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  box: {
    width: "75%",
    height: 35,
    borderWidth: 1,
    padding: 5
  },
  texto2: {
    fontSize: 18,
    padding: 4,
  },
  flex: {
    flexDirection: "row",
    margin: 20,
    gap: 20,
    justifyContent: 'center',
  },
 
  center: {
    justifyContent: "center",
    marginTop: 20,
  },
});
