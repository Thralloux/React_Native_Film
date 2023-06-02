import { View, Image, StyleSheet, Text} from 'react-native'
import { Button } from 'react-native'

function Vignette(item) {
    const styles =StyleSheet.create({
        vignetteSyle: {
            height: 250,
            backgroundColor: "#ffffff",
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


const Film = item.film
const navigation = item.navigation


return (
    <View style={{...styles.vignetteSyle}}>
        <View >
            <Image
            source={{uri : Film.Poster}}
            resizeMode='contain'
            style={{
                borderRadius: 4,
                height : '100%',
                width: 150
            }}>
            </Image>
        </View>
        <View
        style={{
            marginLeft: 12,
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text
            style={{
                fontSize:14,
                color: '#000',
                fontWeight:'bold',
                textTransform: 'capitalize'

            }}>
                {Film.Title} - {Film.Year}
                </Text>
                <Button
                style={{marginTop: 12}}
                onPress= {()=>navigation.navigate('Detail', {id:Film.id})}
                title='Détails' />
        </View>
    </View>
    
)
}
export default Vignette