import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import { useSelector, useDispatch} from "react-redux"
import { loginInitiate } from '../redux/action'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {user} = useSelector(state => state.data)

    let dispatch = useDispatch();
    let navigate = useNavigate()

    useEffect(() => {
        if(user){
            navigate("/home")
        }else {
            
        }
    }, [user, dispatch])

    const signIn = e => {
        e.preventDefault()
        dispatch(loginInitiate(email, password));
        setEmail("")
        setPassword("")

    }
    return (
        <div className='login'>
            <Link to="/">
            
             <img className='img' src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon-500x313.png' alt='logo'/>
            </Link>
           
            <div className='login-container'>
                <h1>Sign In</h1>
                <form>

                    <h5>E-Mail</h5>
                    <input
                        type="text"
                        values={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input
                        type="password"
                        values={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <Link to="/home">
                    <button type="submit" onClick={signIn} className='login-signIn'>Sign In</button>
                    </Link>
                </form>

                <p>By continuing, you agree to Poke-Dex Conditions of Use and Privacy Notice </p>

            </div>
            <p>New to Poke-Dex?</p>
            <Link to="/register">
                <button className='login-register'>Create Your Poke-Dex Account</button>
            </Link>

        </div>
    )
}

export default Login
