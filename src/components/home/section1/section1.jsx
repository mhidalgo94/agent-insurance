import './section1.css';
import img from '../../../images/test-agent-insurance.jpg';
const Section1 = ()=>{
    return (
        <section className='section1'>
            <div className='section-content'>
                <div className="section-text">
                    <p className='title is-1 has-text-dark'>Secure Your Health Today</p>
                    <p className="subtitle2 is-size-6 has-text-grey-light">Contact us for a personalized consultation and find the best insurance plan for you.</p>
                    <div className='list-text'>
                        <ul className='list-section1'>
                            <li className='items-list'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                                </svg>
                                <p className='has-text-grey-darker'>Tailored Insurance Solutions</p>
                            </li>
                            <li className='items-list has-text-grey-darker'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                                </svg>
                                <p className='has-text-grey-darker'>Expert Guidance and Support</p>
                            </li>
                            <li className='items-list has-text-grey-darker'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                                </svg>
                                <p className='has-text-gery-darker'>Comprehensive Coverage Options</p>
                            </li>
                        </ul>
                    </div>
                    <div className='btn-contact'>
                        <div className='buttons'>
                            <a className="button is-primary is-medium has-text-white">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </span>
                                <p>Try for Free</p>
                            </a>
                            <a className="button is-medium is-black is-outlined">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"viewBox="0 0 16 16">
                                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    </svg>
                                </span>
                                <span>Contact</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='section-img'>
                    <img src={`${img}`} alt="" />
                </div>
            </div>
        </section>
    )
}


export default Section1;