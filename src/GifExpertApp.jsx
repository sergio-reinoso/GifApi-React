import {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball'])

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory) ) return;

        // categories.push(newCategory)
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
