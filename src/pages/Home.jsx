import React from 'react'
import FooterHome from '../components/home/FooterHome'
import { useDispatch } from 'react-redux'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const nameTrainer = e.target.nameTrainer.value
        dispatch(setNameTrainer(nameTrainer))
        navigate("/pokedex")

    }

    return (
        <main className='grid grid-rows-[1fr_auto] min-h-screen'>

            {/* secction superior */}

            <section className='flex flex-col items-center justify-center gap-8'>
                <div>
                    <img className='w-[280px] xs:w-[400px] sm:w-[600px] lg:w-[700px]' src="/images/logo.png" alt="Pokedex" />
                </div>
                <div className='text-center'>
                    <h3 className='text-primary text-2xl font-extrabold xs:text-3xl sm:text-4xl'>Hello Trainer!</h3>
                    <p className='text-base xs:text-xl'>For Start, give your name:</p>
                </div>
                
                <div className='px-2'>
                    <form className='flex shadow-xl' onSubmit={handleSubmit}>
                        <input className='h-12 lg:h-16 w-[190px] xs:w-[310px] lg:w-[500px] pl-4 border' required id='nameTrainer' type="text" placeholder="Your name..." />
                        <button className='bg-red-500 px-7 sm:px-9 text-white hover:bg-primary'>Start</button>
                    </form>
                </div>

                
            </section>

            
            {/* secction inferior */}

            <section>
                <FooterHome />
            </section>

        </main>
    )
}

export default Home