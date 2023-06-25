import Header from "../components/Header"
import Search from "../components/Search"
import Categories from "../components/Categories"
import Restaurants from "../components/Restaurants"
import { View , StyleSheet} from "react-native"
import { useState } from "react"




const HomeScreen = () => {

    const [term, setTerm] = useState('Burger')


    const commonCategories = [
      {
        name: 'Burger',
        imageUrl: require('../assets/images/burger.png')
      },
      {
        name: 'Pizza',
        imageUrl: require('../assets/images/pizza.png')
      },
      {
        name: 'Desserts',
        imageUrl: require('../assets/images/cake.png')
      },
      {
        name: 'Drinks',
        imageUrl: require('../assets/images/smoothies.png')
      },
      {
        name: 'Steak',
        imageUrl: require('../assets/images/steak.png')
      },
      {
        name: 'Pasta',
        imageUrl: require('../assets/images/pasta.png')
      }
    ]
    
    return (
        <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories
        categories={commonCategories}
        setTerm={setTerm}
        term={term}
      />
      <Restaurants term={term} />
     
   </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'253, 253,253',
        flex:1
    }
})

export default HomeScreen