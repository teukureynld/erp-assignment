"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import WorkerForm from '../components/WorkerForm';

import "bootstrap/dist/css/bootstrap.min.css";


export default function HomePage() { 
  return (
    <React.Fragment>
      <Head>
        <title>Karyawan Login</title>
      </Head>

      <div className="container my-5">
        <h1 style={{color : 'blue'}}>Login To Your Account</h1>
        <form>
          <div className="form-group">
            <label htmlFor="input-username">Username</label>
            <input type="email" className="form-control" id="input-username" aria-describedby="emailHelp" placeholder=""></input>
          </div>
          <div className="form-group">
            <label htmlFor="input-password">Password</label>
            <input type="password" className="form-control" id="input-password" placeholder=""></input>
          </div>
          <div className="form-group form-check">
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        {/* Include WorkerForm component here */}
        <WorkerForm />
      </div>
    </React.Fragment>
  )
}
