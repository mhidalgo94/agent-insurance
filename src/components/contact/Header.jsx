import './header.css';
import {motion} from 'motion/react';

import { title } from '../home/header/motion-styles';



export const HeaderContact = () => {
  return (
    <section className="hero" id="heroHeaderAbout">
      <div className="hero-body" id="heroBodyHeaderAbout">
        <div className="container" id='containerHeader'>
          <motion.p initial={title.initial} whileInView= {title.animate} className="title has-text-white has-text-centered is-size-1 pb-6">Connect with  Leo Fernández Agent</motion.p>
          <motion.p initial={title.initial} whileInView= {title.animate}  className="subtitle has-text-grey-light mt-4 is-size-5 has-text-centered" id="header-subtitle">Reach out for expert guidance on your medical insurance needs. We're here to assist you with professionalism and care..</motion.p>
        </div>
      </div>
    </section>
  )
}


export default HeaderContact;