import { useContext, useState } from "react"
import { GlobalCtx } from "../App"
import { redirect, useNavigate } from "react-router-dom"


export default function Login(props){
    
    const {gState, setGState} = useContext(GlobalCtx)
    const {url} = gState

    const blank = {
        username: "",
        password: "",
    }
    const [form, setForm] = useState(blank)
    

    function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

let navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        const { username, password} = form
        

        fetch(`${url}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setGState({...gState, token: data.token})
            setForm(blank)
            return redirect("/")
        })

    }
    
    return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Username:</h3>
                <input type="text" name="username" value={form.username} onChange={handleChange}/>
                <h3>Password:</h3>
                <input type="password" name="password" value={form.password} onChange={handleChange}/>
                <input type="submit" value="Log In"/>
            </form>
        </div> 
    </div>
    )
}