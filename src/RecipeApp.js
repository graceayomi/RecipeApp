import { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'

import Nav from './recipe_app/Nav'
import Banner from './recipe_app/Banner'
import List from './recipe_app/List'
import Footer from './recipe_app/Footer'
import CopyRight from './recipe_app/CopyRight'


const RecipeApp = ()=>{
    const [loading,setLoading]=useState(true);

    const [error, setError]=useState(false);

    const [recipes, setRecipes] = useState([])

    const [frecipe, setFrecipe] = useState([])

    const [keyWord, setKeyWord] = useState('')
    // let [age,setAge]=useState(18)
    useEffect(()=>{
        makeApiCall()
    },[])

    //this function will do the filtering
    const handleFilter = ()=>{
        const filtered_recipes = recipes.filter((recipe)=>{
            return recipe.name.toLowerCase().includes(keyWord.toLowerCase())
        })
        setFrecipe(filtered_recipes)
    }

    // make call and get the data for us
    function makeApiCall(){
        axios.get("https://dummyjson.com/recipes")
        .then(function(resp){
            // console.log(resp.data.recipes)
            setLoading(false)
            setRecipes(resp.data.recipes)
        })
        .catch(function(err){
            console.log(err)
            setLoading(false)
            setError(true)
        })
    }




    return (
        <div className='container-fluid'>

            <Nav/>

            <Banner setKeyWord={setKeyWord} keyWord={keyWord} handleFilter={handleFilter}/>

            <List loading={loading} error={error} recipes={recipes} frecipe={frecipe} keyWord={keyWord}/>

            <Footer/>

            <CopyRight/>
        </div>
    )
}
export default RecipeApp