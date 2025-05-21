import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";

const Icone_Image = () => {
    return (
        <View>
            <Image
                source={require('../images/client.png')} // arquivo local
                style={styles.imagem_icone}
            />
        </View>
    );
};

export default Icone_Image;