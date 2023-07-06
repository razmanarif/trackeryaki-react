import { useState, useEffect } from "react"
import {TextField, Button} from '@mui/material'
import { useParams, useNavigate } from "react-router-dom"

export default function Search (){

    const [data, setData] = useState('')
    const [query, setQuery] = useState('pikachu')
    

    const navigate = useNavigate()
    const params = useParams()

    

    useEffect(()=>{
        fetch(data).then((response)=>{
            return response.json().then((data)=>{
                console.log(data)
                setData(data)
                
            }).catch((e)=>{
                console.log(e)
                navigate("/notfound")
            })
        })
    })
    
    const handleChange=(event)=>{
        const change = event.target.value
        console.log(change)
        setQuery(change.toLowerCase())
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        navigate(`/search/${query}`)
    }

    return <div>
        <h1>Welcome to Logistic App</h1>

        <form onSubmit={handleSubmit}>
            <TextField
            id="search"
            label="enter text"
            variant="outlined"
            size="small"
            value={query}
            onChange={handleChange}
            >
            </TextField>
            <Button type="submit" variant="contained" size="large">Search</Button>
        </form>

        
        
    </div>
}