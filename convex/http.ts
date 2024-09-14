import { httpRouter } from "convex/server";
import { auth } from "./auth";

const http = httpRouter();

auth.addHttpRoutes(http);

export default http;

headers: new Headers({
    // e.g. https://mywebsite.com, configured on your Convex dashboard
    "Access-Control-Allow-Origin": process.env.CLIENT_ORIGIN!,
    Vary: "origin",
  })