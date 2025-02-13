import { useState } from 'react';
import '../src/App.css';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();
      if (data.token) {
        login(data.token);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 w-96">
        <h2 className="login-header text-white text-center">เข้าสู่ระบบ</h2>

        <form onSubmit={handleLogin}>
          <div className="grid" style={{ marginBottom: '20px' }}>
            <label htmlFor="username" className="block login-label mb-2">บัญชีพนักงาน</label>
            <input
              type="text"
              id="username"
              className="w-full login-input text-white focus:outline-none hover:bg-[#0000000D]"
              placeholder="A0001"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              required
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="login-submit text-black font-bold py-2 px-4 rounded-md focus:outline-none"
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