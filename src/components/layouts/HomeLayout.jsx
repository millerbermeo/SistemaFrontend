import React from 'react'
import NavbarHome from '../molecules/NavbarHome'
import Footer from '../organisms/Footer'



const HomeLayout = ({children}) => {
  return (

    <div className="w-full h-full bg-[#FFFFFF]">
      <NavbarHome/>
        {children}
        <section className='bg-[#ffffff] w-full'>
      <Footer/>
      </section>  
    </div>
  )
}

export default HomeLayout