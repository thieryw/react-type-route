import React from "react";
import "./App.scss";
import {useRoute} from "../../router";
import {Home} from "../Home/Home"
import {Info} from "../Pages/Info";
import {Service} from "../Pages/Service";




export const App: React.FunctionComponent = ()=>{
    const route = useRoute();

    console.log(route.name);
    
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
                <li>Home</li>
                <li>Info</li>
                <li>Service</li>

            </ul>
        </nav>


    )

}
