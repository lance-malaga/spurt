import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function AccessGallery() {

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to internal storage</Text>
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => pickImage()}>
        <Image source={require("../../assets/icons/gallery.png")} />
        <Text style={styles.text}>Gallery</Text>
        {image && <Image source={{uri: image}} style={{flex:3/4}} />}
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
		backgroundColor: "#fff",
		paddingHorizontal: 50,
		paddingVertical: 15,
		borderRadius: 24,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		flexDirection: "row",
		alignItems: "center",
  },
  text: {
    marginLeft: 15,
    textAlign: 'center'
  },
})