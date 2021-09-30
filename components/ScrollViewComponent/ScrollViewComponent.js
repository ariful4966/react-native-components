import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';

const ScrollViewComponent = () => {
    const style = StyleSheet.create({
        container:{
            flex: 1,
            paddingTop: StatusBar.currentHeight
        },
        scrollView: {
            backgroundColor: 'pink',
            marginHorizontal: 20
        },
        text:{
            fontSize:20
        }
    })
    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scrollView}>
                <Text style={style.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, delectus est. Perferendis non molestias veniam minima nemo saepe veritatis iusto! Itaque autem modi a enim iure qui amet hic vero facere voluptate libero suscipit ipsam, nihil eligendi quaerat eius rerum quibusdam incidunt! Et natus sapiente, reprehenderit ad blanditiis voluptate repudiandae quaerat impedit alias beatae eaque repellendus facilis provident sequi laboriosam, deserunt facere voluptatibus, culpa ullam animi nulla officia ut! Dicta placeat corporis soluta nam quasi nemo ad autem exercitationem inventore quae necessitatibus, voluptas praesentium velit quo iusto magni error incidunt numquam molestiae a facilis excepturi ea dolor quibusdam. Dolorem, doloribus.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ScrollViewComponent;