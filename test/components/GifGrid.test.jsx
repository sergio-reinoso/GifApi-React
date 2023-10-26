import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch'

    test('De de mostrar el loading incicialmente', () => {
        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))

    })

    test('Debe de mostra items cuando se cargan las imagenes useFetchGifs', () => {
        
    })



})
