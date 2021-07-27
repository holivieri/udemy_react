 
 import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
 
 export const GifExpertApp = () => {

    //const categories = ['Rock', 'Pop', 'Blues'];

    const [categories, setCategories] = useState([]);


    return (
        <Fragment>
            
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr></hr>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid key={ category }
                        category={category} />
                    ))
                }
            </ol>
          </Fragment>
     )
 }
 