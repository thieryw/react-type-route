import { createRouter, defineRoute} from "type-route";
/*import { createRouter, defineRoute } from "type-route";

const publicUrl = process.env["PUBLIC_URL"]

const root =  publicUrl  ? defineRoute(publicUrl) : { "extend": defineRoute };

export const { RouteProvider, useRoute, routes } = createRouter({
  "countdown": root.extend("/"),
  "home": root.extend("/home")
});*/

const publicUrl = process.env["PUBLIC_URL"];

const root = publicUrl ? defineRoute(publicUrl) : {"extend": defineRoute};


export const {RouteProvider, useRoute, routes} = createRouter({

    home: root.extend("/"),

    info: defineRoute("/react-type-route/info"),

    service: defineRoute("/react-type-route/service")

})