import { useContext, useState } from "react"
import { GlobalCtx } from "../App"

export default function Signup(props){
    
    const {gState, setGState} = useContext(GlobalCtx)
    const {url} = gState

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        
    }
    
    return (
    <div>
        <div>
            <form>
                <h3>Username:</h3>
                <input type="text" name="username" value={form.username} onChange={handleChange}/>
                <h3>Password:</h3>
                <input type="password" name="password" value={form.password} onChange={handleChange}/>
                <input type="submit" value="Signup"/>
            </form>
        </div> 
    </div>
    )
}