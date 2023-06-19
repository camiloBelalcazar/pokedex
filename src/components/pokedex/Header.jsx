import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainer } from '../../store/slices/nameTrainer.slice'

const Header = () => {
  const dispatch = useDispatch()

  const handleClickLogout = () => {
    dispatch(setNameTrainer(''))
  }

  return (
    <section className='relative'>
      {/*seccion roja */}
      <div className='bg-primary h-20 relative '>
        <div className=' px-1 absolute left-0 bottom-0 w-[200px] xxs:w-[300px] sm:w-[400px]'>
          <img src='/images/logo.png' alt='' />
        </div>
      </div>

      {/*seccion negra */}
      <div className='bg-secondary h-12'></div>

      {/*seccion pokeball */}
      <div className='h-20 aspect-square bg-white border-[10px] border-secondary rounded-full absolute -bottom-4 right-0 -translate-x-1/2 after:content[""] after:h-10 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px] after:border-secondary'>
        <button
          onClick={handleClickLogout}
          className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20'
        >
          <i class='bx bx-exit text-xl'></i>
        </button>
      </div>
    </section>
  )
}

export default Header
