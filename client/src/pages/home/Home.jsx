import React, {useRef} from "react";
import HomeMain from './HomeMain'
// import HomeCatalogue from './HomeCatalogue'

// import Catalogue from './HomeCatalogue'
import About from './About'
// import { ReactDOM } from "react-dom";
const Home =() => {
    const scrollhome = useRef()
    // const scrollcat =useRef()
    const scrollabout = useRef()
        return(
            
            <>
                <div className="home-page">
                    <nav className="navigation">
                        <img className='logo' src="./assets/images/icons/logo.png" alt="record logo"/>
                        <ul className="navmenu">
                            <li onClick={() => scrollhome.current.scrollIntoView()}>HOME</li>
                            {/* <li onClick={() => scrollcat.current.scrollIntoView()}>CATALOGUE</li> */}
                            <li onClick={() => scrollabout.current.scrollIntoView()}>ABOUT</li>
                        </ul>
                    </nav>
                    <div ref = {scrollhome}>
                       <HomeMain/>
                    </div>
                </div>

                {/* <div ref = {scrollcat} className="home-catalogue">
                    <HomeCatalogue/>
                </div>   */}
                
                <div ref = {scrollabout}>
                    <About/>   
                </div>      
            </>
        )
    
}
export default Home