import { StatusBar, Text, TouchableOpacity, View, SafeAreaView, ActivityIndicator } from "react-native";
import { Button, Dialog, Header, Icon, Image } from '@rneui/themed'
import styles from "@/styles/home";
import { useState } from "react";

export default function Home() {
const [openModal, setOpenModal] = useState<boolean>(false)

    return (
        <SafeAreaView style={styles.view}>
            <StatusBar
                hidden
            ></StatusBar>
            <Header
                containerStyle={styles.header}
                leftComponent={
                    <View style={styles.headerLeft}>
                        <TouchableOpacity>
                            <Icon name="menu" color="#ccd0cf" />
                        </TouchableOpacity>
                    </View>
                }
            
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() => setOpenModal(true)}>
                            <Icon 
                                type="ionicon" 
                                name="person" 
                                color="#ccd0cf"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Icon 
                                type="ionicon" 
                                name="settings" 
                                color="#ccd0cf"
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
                }
            ></Header>

            <View style={styles.main}>

                <Button
                    title="Open Modal"
                    buttonStyle={styles.button}
                    titleStyle={{
                        color: '#1f2240',
                    }}
                    onPress={() => setOpenModal(true)}
                    type="solid"
                    icon={{
                        name: 'home',
                        type: 'font-awesome',
                        size: 24,
                        color: '#1f2240',
                    }}           
                ></Button>
            </View>


            <Dialog
                isVisible={openModal}
                onBackdropPress={() => setOpenModal(false)}
                overlayStyle={styles.dialog}
            >
                <Dialog.Title 
                    title="Meu Perfil" 
                    titleStyle={{
                        color: '#ccd0cf',
                        fontSize: 32,
                    }}
                />

                <Image
                    source={{uri: '../assets/img/pexels-justin-shaifer-501272-1222271.jpg'}}
                    containerStyle={styles.img}
                />

                <Text style={styles.label}>Nome</Text>

                <Text style={styles.text}>Alex Silva</Text>

                <Text style={styles.label}>Email</Text>

                <Text style={styles.text}>alex@gmail.com</Text>

                <Dialog.Actions> 
                    <Button 
                        onPress={() => setOpenModal(false)} 
                        title="Cancelar" 
                        buttonStyle={[styles.button, {width: 'auto'}]}
                        titleStyle={{
                            color: '#1f2240',
                        }}
                    />
                </Dialog.Actions>
            </Dialog>
        </SafeAreaView>
    )
}