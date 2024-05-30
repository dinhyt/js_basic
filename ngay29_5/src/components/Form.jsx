import React, { useState } from 'react';
import './Form.css';
const Form = () => {
  
    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

  
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!code.trim()) {
            setMessage('Mã không được để trống');
        } else if (!code.startsWith('NV')) {
            setMessage('Mã không đúng định dạng');
        } else if (code.length < 8) {
            setMessage('Mã không được nhỏ hơn 8 ký tự');
        } else if (code.length > 18) {
            setMessage('Mã không được lớn hơn 18 ký tự');
        } else if (!email.trim()) {
            setMessage('Email không được để trống');
        } else if (!isValidEmail(email)) {
            setMessage('Email không đúng định dạng');
        } else if (password.length < 8) {
            setMessage('Mật khẩu không được nhỏ hơn 8 ký tự');
        } else {
            setMessage('Đăng ký thành công');
        }
    };

  return (
    <div>
        <div className='form-container'>
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit}>
            
                <div className='form-group'>
                    <label htmlFor="code">Mã nhân viên:</label>
                    
                    <input
                        type="text"
                        id="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Nhập mã nhân viên"
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email"
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Mật khẩu:</label>
                    
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu"
                    />
                </div>
                <div className='button-container'>
                    <input type="checkbox" /> Check me out
                    <br />
                    <button type="submit">Submit</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    </div>
  );
};

export default Form;
