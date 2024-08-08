import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HOCcomponent(Component) {

    function Newcomponent(){
        return(
            <>
            <Header/>
            <Component/>
            <Footer/>
            </>
        )
    }

  return Newcomponent
}

export default HOCcomponent