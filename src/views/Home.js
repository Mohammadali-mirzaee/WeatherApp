import './Home.scss'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector, useHistory } from 'react-redux'
import { setWeather } from '../actions/weatherAction'

const delay = 5

function Home() {
    const weathers = useSelector((state) => state.weather)
    return (
        <main className="Home">
            <Loading />
            {/* <Navbar /> */}
        </main>
    )
}

export default Home
