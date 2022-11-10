import { useState } from "react"

export default function Create() {
    const [title, setTitle] = useState('')

    return (
        <>
            <div>
                <h1>Create New Flashcard Set</h1>
            </div>
            <div>
                <h3>Enter Title:</h3>
                <input type="text" />
                <input type='button' value='✓' />
            </div>
        </>
    )
}