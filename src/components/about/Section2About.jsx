import './section2-about.css';


export default function Section2About() {
  return (
    <section className="hero" style={{paddingTop:'6rem', paddingBottom:'6rem'}} >
        <div className="hero-body ml-6 mt-5">
            <div className="container" >
                <div className="container mt-2">
                    <p className="subtitle has-text-info is-size-3">Tailored to Your Needs</p>
                    <p className="title has-text-dark mt-1 is-size-2">Comprehensive Insurance Services</p>
                </div>
                <div className="container mt-2 pl-3 has-text-dark" >
                    <p className="mt-4 is-size-5" style={{maxWidth:'600px', textAlign:'left'}}> We offer a wide range of medical insurance services designed to provide peace of mind and financial security.</p>
                </div>
                <div className="cards-about mt-6">
                    <div className="card-about mt-5">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>

                        </div>
                        <div className="card-text">
                                <p className="subtitle1 is-size-4 has-text-black">Personalized Solutions</p>
                                <p className="subtitle2 has-text-dark">Delivering tailored insurance plans that cater to individual client needs and circumstances.</p>
                        </div>
                    </div>
                    <div className="card-about mt-5">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
                            </svg>
                        </div>
                        <div className="card-text">
                                <p className="subtitle1 is-size-4 has-text-black">Award-Winning Service</p>
                                <p className="subtitle2 has-text-dark">Recognized for excellence in service and innovation in the insurance sector.</p>
                        </div>
                    </div>
                    <div className="card-about mt-5">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </div>
                        <div className="card-text">
                                <p className="subtitle1 is-size-4 has-text-black">Innovative Strategies</p>
                                <p className="subtitle2 has-text-dark">Continuously innovating to provide top-tier insurance services that you can rely on.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
