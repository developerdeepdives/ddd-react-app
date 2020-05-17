import jwtDecode from "jwt-decode";
import Router from "next/router";
import Cookie from "js-cookie";
import { NextPageContext } from "next";
import { redirectToLogin } from "./redirectToLogin";

export type DecodedToken = {
  readonly exp: number;
  readonly iat: number;
  readonly user: {
    readonly email: string;
    readonly name: string;
    readonly _id: string;
  };
};

function getCookie(name, cookies) {
  const pattern = RegExp(name + "=.[^;]*");
  const matched = cookies.match(pattern);
  if (matched) {
    var cookie = matched[0].split("=");
    return cookie[1];
  }
  return false;
}

export class AuthToken {
  readonly decodedToken: DecodedToken;

  constructor(readonly token?: string) {
    // we are going to default to an expired decodedToken
    this.decodedToken = {
      user: { email: "", name: "", _id: "" },
      exp: 0,
      iat: 0,
    };

    // then try and decode the jwt using jwt-decode
    try {
      if (token) this.decodedToken = jwtDecode(token);
    } catch (e) {}
  }

  static async storeToken(token: string) {
    Cookie.set("token", token);
    await Router.push("/");
  }

  static fromNext(nextPage: NextPageContext) {
    const token = getCookie("token", nextPage.req.headers.cookie);
    return new AuthToken(token);
  }

  static async logout() {
    alert("get outta here!");
    Cookie.remove("token");
    await redirectToLogin();
  }

  logout = AuthToken.logout;

  get authorizationString() {
    return `JWT ${this.token}`;
  }

  get expiresAt(): Date {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired(): boolean {
    return new Date() > this.expiresAt;
  }

  get isValid(): boolean {
    return !this.isExpired;
  }
}
