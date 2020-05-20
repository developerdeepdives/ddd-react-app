import { NextPageContext } from "next";
import React, { Component } from "react";
import { AuthToken } from "../utils/authToken";
import { redirectToLogin } from "../utils/redirectToLogin";

export type AuthProps = {
  token: string;
  auth?: any;
};

export function privateRoute(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    state = {
      auth: new AuthToken(this.props.token),
    };

    static async getInitialProps(ctx: NextPageContext) {
      const auth = AuthToken.fromNext(ctx);
      const initialProps = { auth };
      if (auth.isExpired) {
        redirectToLogin(ctx.res);
      }
      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps(
          initialProps
        );
        return { ...wrappedProps, auth };
      }
      return initialProps;
    }

    componentDidMount(): void {
      this.setState({ auth: new AuthToken(this.props.auth.token) });
    }

    render() {
      const { auth, ...propsWithoutAuth } = this.props;
      return <WrappedComponent auth={this.state.auth} {...propsWithoutAuth} />;
    }
  };
}
