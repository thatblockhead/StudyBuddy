import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div>
                <h1>Flashcards!</h1>
            </div>
            <div>
                <select name="flashcardset" id="flashcardset">
                    <option value="-">--Select Set--</option>
                </select>
                <Link to={'/play'}><button>Play</button></Link>
            </div>
            <div>
                <Link to={'/create'}><button>Create New Flashcards</button></Link>
            </div>
        </>
    )
}