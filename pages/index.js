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
          death in a crash compared to people driving other vehicles.
        </li>
        <li>
          A number of people (about a quarter of CNN viewers) believe the number
          of unarmed black suspects shot by cops is{" "}
          <a href="https://www.rasmussenreports.com/public_content/politics/partner_surveys/liberal_media_viewers_are_misinformed_about_crime_in_america">
            10x
          </a>{" "}
          higher than it is.
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
          <b>Not too niche.</b> Before getting a driver's license in the US, you
          need to learn how to coexist with motorcyclists (though they make up
          only a small minority of motorists). If you want to submit a finding
          about a niche group, be prepared to explain how they affect the
          average person.
        </li>
        <li>
          <b>Not obvious.</b> I'm sure your chance of getting hit by a car goes
          up 10x if you stand in the middle of the road wearing all black at
          night compared to staying home. Valuable discoveries are unintuitive
          or surprising.
        </li>
      </ul>
      <h3>Why</h3>
      <p>
        The goal of this site is to surface important studies and research that
        might be neglected. Why neglected? Peter Thiel says: "Brilliant thinking
        is rare, but courage is in even shorter supply than genius." Some
        findings might be hard to accept, or take time to incorporate into our
        perception of the world. Studies that show a 10x differences are also
        more likely to survive the replication crisis. I believe there are many
        discoveries like the tobacco's link to lung cancer that we're afraid to
        talk about. These would be important results that can benefit us all.
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
