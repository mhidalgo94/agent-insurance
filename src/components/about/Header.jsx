import './header.css';

import {motion} from 'motion/react';

import { title } from '../home/header/motion-styles';


export const Header = () => {
  return (
    <section className="hero" id="heroHeaderAbout">
      <div className="hero-body" id="heroBodyHeaderAbout">
        <div className="container" id='containerHeader'>
          <motion.p initial={title.initial} whileInView= {title.animate} className="title has-text-white has-text-centered is-size-1 pb-6">Meet Your Trusted Insurance Medical Agent</motion.p>
          <motion.p initial={title.initial} whileInView= {title.animate} className="subtitle has-text-grey-light mt-4 is-size-5 has-text-centered" id="header-subtitle">Discover the expertise and dedication that set us apart in the field of medical insurance. With years of experience and a commitment to client satisfaction, we are here to serve your needs.</motion.p>
        </div>
      </div>
    </section>
  )
}


export default Header;