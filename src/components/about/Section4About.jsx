import './section3-about.css';

export default function Section3About() {
  return (
    <section className="hero" style={{paddingTop:'5rem'}} >
        <div className="hero-body">
            <div className="container " style={{minHeight: '450px'}}>
                <div className='group-contact'>
                    <div className="text-left" >
                        <p className="title has-text-dark">Different ways to contact</p>
                        <div className='text-time'>
                            <p className="subtitle1 is-size-5 has-text-dark">Monday-Friday, 9:00 am to 6:00 pm</p>
                            <p className="subtitle2 is-size-6 has-text-dark-light">Our team is ready to assist you with your medical insurance queries.</p>
                        </div>
                    </div>
                    <div className='text-right'>
                        <div>
                            <p className='has-text-dark is-size-5 is-family-code'>Get in Touch</p>
                            <a className='email-link' type='email' href='mailto:leofernandez@gmail.com'>leofernandez@gmail.com</a><br/>
                            <a className='email-link' type='email' href='mailto:leofernandez@gmail.com'>leofernandez@gmail.com</a>
                        </div>

                        <div>
                            <p className='has-text-dark is-size-5 is-family-code'>Contact Me</p>
                            <a className='email-link' type='email' href="tel:+17857695504">Cell Phone(+1 7857695504)</a><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
