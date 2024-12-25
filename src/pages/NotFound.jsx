import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <>
      <Navbar />
      <section class="section is-medium">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column has-text-centered">
              <h1 class="title has-text-warning">404 Page Not Found</h1>
              <p class="subtitle">An unexpected error has occurred. Please contact the site owner.</p>
              <Link to='/' className="button is-primary is-medium has-text-white">
                  <p>Go Home</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}


export default NotFound;