import React, {useEffect, useState} from 'react';
import "./Register.css";
import {Link, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {registerInitiate} from "../redux/action"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {user} = useSelector((state) => state.data);
    console.log("user=>", user);


    let navigate = useNavigate();
    let  dispatch = useDispatch();
    

    useEffect(() => {
        if(user) {
            navigate("/");
        }
        

    }, [user, dispatch])

    


    const register = (e) => {
        e.preventDefault();
        dispatch(registerInitiate(email, password));
        setEmail("");
        setPassword("");  
    };

    return (
        <div className='register'>
            <Link to="/">
                <img 
                src='https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon-500x313.png'
                alt='logo'
                className='img'
                />
            </Link>
            <div className='register-container'>
                <h1>Create You Poke-Dex Account</h1>

                <form>
                    <h5>E-Mail</h5>
                    <input type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" onClick={register} className="continue">
                        Continue
                    </button>
                    <div className="detail">
                        <p>Already have an account ?</p>
                        <Link to="/" className='signin-link'>
                            <p>Sign In</p>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
