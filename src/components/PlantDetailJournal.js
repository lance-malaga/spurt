import React, { useState } from "react";
import { View, TextInput, Button, Modal, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import FontText from "./FontText";

export default function PlantDetailJournal() {
  const [entries, setEntries] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [entryTitle, setEntryTitle] = useState("");
  const [entryContent, setEntryContent] = useState("");
  const [selectedEntry, setSelectedEntry] = useState(null);

  const addEntry = () => {
    if (entryTitle.trim() !== "" && entryContent.trim() !== "") {
      const formattedDate = new Date().toDateString();
      const entry = `${formattedDate}\nTitle: ${entryTitle}\n${entryContent}`;
      setEntries([...entries, entry]);
      closeOverlay();
    }
  };

  const openOverlay = () => {
    setIsModalVisible(true);
  };

  const closeOverlay = () => {
    setIsModalVisible(false);
    setEntryTitle("");
    setEntryContent("");
    setSelectedEntry(null);
  };

  const editEntry = (index) => {
    const selectedEntryText = entries[index];
    const [, title, content] = selectedEntryText.split("\n");
    setEntryTitle(title.split(": ")[1]);
    setEntryContent(content);
    setSelectedEntry(index);
    openOverlay();
  };

  const updateEntry = () => {
    if (selectedEntry !== null && entryTitle.trim() !== "" && entryContent.trim() !== "") {
      const formattedDate = new Date().toDateString();
      const updatedEntry = `${formattedDate}\nTitle: ${entryTitle}\n${entryContent}`;
      const updatedEntries = [...entries];
      updatedEntries[selectedEntry] = updatedEntry;
      setEntries(updatedEntries);
      closeOverlay();
    }
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <View>
      <FontText content={"My Plant Journal"} textAlign={"left"} fontWeight={700} fontSize={18} />

      {/* Open Overlay */}
      <TouchableOpacity onPress={openOverlay}>
        <FontText content={"Add entry"} fontSize={14} />
      </TouchableOpacity>

      {/* Display Entries */}
      <ScrollView>
        {entries.map((entry, index) => (
          <View key={index} style={styles.card}>
            <FontText content={entry} fontSize={14} />
            <View style={styles.editButtonsContainer}>
              <TouchableOpacity onPress={() => editEntry(index)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteEntry(index)}>
                <Text style={styles.editButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Overlay */}
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <TextInput
              style={styles.input}
              value={entryTitle}
              onChangeText={(text) => setEntryTitle(text)}
              placeholder="Entry Title"
            />

            <TextInput
              style={[styles.input, { height: 100 }]}
              value={entryContent}
              onChangeText={(text) => setEntryContent(text)}
              placeholder="Entry Content"
              multiline
            />

            {selectedEntry !== null ? (
              <Button title="Update Entry" onPress={updateEntry} />
            ) : (
              <Button title="Submit Entry" onPress={addEntry} />
            )}
            <Button title="Cancel" onPress={closeOverlay} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    position: "relative",
  },
  editButtonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editButton: {
    marginHorizontal: 10,
    color: "blue",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
