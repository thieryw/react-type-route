import React from "react";
import { routes, useRoute } from "../../router";
import { Route } from "type-route";
import { createGroup } from "type-route";

export const infoRouteGroup = createGroup([
    routes.info,
    routes.info1,
    routes.info2
]);

export const Info = (params: {
    route: Route<typeof infoRouteGroup>;
}) => {

    const { route } = params;

    return (

        <div>
            <h1>Info</h1>
            <ul>
                <li {...routes.info1().link}>link 1</li>
                <li {...routes.info2().link}>link 2</li>
            </ul>

            {route.name === "info1" && <Nest1 />}
            {route.name === "info2" && <Nest2 />}

        </div>
    )
}




const Nest1: React.FunctionComponent = () => {
    return (
        <div>
            <h3>nested Page 1</h3>
        </div>
    )

}

const Nest2: React.FunctionComponent = () => {
    return (
        <div>
            <h3>nested Page 2</h3>
        </div>
    )

}