import instance from '../axios';
import { useState, useEffect } from 'react';
import TableComponent from '../components/tableComponent';
import { set } from 'mongoose';


export default function Login() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const load = async () => {
        const token = localStorage.getItem('authToken'); // get the token

        if (token) {
            setMessage('User is logged in');
            setLoggedIn(true);
        } else {
            setMessage('User is not logged in');
            setLoggedIn(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

    const verifyUser = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await instance.post('/auth/signin', { email, password });
            // console.log('Login successful:', response.data);

            const token = response.data.token; // backend should return { token: "..." }
            localStorage.setItem('authToken', token);
            setLoggedIn(true);
            await load();
            await showUsers();

        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
        }
    };

    // const RegisterUser = async (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     try {
    //         const response = await instance.post('/auth/signup', { name, email, password });
    //         const token = response.data.token; // backend should return { token: "..." }

    //         localStorage.setItem('authToken', token);

    //         console.log('Registration successful:', response.data);
    //     } catch (error) {
    //         console.error('Registration failed:', error.response ? error.response.data : error.message);
    //     }}

    const showUsers = async () => {
        const token = localStorage.getItem('authToken'); // get the token
        try {
            const response = await instance.get('/users', {
                headers: {
                    Authorization: `Bearer ${token}`, // attach token
                },
            });
            setUsers(response.data);

            // console.log('Users fetched successfully:', response.data);
        } catch (error) {
            console.error('Fetching users failed:', error.response ? error.response.data : error.message);
        }
    }



    const signout = async () => {
        try {
            await instance.get('/auth/signout');
            localStorage.removeItem('authToken');
            setMessage('Signed out successfully');
            setLoggedIn(false);
            setUsers([]);
            await load();
        } catch (error) {
            console.error('Signout failed:', error.response ? error.response.data : error.message);
        }
    }

    const deleteUser = async (id) => {
        const token = localStorage.getItem('authToken'); // get the token

        try {
            const response = await instance.delete(`/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // attach token
                },
            });
            await showUsers();

            console.log('Users deleted successfully:', response.data);
        } catch (error) {
            console.error('Deleting users failed:', error.response ? error.response.data : error.message);
        }
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h1>Login Page</h1>
            {message && <p>{message}</p>}

            {!loggedIn && (
                <form onSubmit={verifyUser}>
                    <div>
                        <label htmlFor="email"> Username: </label>
                        <input type="text" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="password"> Password: </label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>



            )}


            {/* //Registration form for future use: */}
            {/* <form onSubmit={RegisterUser}>
                <div>
                <h2>Register</h2>
                <label htmlFor="name"> Name: </label>
                <input type="text" id="name" name="name" required />
                </div>
                <div>
                <label htmlFor="email"> Username: </label>
                <input type="text" id="email" name="email" required />
                </div>
                <div>
                <label htmlFor="password"> Password: </label>
                <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form> */}



            {loggedIn &&
                <>
                    <TableComponent users={users} deleteUser={deleteUser} />
                    <br />
                    <button onClick={signout}>Sign out</button>
                </>
            }

        </div>
    )
}
