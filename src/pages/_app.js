import Head from "next/head";
import "../index.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "25vmin",
          // padding: "1em",
          background: "#000",
          color: "white",
        }}
      >
        {/* <img src="/10x-science-logo-white.svg" /> */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            style={{ width: ".25em", height: ".25em", background: "white" }}
          />
          <div style={{ marginRight: ".125em" }} />
          <div
            style={{ width: ".25em", height: "2.5em", background: "white" }}
          />
        </div>
      </div>
      <div style={{ maxWidth: "65ch", margin: "0 auto" }}>
        <div style={{ margin: "1em .5em" }}>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
