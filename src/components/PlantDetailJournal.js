import React, { useState } from "react";
import { View, TextInput, Modal, TouchableOpacity, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

// COMPONENTS
import FontText from "./FontText";

export default function PlantDetailJournal() {
	const [entries, setEntries] = useState([]);
	const [entryTitle, setEntryTitle] = useState("");
	const [entryContent, setEntryContent] = useState("");
	const [selectedEntry, setSelectedEntry] = useState(null);
	const [showJournalForm, setShowJournalForm] = useState(false);

	const ShadowPresets = {
		inputShadow: {
			distance: 6,
			startColor: 'rgba(20, 20, 20, 0.06)',
			offset: [0, 3],
			style: {
				width: '100%'
			}
		},
		cardEntryShadow: {
			distance: 6,
			startColor: 'rgba(20, 20, 20, 0.05)',
			style: {
				width: '100%',
			}
		},
	};
	
	const formattedDate = new Date().toLocaleDateString('en-US', {
		year: '2-digit',
		month: '2-digit',
		day: '2-digit',
	});

	const openOverlay = () => {
		setShowJournalForm(true);
	};
	const closeOverlay = () => {
		setShowJournalForm(false);
		setEntryTitle("");
		setEntryContent("");
		setSelectedEntry(null);
	};

	const addEntry = () => {
		if (entryTitle.trim() !== "" && entryContent.trim() !== "") {
			const entry = {
				title: entryTitle,
				content: entryContent,
				date: formattedDate
			};
			setEntries([...entries, entry]);
			closeOverlay();
		}
	};
	const editEntry = (index) => {
		const selectedEntryText = entries[index];
		const title = selectedEntryText.title
		const content = selectedEntryText.content
		setEntryTitle(title);
		setEntryContent(content);
		setSelectedEntry(index);
		openOverlay();
	};
	const updateEntry = () => {
		if (selectedEntry !== null && entryTitle.trim() !== "" && entryContent.trim() !== "") {
			const updatedEntry = {
				title: entryTitle,
				content: entryContent,
				date: formattedDate
			};
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
		<View style={styles.container}>
			<FontText 
				content={"My Plant Journal"} 
				textAlign={"center"} 
				fontSize={24} 
				fontWeight={700} 
			/>
			<FontText 
				content={"Document growth, track care, and celebrate flourishing moments"} 
				textAlign={"center"} 
				fontSize={12} 
				width={'80%'}
			/>

			{/* Add Entry */}
			<TouchableOpacity onPress={openOverlay} style={styles.add_entry__btn}>
				<FontText 
					content={"Add Entry"} 
					fontSize={14} 
					color={'white'}
					textAlign={'center'}
				/>
			</TouchableOpacity>

			{/* Display Entries */}
			<View style={styles.entry__container}>
				{entries.map((entry, index) => (
					<Shadow {...ShadowPresets.cardEntryShadow} key={index}>
						<View style={styles.entry__card}>
							<View>
								<FontText
									content={entry.title}
									fontSize={16}
									fontWeight={700}
								/>
								<FontText
									content={entry.date}
									fontSize={12}
									marginTop={-5}
								/>
								<FontText
									content={entry.content}
									marginTop={5}
								/>
							</View>
							<View style={styles.editButtonsContainer}>
								<TouchableOpacity 
									onPress={() => editEntry(index)}
									style={styles.edit__btn}
								>
									<FontText 
										content={'Edit'}
										fontSize={12}
										color={'white'}
									/>
								</TouchableOpacity>
								<TouchableOpacity 
									onPress={() => deleteEntry(index)}
									style={[styles.edit__btn, styles.delete__btn]}
								>
									<FontText 
										content={'Delete'}
										fontSize={12}
										color={'white'}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</Shadow>
				))}
			</View>

			{/* Overlay */}
			<Modal animationType="slide" transparent={true} visible={showJournalForm}>
				<View style={styles.modal__overlay}>
					<View style={styles.modal__container}>
						<Shadow {...ShadowPresets.inputShadow}>
							<TextInput
								style={styles.input}
								value={entryTitle}
								onChangeText={(text) => setEntryTitle(text)}
								placeholder="Entry Title"
							/>
						</Shadow>
						<Shadow {...ShadowPresets.inputShadow}>
							<TextInput
								style={styles.input}
								value={entryContent}
								onChangeText={(text) => setEntryContent(text)}
								placeholder="Entry Content"
								multiline={true}
								numberOfLines={4}
							/>
						</Shadow>

						{selectedEntry !== null ? (
							<TouchableOpacity onPress={updateEntry} style={styles.action__btn}>
								<FontText
									content={'Update Entry'}
									color={'white'}
									textAlign={'center'}
								/>
							</TouchableOpacity>
						) : (
							<TouchableOpacity onPress={addEntry} style={styles.action__btn}>
								<FontText
									content={'Submit Entry'}
									color={'white'}
									textAlign={'center'}
								/>
							</TouchableOpacity>
						)}
							<TouchableOpacity onPress={closeOverlay}>
								<FontText
									content={'Cancel'}
									color={'#828282'}
									textAlign={'center'}
									marginTop={12}
								/>
							</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
	}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 24,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	add_entry__btn: {
		marginTop: 25,
		backgroundColor: '#14171F',
		paddingHorizontal: 50,
		paddingVertical: 18,
		borderRadius: 40,
		// position: 'absolute',
		// bottom: 0,
		// right: 0,
	},

	entry__container: {
		marginTop: 40,
		gap: 20,
		width: '100%',
		paddingBottom: 20,
	},
	entry__card: {
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
		width: '100%',
	},
	editButtonsContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		gap: 15,
		marginTop: 20,
	},
	edit__btn: {
		paddingVertical: 7,
		paddingHorizontal: 20,
		backgroundColor: '#14171F',
		borderRadius: 50,
	},

	modal__overlay: {
		flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        color: "#fff",
        padding: 24,
	},
	modal__container: {
        backgroundColor: "#fff", 
        borderRadius: 25,
        paddingHorizontal: 25,
        paddingVertical: 25,
		gap: 20,
	},
	action__btn: {
		marginTop: 25,
		backgroundColor: '#14171F',
		paddingHorizontal: 50,
		paddingVertical: 18,
		borderRadius: 40,
	},

	input: {
		backgroundColor: '#F2F2F2',
		borderRadius: 8,
		padding: 10,
		fontSize: 16,
	},
});
