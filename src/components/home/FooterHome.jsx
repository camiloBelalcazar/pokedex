import React from 'react'

const FooterHome = () => {
  return (
      <section className='relative'>
          {/*seccion roja */}
          <div className='bg-primary h-20 '></div>

          {/*seccion negra */}
          <div className='bg-secondary h-14'></div>
          
          {/*seccion pokeball */}
            <div className='h-20 aspect-square bg-white border-[10px] border-secondary rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 after:content[""] after:h-10 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-secondary'></div>
    </section>
  )
}

export default FooterHome