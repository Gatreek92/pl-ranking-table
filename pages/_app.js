import React from "react";
import App, { Container } from "next/app";
import axios from "axios";
import AppContext from "../components/appContext";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const res = await axios.get(
      "http://api.football-data.org/v2/competitions/2021/standings",
      { headers: { "X-Auth-Token": "57c8cb7275dd4ab695bc3f3d9b23ba92" } }
    );

    return {
      pageProps,
      competition: res.data.competition.name,
      season: res.data.season,
      standings: res.data.standings[0].table
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <AppContext.Provider
          value={{
            competition: this.props.competition,
            season: this.props.season,
            standings: this.props.standings
          }}
        >
          <Component {...pageProps} />
        </AppContext.Provider>
      </Container>
    );
  }
}

export default MyApp;