import './Home.scss'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main className="Home">
            <Navbar />
            <Loading />
        </main>
    )
}

export default Home
