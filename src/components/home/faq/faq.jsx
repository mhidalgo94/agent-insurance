import './faq.css';


const Faq = () => {
  return (
    <section className='hero pt-6' style={{minHeight:'40rem'}}>
        <div className='hero-body mt-6 pl-6'>
            <div className='container' style={{width: '90%', maring:'0 auto'}}>
                <p className='title is-size-3 has-text-dark mb-5'>Frequently Asked Questions</p>

                <div className='container mt-6'>
                    <p className='subtitle is-size-4 has-text-grey mb-1 is-family-sans-serif'>What types of medical insurance do you offer?</p>
                    <p className='subtitle is-size-6 has-text-grey-darker ml-2'>We offer a variety of plans including individual, family, and specialized medical insurance.</p>
                </div>

                <div className='container mt-6'>
                    <p className='subtitle is-size-4 has-text-grey mb-1 is-family-sans-serif'>How can I get a quote?</p>
                    <p className='subtitle is-size-6 has-text-grey-darker ml-2'>Simply contact us through our website or call us to receive a personalized insurance quote.</p>
                </div>

                <div className='container mt-6'>
                    <p className='subtitle is-size-4 has-text-grey mb-1 is-family-sans-serif'>What should I consider when choosing a plan?</p>
                    <p className='subtitle is-size-6 has-text-grey-darker ml-2'>Consider your medical needs, budget, and the coverage options available to find the best plan.</p>
                </div>
            </div>
        </div>

    </section>
  )
}


export default Faq;