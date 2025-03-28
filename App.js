import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { theme } from './color';
import { use, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fontisto from '@expo/vector-icons/Fontisto';

const STORAGE_KEY = "@toDos";
const TAB_STORAGE_KEY = "@tab";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  useEffect(()=>{
    loadToDos();
    loadTab();
  }, [])

  const travle = () => {
    setWorking(false);
    saveTab(false);
  };
  const work = () => {
    setWorking(true);
    saveTab(true);
  };
  const onChangeText = (payload)=> setText(payload)

  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  }

  const saveTab = async (isWorking) => {
    await AsyncStorage.setItem(TAB_STORAGE_KEY, JSON.stringify(isWorking));
  }

  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY)
    setToDos(JSON.parse(s))
  }

  const loadTab = async () => {
    const s = await AsyncStorage.getItem(TAB_STORAGE_KEY);
    if (s !== null) {
      setWorking(JSON.parse(s));
    }
  }

  const addToDo = async () => {
    if (text === ""){
      return;
    }
    const newToDos =  {...toDos,
      [Date.now()]: {text: text.trim(), working}
    }
    setToDos(newToDos)
    await saveToDos(newToDos);
    setText("")
  }

  console.log(toDos)

  const deleteToDo = (key) => {
    Alert.alert(
      "삭제",
      "삭제 하시겠습니까?",
      [
        {text: "취소", style: "cancel"},
        {text: "삭제",
          onPress: async () => {
          const newToDos = {...toDos};
          delete newToDos[key];
          setToDos(newToDos);
          await saveToDos(newToDos);
        }}
      ]
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color : working ? "white" : theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travle}>
          <Text style={{...styles.btnText, color : !working ? "white" : theme.grey}}>Schedule</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addToDo}
        onChangeText={onChangeText}
        returnKeyLabel='done'
        value={text}
        placeholder={working ? "add my personal work" : "add my schedule"}
        style={styles.input}
      />
      <ScrollView style={styles.scrollView}>
        {Object.keys(toDos).map((key) => (
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteToDo(key)}>
                <Fontisto name="trash" style={styles.trash}/>
              </TouchableOpacity>
            </View>
          ) : null
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 35,
  },
  header:{
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText:{
    fontSize: 36,
    fontWeight: "600",
    color: 'white',
  },
  secondBtnText:{
    fontSize: 33,
    fontWeight: "600",
    color: 'white',
  },
  input:{
    backgroundColor:"white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  toDo:{
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText:{
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    flexShrink: 1,
    flex: 1,
    marginRight: 10,
  },
  trash:{
    color: theme.grey,
    fontSize: 18,
    alignSelf: "center",
  },
});
