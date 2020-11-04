import React from "react";
import "./App.scss";
import {useRoute} from "../../router";
import {Home} from "../Home/Home"
import {Info} from "../Pages/Info";
import {Service} from "../Pages/Service";
import {routes} from "../../router";




export const App: React.FunctionComponent = ()=>{
    const route = useRoute();
    
    return(
        <div className="App">
            <Navigation />
            {route.name === "home" && <Home/>}
            {route.name === "info" && <Info/>}
            {route.name === "service" && <Service/>}
            {route.name === false && <h1>Not Found</h1>}
        </div>

    )
};


const Navigation: React.FunctionComponent = ()=>{



    return(
        <nav>
            <h1>Site Name</h1>
            <ul>


                <li {...routes.home().link}>Home</li>
                <li {...routes.info().link}>Info</li>
                <li {...routes.service().link}>Service</li>

            </ul>
        </nav>


    )

}
