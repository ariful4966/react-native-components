import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const ButtonComponent = () => {

    return (
        <View style={style.container}>

            <View>
                <Text style={style.title}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum minus, quo voluptates similique aliquam iure expedita est molestiae dolore. Iste sequi quibusdam laborum, quia at id nostrum perspiciatis magni.
                </Text>
                <Button
                    title="Push Me"
                    onPress={() => Alert.alert("Your are press this btn. Aren't you")}
                />
            </View>

            <Separator />

            <View>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi voluptas mollitia quisquam. Consectetur sed fugiat voluptas molestiae nam, ad exercitationem. Dolores id aut nobis exercitationem adipisci corrupti eum asperiores quia?
                    </Text>

                    <Button
                        title="Click Me"
                        color="#f194ff"
                        onPress={()=>Alert.alert('Why are you cal me? How Can I Help you?')}
                    />
            </View>
            <Separator/>

        </View>
    );
};

export default ButtonComponent;



const Separator = () => <View style={style.separator}></View>


const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:16
    },
    title: {
        textAlign: 'center',
        marginVertical: 8
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})