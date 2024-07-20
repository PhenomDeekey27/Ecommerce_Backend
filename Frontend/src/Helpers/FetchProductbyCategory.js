import axios from "axios"
import BaseUrl from "../../baseUrl"
const FetchProductbyCategory=async(Category)=>{
    const products=await BaseUrl.post("/api/category-Basedproducts",{
        Category
    })

    return products.data


}
export default FetchProductbyCategory