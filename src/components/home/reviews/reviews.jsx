import rimg1 from '../../../images/review-img1.jpeg';
import rimg2 from '../../../images/review-img2.jpeg';
import rimg3 from '../../../images/review-img3.jpeg';
import './reviews.css';
const Reviews = ()=> {
  return (
    <section class="hero mt-5 " style={{backgroundColor:'#e8faff'}}>
        <div class="hero-body">
            <div className='pt-5 mt-6' style={{margin:"0 auto", textAlign:'center'}}>
                <p className='title is-4 has-text-primary'>Trusted by Many for Reliable Insurance Solutions</p>
                <p className='title is-3 has-text-grey-dark'>What Our Clients Say</p>
            </div>
            <section className='section'>
            <div className="columns is-multiline is-centered mt-6">
                <div className="column is-12-mobile is-6-tablet is-4-desktop">
                    <div className="card" style={{border:"none", boxShadow:"none", background:'transparent'}}>
                        <div className="card-content" id="reviewCard">
                            <div>
                                <p className="subtitle2 is-size-6 has-text-grey-dark">Leo Fernández Agent provided exceptional service and found the perfect plan for my needs.</p>
                                <div className='mt-2' style={{display:'flex', flexDirection:'row', justifyContent:"left"}}>
                                    <figure class="image is-64x64 mt-4" >
                                        <img src={rimg2} style={{borderRadius:'50%'}} />
                                    </figure>
                                    <div className='content pl-3' style={{margin: 'auto 0'}}>
                                        <p className='subtitle2 mb-2 has-text-left has-text-black'>Jessica Tyson</p>
                                        <p className='pl-2'>@jessityson</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-12-mobile is-6-tablet is-4-desktop">
                    <div className="card" style={{border:"none", boxShadow:"none", background:'transparent'}}>
                        <div className="card-content" id="reviewCard">
                            <div>
                                <p className="subtitle2 is-size-6 has-text-grey-dark">I feel secure knowing my health insurance is in the hands of experts.
                                </p>
                                <div className='mt-2' style={{display:'flex', flexDirection:'row', justifyContent:"left"}}>
                                    <figure class="image is-64x64 mt-4" >
                                        <img src={rimg3} style={{borderRadius:'50%'}} />
                                    </figure>
                                    <div className='content pl-3' style={{margin: 'auto 0'}}>
                                        <p className='subtitle2 mb-2 has-text-left has-text-black'>Tyler Cruise</p>
                                        <p className='pl-2'>@tcruise</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-12-mobile is-6-tablet is-4-desktop">
                    <div className="card" style={{border:"none", boxShadow:"none", background:'transparent'}}>
                        <div className="card-content" id="reviewCard">
                            <div>
                                <p className="subtitle2 is-size-6 has-text-grey-dark">Their personalized approach made the entire process stress-free.</p>
                                <div className='mt-2' style={{display:'flex', flexDirection:'row', justifyContent:"left"}}>
                                    <figure class="image is-64x64 mt-4" >
                                        <img src={rimg1} style={{borderRadius:'50%'}} />
                                    </figure>
                                    <div className='content pl-3' style={{margin: 'auto 0'}}>
                                        <p className='subtitle2 mb-2 has-text-left has-text-black'>Jane Smith</p>
                                        <p className='pl-2'>@janesmith</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            
        </div>
    </section>
  )
}

export default Reviews;