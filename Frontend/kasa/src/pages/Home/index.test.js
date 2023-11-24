import { MemoryRouter } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { render } from '@testing-library/react'
import Card from '../../components/Card'
import Banner from '../../components/Banner'

 
describe('Header, Card and Footer', () => {
    test('Should render without crash', async () => {
        render(
            <MemoryRouter>
                <Header />
                <Banner />
                <Card />
                <Footer />
            </MemoryRouter>
        )
    })
})
