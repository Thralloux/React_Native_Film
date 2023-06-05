import React, {useEffect, useState} from 'react'
import { View , Text, StyleSheet, Image} from 'react-native'
import listeFilms from '../listeFilms.json'


function Detail({route}) {
    const id = route.params.id -1 

    console.log(route);
    
    const styles =StyleSheet.create({
        vignetteSyle: {
            height: '100%',
            backgroundColor: "black"
            
        },
    });

    return (
        <View>
        <View>
            <Image
            source={{uri : listeFilms[id].Poster}}
            resizeMode='contain'
            style={{
                borderRadius: 10,
                height : 400,
                width: '100%'    
            }}>
            </Image>
        </View>
        <View style={{...styles.vignetteSyle}}>
        <View>
            
            <Text style={{paddingTop: 20,fontSize: 18,color: 'white',paddingLeft:'10%'}}>Le film est réalisé par {listeFilms[id].Director}{"\n"}
            Il réalise {listeFilms[id].BoxOffice} au BoxOffice{"\n"}
            Il à obtenue une note de: {listeFilms[id].Ratings[0].Value}{"\n"}
            Le film dure: {listeFilms[id].Runtime}{"\n"}{"\n"}
        
            Résumer: {listeFilms[id].Plot}</Text>
            
            
            
        </View>
        </View>
        </View>
    )
}

export default Detail


