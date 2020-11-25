import { createRouter, defineRoute} from "type-route";
/*import { createRouter, defineRoute } from "type-route";

const publicUrl = process.env["PUBLIC_URL"]

const root =  publicUrl  ? defineRoute(publicUrl) : { "extend": defineRoute };

export const { RouteProvider, useRoute, routes } = createRouter({
  "countdown": root.extend("/"),
  "home": root.extend("/home")
});*/

const root = defineRoute(process.env["PUBLIC_URL"]);

const info= root.extend("/info");

export const {RouteProvider, useRoute, routes} = createRouter({

    "home": root,
    info,
    "info1": info.extend("/info1"),
    "info2": info.extend("/info2"),

    "service": root.extend("/service")

})