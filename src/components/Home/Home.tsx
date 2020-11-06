import React, {useRef, useCallback, useState} from  "react";
import "./Home.scss";




export const Home: React.FunctionComponent = ()=>{

    const homeRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);


    const handleScroll = useCallback(()=>{

        if(!homeRef || !homeRef.current){
            return;
        }


        if(!headerRef || !headerRef.current){
            return;
        }

        headerRef.current.style.backgroundPositionY = `
            ${-homeRef.current.scrollTop / 10}px
        `;
        

    },[]);

    

    return(
        <div onScroll={handleScroll} ref={homeRef} className="Home">
            <header ref={headerRef}>

                <h1>Home</h1>
            </header>
            <section>
                <h2>Section</h2>
                <p>
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                    lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum 
                </p>
            </section>
        </div>
    )
}