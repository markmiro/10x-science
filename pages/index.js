import { config } from "../stuff/config";
import { ConvertKitForm } from "../stuff/ConvertKitForm";

export default function IndexPage() {
  return (
    <div>
      <h1>10x Science</h1>
      <p>Science with 10x results:</p>
      <ul>
        <li>
          People who smoke cigarettes are{" "}
          <a href="https://www.cdc.gov/cancer/lung/basic_info/risk_factors.htm">
            15-30x
          </a>{" "}
          more likely to get lung cancer.
        </li>
        <li>
          Child sexual abuse goes up{" "}
          <a href="https://www.acf.hhs.gov/opre/report/fourth-national-incidence-study-child-abuse-and-neglect-nis-4-report-congress">
            20x
          </a>{" "}
          in step cohabiting family.
        </li>
        <li>
          Motorcyle riders have a{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19540959/">30x</a> risk of
          death in a crash than people driving other vehicles.
        </li>
        <li>
          <a
            href={config.submitStudyUrl}
            style={{
              fontWeight: "bold",
              color: "lime",
              background: "black",
              padding: "3px"
            }}
          >
            Submit a study ↗
          </a>
        </li>
      </ul>
      <hr />
      <h3>What counts as 10x</h3>
      <ul>
        <li>
          Nothing too niche. Looking in unique places is likely to yield unique
          results. The goal of this site is to collect studies that are relevant
          to the broader population.
        </li>
        <li>
          Not something obvious. I'm sure your chance of getting hit by a car
          goes up 10x if you stand in the middle of the road wearing all black
          at night compared to staying home.
        </li>
      </ul>
      <h3>Why</h3>
      <p>
        It's possible we have discoveries like the tobacco link to lung cancer
        that we simply don't talk about. These would be important results that
        are buried in the literature. The goal of this site is to surface
        important studies that might be neglected, and to page homage to science
        that made a splash.
      </p>
      <h3>Get notified with new studies</h3>
      <ConvertKitForm />
      <hr />
      <div style={{ fontSize: "0.75em", textAlign: "center" }}>
        Made by Mark Miro
        {" / "}
        <a href="mailto:contact@markmiro.com?subject=10xScience">Contact ✉️</a>
      </div>
      <div style={{ height: "1em" }} />
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
        <div style={{ width: ".25em", height: ".25em", background: "black" }} />
        <div style={{ marginRight: ".125em" }} />
        <div style={{ width: ".25em", height: "2.5em", background: "black" }} />
      </div>
    </div>
  );
}
