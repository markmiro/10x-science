import Link from "next/link";
import Image from "next/image";
import { config } from "../stuff/config";
import "../stuff/index.css";

function Nav() {
  return (
    <nav
      style={{
        padding: "1em .5em",
        borderBottom: "1px solid",
        textAlign: "center"
      }}
    >
      <Link href="/">
        <a style={{ fontWeight: "bold" }}>Home</a>
      </Link>
      {/* {" / "}
        <Link href="/about">
          <a>About</a>
        </Link> */}
      {" / "}
      <Link href={config.submitStudyUrl}>
        <a>Submit a study&nbsp;↗</a>
      </Link>
      {" / "}
      <Link href="/sign-up">
        <a>Sign up for updates&nbsp;↗</a>
      </Link>
      {/* {" / "} */}
      {/* <Link href="/submit">
            <a>Discuss on Discord&nbsp;↗</a>
          </Link> */}
    </nav>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "25vmin",
          // padding: "1em",
          background: "#000",
          color: "white"
        }}
      >
        {/* <img src="/10x-science-logo-white.svg" /> */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center"
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
