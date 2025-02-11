import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet } from "react-native"
import CustomButton from "../components/CustomButton"
import CustomTextInput from "../components/CustomTextInput"

const EditNote = ({ setCurrentPage, editNote, currentNote }) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title)
      setDesc(currentNote.desc)
    }
  }, [currentNote])

  const handleSave = () => {
    if (currentNote) {
      editNote(currentNote.id, title, desc)
      setCurrentPage("home")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label='Judul'
        placeholder='Judul'
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label='Deskripsi'
        placeholder='Deskripsi'
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton backgroundColor='#247881' color='#fff' text='Simpan' width='100%' onPress={handleSave} />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor='#DDDDDD'
          color='#203239'
          text='Kembali ke Home'
          width='100%'
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
})

export default EditNote
