import React from 'react'
import { useState, useRef } from 'react'
import './Login.scss'
import { useRegisterMutation, useLoginMutation } from '../../redux/api/authApi'
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authReducer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isRegister, setIsRegister] = useState(false)

    const [register, { error: regError }] = useRegisterMutation()
    const [login, { error: logError }] = useLoginMutation()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [registerError, setRegError] = useState(null)
    const [loginError, setLogError] = useState(null)

    // 处理用户名输入变化
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // 处理邮箱输入变化
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // 处理密码输入变化
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    // 获取dispatch
    const dispatch = useDispatch()

    // 获取navigate
    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault()
        if (isRegister) {
            // register是个异步函数
            register({
                username,
                password,
                email,
            }).then(res => {
                // console.log(res)
                setRegError(res.error)
                if (!res.error) {
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setIsRegister(false)
                }
            })
        } else {
            login({
                identifier: username,
                password
            }).then(res => {
                setLogError(res.error)
                if (!loginError) {
                    dispatch(logIn({
                        username: res.data.user.username,
                        token: res.data.jwt,
                        user: res.data.user,
                    }))
                }
                navigate('/')
                console.log(res)
            })
        }
    }
    // 实现注册和登录互相切换
    const handleClick = (event) => {
        event.preventDefault()
        // 清空错误提示
        setRegError(null)
        setLogError(null)
        setUsername('');
        setEmail('');
        setPassword('');
        setIsRegister(!isRegister)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="login">
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={handleUsernameChange}
                />
                {/* 只有注册时才显示邮箱 */}
                {isRegister && (
                    <input
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                )}
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {/* 输入错误提示 */}
                {registerError ? <p className="error">{registerError.data.error.message}</p> : null}
                {loginError ? <p className="error">{loginError.data.error.message}</p> : null}

                <button>{isRegister ? 'Register' : 'Log in'}</button>
                {/* 注册和登录切换 */}
                <a href="#" className="link" onClick={handleClick}>
                    {isRegister ? 'Log in' : 'No account? To register'}
                </a>
            </div>
        </form>
    )
}

export default Login
