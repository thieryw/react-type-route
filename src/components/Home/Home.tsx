import React, {useRef, useCallback, useState} from  "react";
import "./Home.scss";




export const Home: React.FunctionComponent = ()=>{

    const homeRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    const [backgroundPosition, setBackgroundPosition] = useState(-100);

    const [currentScrollHeight, setCurrentScrollHeight] = useState(0);

    const handleScroll = useCallback(async ()=>{

        if(!homeRef || !homeRef.current){
            return;
        }


        if(!headerRef || !headerRef.current){
            return;
        }

           

        headerRef.current.style.backgroundPositionY = `${backgroundPosition}px`


        if(homeRef.current.scrollTop > currentScrollHeight){
            setBackgroundPosition(backgroundPosition + 2);
            console.log("down");
        }else{

            setBackgroundPosition(backgroundPosition - 2);

            console.log("up");
        }


        setCurrentScrollHeight(homeRef.current.scrollTop);

        

    },[backgroundPosition, currentScrollHeight]);

    

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