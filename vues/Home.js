import React from 'react'
import { View , Text} from 'react-native'
import listeFilms from '../listeFilms.json'
import { FlatList} from 'react-native'
import Vignette from '../composants/Vignette'

function Home({navigation}) {
    return (
        <View>
            <FlatList
            data={listeFilms}
            renderItem={({item}) => <Vignette navigation={navigation} film={item}/>}
            />
        </View>
    )
}

export default Home