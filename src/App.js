import './App.scss'
import Home from './views/Home'
import { Route, Switch } from 'react-router-dom'
import Search from './views/Search'

/**
 * 
    Följ så noga som möjligt Figma mockup ( bifogad )
    Bygg er väderapp i React.js
    SCSS för styling
    Funktionella komponenter
    Statehantering med Redux
 * 
 */
function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/search" component={Search} />
            </Switch>
        </div>
    )
}

export default App
