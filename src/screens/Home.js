import React from "react"
import { FlatList, StyleSheet, View, Text } from "react-native"
import CustomButton from "../components/CustomButton"

const NoteCard = ({ item, setCurrentPage, setCurrentNote, deleteNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor='#FFC300'
        color='#151D3B'
        text='Ubah'
        fontSize={12}
        width={100}
        onPress={() => {
          setCurrentNote(item)
          setCurrentPage("edit")
        }}
      />
      <CustomButton
        backgroundColor='#D82148'
        color='#fff'
        text='Hapus'
        fontSize={12}
        width={100}
        onPress={() => deleteNote(item.id)}
      />
    </View>
  </View>
)

const Home = ({ noteList, setCurrentPage, setCurrentNote, deleteNote }) => (
  <View style={styles.container}>
    <Text style={styles.appTitle}>PROGATE'S NOTEAPP</Text>
    <CustomButton
      backgroundColor='#DDD'
      color='#203239'
      text='Tambahkan Note'
      width='100%'
      onPress={() => {
        setCurrentPage("add")
      }}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard item={item} setCurrentPage={setCurrentPage} setCurrentNote={setCurrentNote} deleteNote={deleteNote} />
      )}
      keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  appTitle: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})

export default Home
