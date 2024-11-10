import './header.css';
import backgroundImage from '../../images/header-bg.jpeg';

const Header = ()=>{
    return (
      <header className="header" >
         {/* style={{backgroundImage:`url(${backgroundImage})`}}> */}
        {/* <div className='header0im'></div> */}
        <div className="overlay">
          <div className='text-overlay'>
            <h1 className='title is-1'>Hi 👋, I'm Leo Fernandez.</h1>
            <p className='subtitle is-5 mt-2'>Discover expert insurance solutions tailored to your medical needs.<br/> Your health, our priority.</p>
            <div className='cards-headers'>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <div className='card'>
                  <div className="card-content">
                    <span className='icon-card' >
                      <svg width="30" height="30" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"></path></svg>
                    </span>
                    <div className='text-content'>
                      <p className="title is-5">Personalized Insurance Plans</p>
                      <p>Offering customized insurance plans that fit your medical requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="card">
                <div className="card-content">
                    <span className='icon-card' >
                      <svg width="30" height="30" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stethoscope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg>
                    </span>
                    <div className='text-content'>
                      <p className="title is-5">Expert Consultation</p>
                      <p>Providing professional advice for your health insurance needs.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    <span className='icon-card' >
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
                      </svg>
                    </span>
                    <div className='text-content'>
                      <p className="title is-5">Comprehensive Coverage</p>
                      <p>Ensuring extensive coverage for peace of mind.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          
        </div>
        

      </header>
    )
}

export default  Header;