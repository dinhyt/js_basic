import React, { useState } from "react"
import './Form.css';
const Form3 = () => {
    
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const [employees, setEmployees] = useState(['']);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputValue.trim()) {
            setMessage('Mã không được để trống');
        } else if (!inputValue.startsWith('NV')) {
            setMessage('Mã không đúng định dạng');
        } else if (inputValue.length < 8) {
            setMessage('Mã không được nhỏ hơn 8 ký tự');
        } else if (inputValue.length > 16) {
            setMessage('Mã không được nhiều hơn 16 ký tự');
        } else {
            setMessage('Thêm nhân viên thành công');
            setEmployees([...employees, inputValue.strim()]);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        id="code"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="nhập vào mã nhân viên"
                    />
                </div>
                <div className='button-container'>
                    <button type="submit">Submit</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Form3;