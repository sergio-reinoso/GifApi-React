import {useState} from 'react'
import { AddCategory } from './components/AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory) ) return;

        // categories.push(newCategory)
        setCategories([newCategory,...categories ])
    }

    return (
        <div>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory = {event => onAddCategory(event)}
            />

            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory} >Agregar</button> */}
            <ol>
                {categories.map( (category) => {
                    return <li key={category}>{category}</li>
                })}
                {/* <li>ABC</li> */}
            </ol>
                {/* Gif Item */}
        </div>
    )
}

export default GifExpertApp
