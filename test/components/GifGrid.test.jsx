import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs")

describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch'

    test('De de mostrar el loading incicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))

    })

    test('Debe de mostra items cuando se cargan las imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoding: true
        })

        render(<GifGrid category={category} />)
        expect (screen.getAllByRole('img').length).toBe(2)

    })



})
