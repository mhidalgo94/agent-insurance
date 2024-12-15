import './section3-contact.css';

export default function Section3Contact() {
  return (
    <section className="section" style={{paddingTop:'8rem', paddingBottom:'8rem'}}>
    <div className="container mt-6 mb-6" style={{textAlign:"center"}}>
        <p className="title is-size-2 has-text-dark">Get in Touch with Leo Fernandez</p>
    </div>
    <div className="container" style={{width:"100%", margin:'0 auto'}}>
      <div className="columns is-multiline mt-1" style={{maxWidth:'900px', margin:'0 auto'}}>

        {/*-- Primera tarjeta */} 
        <div className="column is-half">
          <div className="card" id="card-contact">
                <div className="card-content">
                    <div>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 16 16">
                                <path fill="rgb(96 148 227)" d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527"/>
                            </svg>
                        </span>
                    </div>
                    <div>
                        <p className="title is-size-5 has-text-info">Office Hours</p>
                        <p className="subitle has-text-dark mt-2">Monday-Friday</p>
                        <p className="subitle has-text-dark mt-2">9:00 am to 6:00 pm</p>
                    </div>
                </div>
          </div>
        </div>
        <div className="column is-half">
        <div className="card" id="card-contact">
                <div className="card-content">
                    <div>
                        <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path fill="rgb(96 148 227)" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                        </span>
                    </div>
                    <div>
                        <p className="title is-size-5 has-text-info">Our Addresss</p>
                        <p className="subitle has-text-dark mt-2">123 Health St.</p>
                        <p className="subitle has-text-dark mt-2">Miami Florida, USA</p>
                    </div>
                </div>
          </div>
        </div>

        <div className="column is-half">
            <div className="card" id="card-contact">
                    <div className="card-content">
                        <div>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 16 16">
                                    <path fill="rgb(96 148 227)" fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                            </span>
                        </div>
                        <div>
                            <p className="title is-size-5 has-text-info">Contact Us</p>
                            <p className="subitle has-text-dark mt-2">Monday-Friday</p>
                            <p className="subitle has-text-dark mt-2">9:00 am to 6:00 pm</p>
                        </div>
                    </div>
            </div>
        </div>

        <div className="column is-half">
            <div className="card" id="card-contact">
                    <div className="card-content">
                        <div>
                            <span className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                                <path fill="rgb(96 148 227)" d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                                <path fill="rgb(96 148 227)" d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                            </svg>
                            </span>
                        </div>
                        <div>
                            <p className="title is-size-5 has-text-info">Contact Us</p>
                            <p className="subitle has-text-dark mt-2">inf@gmail.com</p>
                            <p className="subitle has-text-dark mt-2">info@gmail.com</p>
                        </div>
                    </div>
            </div>
        </div>

      </div>
    </div>
  </section>
  )
}
