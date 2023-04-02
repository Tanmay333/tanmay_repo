import React, { useState } from 'react';
import MainContainer from '../../components/MainContainer';
import './LoginScreen.css'
import { setCookie } from '../../utils/utils'
import { useNavigate } from 'react-router-dom';

const result = {
    "code": 200,
    "message": "success",
    "reason": "user login successfully",
    "data": { "token": "jwt-token-here", "id": "user-id-here" }

}

const LoginScreen = () => {
    // Hooks
    // ************************************************************************
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    // helper function
    // ************************************************************************
    const onSubmit = () => {
        if (email && password) {
            // make the ajax request here
            const data = result;
            if (
                data &&
                data?.code &&
                data?.code === 200 &&
                data?.data
            ) {
                const token = data?.data?.token;
                const id = data?.data?.id;
                setCookie("token", token);
                setCookie("id", id);
                navigate('/', { replace: true });
            }

        }

    }
    // ************************************************************************

    return (
        <MainContainer style={{ overflow: 'hidden' }}>
            <div className="content-holder" style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                padding: '80px',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            }}>
                {/* image holder container */}
                {/* *************************************************************************** */}
                <div className="image-holder" style={{
                    position: 'relative',
                    width: '55%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                }}>
                    <img style={{
                        height: '100%',
                        width: '100%'
                    }} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        alt="Phone image" />
                </div>
                {/* *************************************************************************** */}

                {/* content holder container */}
                {/* *************************************************************************** */}
                <div className="form-holder" style={{
                    flex: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        padding: '20px'
                    }}>
                        {/* <!-- Email input --> */}
                        {/* *************************************************************************** */}
                        <div style={{ width: '100%', margin: '10px' }}>
                            <input className='email' style={{ height: '50px', width: '100%', padding: 10, borderRadius: '5px' }} type="email" placeholder='Email' value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        </div>
                        {/* *************************************************************************** */}


                        {/* <!-- Password input --> */}
                        {/* *************************************************************************** */}
                        <div style={{ width: '100%', margin: '10px' }}>
                            <input className='password' type="password" placeholder='Password' style={{ height: '50px', width: '100%', padding: 10, borderRadius: '5px' }}
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </div>
                        {/* *************************************************************************** */}


                        <div style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                            {/* <!-- Checkbox --> */}
                            {/* *************************************************************************** */}
                            <div style={{ width: '100%' }}>
                                <input type="checkbox" disabled={true} checked />
                                <label > Remember me </label>
                            </div>
                            {/* *************************************************************************** */}
                        </div>

                        {/* <!-- Submit button --> */}
                        {/* *************************************************************************** */}
                        <button onClick={onSubmit} style={{ width: '100%', height: '40px', borderRadius: '5px' }}>Sign in</button>
                        {/* *************************************************************************** */}
                    </div>
                </div>
                {/* *************************************************************************** */}

            </div>
        </MainContainer>
    );
}

export default LoginScreen;
