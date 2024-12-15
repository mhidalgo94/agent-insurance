const title =  {
    initial :{
        top: '40px',
        position: 'relative',
        opacity: 0
    },
    animate:{
        top: '0px',
        opacity: 1,
        transition: {
            type: "lazy",
            duration: .8
        }
    }
  }
  
  
const card ={
    initial:{
      opacity:0,
      scale:0.8,
    },
    animate :{
      opacity:1,
      scale:1,
      transition:{
        type: 'lazy',
        duration: .5,
      }
    }
}


export {title, card};