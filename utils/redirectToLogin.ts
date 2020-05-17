import { ServerResponse } from "http";
import Router from "next/router";

export const redirectToLogin = (server?: ServerResponse) => {
  const login = "/login?redirected=true";
  if (server) {
    server.writeHead(302, {
      Location: login,
    });
    server.end();
  } else {
    Router.push(login);
  }
};
