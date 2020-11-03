import { createRouter, defineRoute} from "type-route";
/*import { createRouter, defineRoute } from "type-route";

const publicUrl = process.env["PUBLIC_URL"]

const root =  publicUrl  ? defineRoute(publicUrl) : { "extend": defineRoute };

export const { RouteProvider, useRoute, routes } = createRouter({
  "countdown": root.extend("/"),
  "home": root.extend("/home")
});*/


export const {RouteProvider, useRoute, routes} = createRouter({

    home: defineRoute("/react-type-route"),

    info: defineRoute("/react-type-route/info"),

    service: defineRoute("/react-type-route/service")

})