import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import { Form, Button, Alert } from "react-bootstrap";
import Auth from '../utils/auth';
import Navbar from "./Navbar";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
    <Navbar/>
    <main className="login h-screen">
    <br></br>
    <br></br>
    <div className="flex mt-20 justify-center items-center">
        <div className=" container border border-green-600 w-fit content-center  justify-center items-center rounded pt-8 pb-8 pl-6 pr-6">
      
        <div className="card ">
       
          <div className="card-body ">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>

                <h2 className='text-green-800 justify-center items-center text-2xl py-2  px-8 '>Email</h2>
                <input
                  className="form-input text-green-800 justify-center items-center "
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />

                <h2 className='text-green-800 justify-center items-center text-2xl py-2  px-8 '>Password</h2>
                <input
                  className="form-input text-green-800 justify-center items-center"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
                <button
                  className="btn-primary btn-block bg-green-800 hover:bg-green-500 hover:border-black text-white font-bold py-2 px-4 border border-black rounded flex justify-center items-center"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Login
                </button>
                <br></br>
                <br></br>
                <h1 className="my-2 text-xs text-green-800">Don't have an account ? </h1>
                <button>
                  <Link
                  className=" btn-xs btn-block bg-green-800 hover:bg-green-500 hover:border-black text-white font-bold py-2 px-4 border border-black rounded flex justify-center items-center"
                  as={Link}
                  to="/signup"
                >
                  Sign Up!
                </Link>
                </button>

              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </main>
    </>
  );
};

export default Login;
