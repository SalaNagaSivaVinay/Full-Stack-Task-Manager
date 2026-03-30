import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'https://full-stack-task-manager-vgia.onrender.com/api/v1';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (token) getTasks();
  }, [token]);

  const register = async () => {
    try {
      await axios.post(`${API}/auth/register`, { name, email, password });
      setMessage('✅ Registered successfully');
    } catch (err) {
      setMessage(err?.response?.data?.message || '❌ Registration failed');
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/auth/login`, { email, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      setMessage('✅ Login successful');
    } catch (err) {
      setMessage(err?.response?.data?.message || '❌ Login failed');
    }
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    setTasks([]);
    setMessage('Logged out');
  };

  const getTasks = async () => {
    try {
      const res = await axios.get(`${API}/tasks`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(res.data);
    } catch (err) {
      setMessage('❌ Failed to load tasks');
    }
  };

  const addTask = async () => {
    if (!title) return setMessage('Enter task');
    try {
      await axios.post(`${API}/tasks`, { title }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTitle('');
      getTasks();
      setMessage('✅ Task added');
    } catch (err) {
      setMessage('❌ Failed to add task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      getTasks();
    } catch {
      setMessage('❌ Delete failed');
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>🚀 Task Manager</h1>

      {!token && (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
          <h3>Auth</h3>
          <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br /><br />
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br /><br />
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
          <button onClick={register}>Register</button>
          <button onClick={login} style={{ marginLeft: '10px' }}>Login</button>
        </div>
      )}

      {token && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={logout}>Logout</button>

          <h3 style={{ marginTop: '20px' }}>Add Task</h3>
          <input placeholder="Enter task" value={title} onChange={e => setTitle(e.target.value)} />
          <button onClick={addTask} style={{ marginLeft: '10px' }}>Add</button>

          <h3 style={{ marginTop: '20px' }}>Your Tasks</h3>
          {tasks.length === 0 ? (
            <p>No tasks</p>
          ) : (
            tasks.map(t => (
              <div key={t._id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '5px' }}>
                <span>{t.title}</span>
                <button onClick={() => deleteTask(t._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      )}

      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
}

export default App;

