import { Text, View } from "react-native";
import { Button, Dialog } from '@rneui/themed'
import styles from "@/styles/home";
import { useState } from "react";

export default function Home() {
const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <View>
            <Button
                title="Open Modal"
                buttonStyle={styles.button}
                onPress={() => setOpenModal(true)}
                type="solid"
                icon={{
                    name: 'home',
                    type: 'font-awesome',
                    size: 24,
                    color: 'white',
                }}           
            ></Button>

            <Dialog
                isVisible={openModal}
                onBackdropPress={() => setOpenModal(false)}
            >
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Text>Componente Dialog</Text>
                <Dialog.Actions> 
                    <Button onPress={() => setOpenModal(false)} title="Cancelar" />
                </Dialog.Actions>
            </Dialog>
        </View>
    )
}