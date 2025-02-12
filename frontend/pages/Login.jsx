import { useState } from 'react';
import '../src/App.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 w-96">
        <h2 className="login-header text-white text-center">เข้าสู่ระบบ</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid" style={{marginBottom: '20px'}}>
            <label htmlFor="username" className="block login-label mb-2">บัญชีพนักงาน</label>
            <input
              type="text"
              id="username"
              className="w-full login-input  text-white focus:outline-none hover:bg-[#0000000D]"
              placeholder="A0001"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block login-label mb-2">รหัสผ่าน</label> 
            <input
              type="password"
              id="password"
              className="w-full login-input text-white focus:outline-none hover:bg-[#0000000D]"
              placeholder="-------"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex login-submit">
            <button
              type="submit"
              className=" text-black font-bold py-2 px-4 rounded-md focus:outline-none"
            >
              ค้นหา 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;