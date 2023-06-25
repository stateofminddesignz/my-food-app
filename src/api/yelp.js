import axios from "axios";

export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses/`,
    headers:{
        Authorization: 'Bearer WmYgkL0WG9TlLrTyquYav1P7Lf61VZbu-Ky5qCPeKMtNMaFsdjuwcnnoeDbAZBBXrHAak1jt-O5M0Zx6fmkEhSDgpej3PZpHhj38oc0P4VnRwWtjYj9IixMNU1yVZHYx'


        
    }
})

