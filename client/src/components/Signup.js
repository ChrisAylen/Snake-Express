import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Navbar from "./Navbar";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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

                <h2 className='text-green-800 justify-center items-center text-2xl py-2  px-8 '>Username</h2>

                <input
                  className="form-input text-green-800 justify-center items-center"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />

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
                  Submit
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


export default Signup;
