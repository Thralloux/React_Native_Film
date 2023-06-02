import React, {useEffect, useState} from 'react'
import { View , Text, StyleSheet} from 'react-native'
import listeFilms from '../listeFilms.json'


function Detail({route}) {
    const id = route.params.id -1
    
    const styles =StyleSheet.create({
        vignetteSyle: {
            height: 250,
            backgroundColor: "#ccffff",
            borderRadius: 15,
            elevation: 8,
            flexDirection: "row",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10,
            paddingBottom: 10,
            marginTop: 6,
            marginBottom: 10,
            marginLeft: 16,
            marginRight: 16,
        },
    });

    return (
        <View style={{...styles.vignetteSyle}}>
        <View>
            <Text>Le film est réaliser par {listeFilms[id].Director} </Text>
            <Text>Il à réaliser {listeFilms[id].BoxOffice} au BoxOffice</Text>
            <Text>Il à obtenue une note de: {listeFilms[id].Ratings[0].Value} sur internet</Text>
            <Text>Le film dure: {listeFilms[id].Runtime}</Text>
            <Text>Résumer: {listeFilms[id].Plot}</Text>
            
            
        </View>
        </View>
    )
}

export default Detail


