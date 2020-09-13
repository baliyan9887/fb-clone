import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import { auth, provider} from '../../firebase-config';
import { useStateValue } from '../../stateProvider';
import {actionType} from '../../reducer'

function Login() {

    const [state, disptach] = useStateValue();

    const signIn = () => {
        //SignIn with Google ......

        auth
        .signInWithPopup(provider)
        .then((result) => {

            disptach({
                type: actionType.SET_USER,
                user: result.user
            })
            console.log(result)
        })
        .catch(err => alert(err.message))
    }
    return (
        <div className="login">
            <div className="logo">
                <img  src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt=""/>
                <img src="https://mogointeractive.com/wp-content/uploads/2019/08/facebook-logo-preview-400x400.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                SignIn
            </Button>
        </div>
    )
}

export default Login
