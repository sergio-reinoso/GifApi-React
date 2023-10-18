import {useState} from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch'])

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory) ) return;
        setCategories([newCategory,...categories ])
    }

    return (
        <div>

            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = {event => onAddCategory(event)}
            />

            {categories.map( (category) => (
                    <GifGrid 
                        key = {category}
                        category={category}
                    />
                ))
            }

        </div>
    )
}

export default GifExpertApp
