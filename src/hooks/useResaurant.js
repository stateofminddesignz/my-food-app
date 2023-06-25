import { useState } from "react"
import yelp from "../api/yelp"


export default () => {
const [result , setResult] = useState({
    data: null,
    loading: false,
    error: null
})

    const searchResaurant = async (id) => {
setResult({
    data: null,
    loading: true,
    error: null
})
  try{
    const response = await yelp.get(`/businesses${id}`)
    setResult({
        data: response.data,
        loading: false,
        error: null
    })
  }catch (error){
    setResult({
        data: null,
        loading: false,
        error: 'Something went wrong'
    })

  }
      
     


    }
    return [result , searchResaurant]
}