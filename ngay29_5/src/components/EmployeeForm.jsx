import {useState} from "react";

const EmployeeForm = () => {
    
    const [employees, setEmployees] = useState([
        'NV1', 'NV2', 'NV3', 'NV4', 'NV5', 'NV6', 'NV7', 'NV8',
        'NV9', 'NV10'
    ]);

    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            setMessage('ma nhan vien khong dc de trong');
        } else if (employees.includes(inputValue.trim())) {
            setMessage('Ma nhan vien da ton tai trong he thong');
        } else {
            setEmployees([...employees, inputValue.trim()]);
            setMessage('them ma nhan vien thanh cong');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="nhap ma nhan vien"
                />
                <button type="submit">submit</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default EmployeeForm;