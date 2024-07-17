import { SafeAreaView, Text, View } from "react-native";
import loginStyles from "@/styles/login";
import { Card, Input } from "@rneui/themed";

export default function Login(){
    return (
        <SafeAreaView style={loginStyles.view}>
            <Card
                containerStyle={loginStyles.card}
            >
                <Card.Title
                    style={loginStyles.cardTitle}
                >Login</Card.Title>

                <Input
                    placeholder="Inform seu email"
                    leftIcon={{
                        type: 'ionicon',
                        name: 'person',
                        color: '#ccd0cf',
                        size: 16
                    }}
                    label="Email"
                    labelStyle={{
                        fontSize: 14,
                        color: '#4a5c6a',
                        marginTop: 20
                    }}
                    inputStyle={{
                        color: '#ccd0cf',
                        fontSize: 16
                    }}
                ></Input>

                <Input
                    placeholder="Inform seu email"
                    leftIcon={{
                        type: 'ionicon',
                        name: 'lock-closed',
                        color: '#ccd0cf',
                        size: 16
                    }}
                    label="Senha"
                    labelStyle={{
                        fontSize: 14,
                        color: '#4a5c6a',
                        marginTop: 20
                    }}
                    inputStyle={{
                        color: '#ccd0cf',
                        fontSize: 16
                    }}
                ></Input>
            </Card>
        </SafeAreaView>
    )
}