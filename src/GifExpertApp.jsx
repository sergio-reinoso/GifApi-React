import {useState} from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball'])

    const onAddCategory = () => {
        setCategories(['Valorant',...categories ])
    }

    return (
        <div>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory />

            {/* Listado de Gif */}
            <button onClick={onAddCategory} >Agregar</button>
            <ol>
                {categories.map( category => {
                    return <li key={category}>{category}</li>
                })}
                {/* <li>ABC</li>
                <li>123</li>
                <li>XYZ</li> */}
            </ol>
                {/* Gif Item */}
        </div>
    )
}

export default GifExpertApp
