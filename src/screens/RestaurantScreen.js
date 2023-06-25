import {View, Text,Image, StyleSheet, FlatList} from 'react-native'
import useResaurant from '../hooks/useResaurant'
import { useEffect } from 'react'





const RestaurantScreen = ({navigation}) => {

    const [{data,loading,error}, searchResaurant] = useResaurant()

    const id = navigation.getParam('id')

    useEffect(() => {
        searchResaurant()
    }, [id])
    
if(loading) return <Text>Loading....</Text>
if(error) return <Text>{error}</Text>

    return(

        <View>
           <FlatList 
            data={data.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => <Image source={{uri: item}} />}
           />
        </View>
    )
    
}

export default RestaurantScreen