import './Search.scss'

function Search() {
    function handelClick() {
        console.log('Hej')
    }
    return (
        <div className="search">
            <input type="Göteborg" />
            <button className="getData" onClick={handelClick}>
                Vad Är Det För Vädret ?
            </button>
        </div>
    )
}

export default Search
