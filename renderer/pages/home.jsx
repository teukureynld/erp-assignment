"use client";
import React from 'react';
import Head from 'next/head';
import "bootstrap/dist/css/bootstrap.min.css"

export default function HomePage() {

  return (
    <React.Fragment>
      <Head>
        <title>Karyawan Login</title>
      </Head>

      <div class="container my-5">
        <h1 style={{color : 'blue'}}>Login To Your Account</h1>
        <form>
          <div class="form-group">
            <label for="input-username">username</label>
            <input type="email" class="form-control" id="input-username" aria-describedby="emailHelp" placeholder=""></input>
          </div>
          <div class="form-group">
            <label for="input-password">Password</label>
            <input type="password" class="form-control" id="input-password" placeholder=""></input>
          </div>
          <div class="form-group form-check">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </React.Fragment>
  )
}
