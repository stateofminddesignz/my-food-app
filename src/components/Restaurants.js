import { StyleSheet, Text, View , ActivityIndicator, FlatList} from "react-native"
import useResaurants from "../hooks/useResaurants"
import { useEffect } from "react"
import RestaurantItem from "./RestaurantItem"





const Restaurants = ({term}) => {

    const [{data,loading,error},searchResaurants] = useResaurants()

    useEffect(()=> {
        searchResaurants(term)

    } ,[term])

    console.log({data: data,loading,error})

    if(loading) return <ActivityIndicator size-='large'  marginVertical={30} />
    if(error)  return(
        <View style={styles.container}>
            <Text style={styles.header}>{error}</Text>
        </View>


    )

    return (
        <View style={styles.container}>
          <Text style={styles.header}>Top Restaurants</Text>
    
          <FlatList
            data={data}
            keyExtractor={(restaurant) => restaurant.id}
            renderItem={({ item, index }) => <RestaurantItem restaurant={item} />}
          />
        </View>
      );
    }
    


const styles = StyleSheet.create({
    container: {
     marginHorizontal: 25,
     marginVertical:15,
    
    


    },
    header: {
        fontSize: 29,
        fontWeight: 'bold',
        paddingBottom: 10,
        
       
    }
})

export default Restaurants

