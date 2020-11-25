import React from "react";
import "./App.scss";
import { useRoute } from "../../router";
import { Home } from "../Home/Home"
import { Info, infoRouteGroup } from "../Pages/Info";
import { Service } from "../Pages/Service";
import { routes } from "../../router";





export const App: React.FunctionComponent = () => {
    const route = useRoute();


    console.log(route.name);

    return (
        <div className="App">
            <Navigation />
            {route.name === "home" && <Home />}
            {infoRouteGroup.has(route) && <Info route={route} />}
            {route.name === "service" && <Service />}
            {route.name === false && (console.log("coucou"), <h1>Not Found</h1>)}
        </div>

    )
};


const Navigation: React.FunctionComponent = () => {



    return (
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
