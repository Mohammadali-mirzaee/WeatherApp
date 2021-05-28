import './Search.scss'

function Search() {
    function handelClick() {
        console.log('Hej')
    }
    return (
        <div className="search">
            <input className="inputCity" type="text" value="Göteborg" />
            <div>
                <button className="getData" onClick={handelClick}>
                    Vad Är Det För Vädret ?
                </button>
            </div>
        </div>
    )
}

export default Search
