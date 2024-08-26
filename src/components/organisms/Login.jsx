import React, { useState } from 'react';
import InputUsername from '../molecules/InputUsername';
import InputPassword from '../molecules/InputPassword';
import ButtonLogin from '../molecules/ButtonLogin';
import { Divider } from "@nextui-org/react";
import { ButtonGoogle } from '../atoms/ButtonGoogle';
import { ButtonFacebook } from '../atoms/ButtonFacebook';
import useLogin from '../../hooks/useLogin';
import ToastComponent from './ToastComponent';
import useNavigation from '../../utils/useNavigation';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { goTo } = useNavigation();

    const { iniciarSession, loading, error, toastInfo } = useLogin();

    const handleLogin = async () => {
        try {
            await iniciarSession({ email, password });
            goTo('/dashboard');
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <div className='w-full h-screen bg-gray-100 flex items-center justify-center'>
            <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
                <h1 className='text-4xl font-bold text-center mb-6'>Sign In</h1>
                <div className='space-y-6'>
                    <InputUsername email={email} setEmail={setEmail} />  {/* Pasar props */}
                    <InputPassword password={password} setPassword={setPassword} />  {/* Pasar props */}
                    <ButtonLogin handleLogin={handleLogin} isLoading={loading} />
                    <Divider className="my-4" />
                    <div className='text-center'>
                        <a href='#' className='text-blue-500 hover:underline'>¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <ButtonGoogle />
                        <ButtonFacebook />
                    </div>
                </div>
            </div>

            <ToastComponent
                title={toastInfo.title}
                description={toastInfo.description}
                status={toastInfo.status}
                trigger={toastInfo.trigger}
            />
        </div>
    );
};

export default Login