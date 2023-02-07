import { ConvertKitForm } from "../ConvertKitForm";

const fullListUrl =
  "https://www.notion.so/markmiro/10x-Science-cbe517733fa4452aaf6a9f2e2042f729";

const contributeUrl =
  "https://www.notion.so/markmiro/How-to-contribute-a-study-ba6854897bef443d9643fcd69e254e04";

export default function IndexPage() {
  return (
    <div>
      <h1>10x Science</h1>
      <p>Some results:</p>
      <ul>
        <li>
          People who smoke cigarettes are{" "}
          <a href="https://www.cdc.gov/cancer/lung/basic_info/risk_factors.htm">
            15-30x
          </a>{" "}
          more likely to get lung cancer.
        </li>
        <li>
          "The quantity of prions in the brain of a patient who died of
          Alzheimer's at 40 were on average{" "}
          <a href="https://www.ucsf.edu/news/2019/05/414326/alzheimers-disease-double-prion-disorder-study-shows#:~:text=were%20on%20average-,32%20times,-higher%20than%20in">
            32
          </a>{" "}
          times higher than in a patient who died at 90."
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
          Professors are{" "}
          <a href="https://twitter.com/knrd_z/status/1572092216788815872">
            12-25
          </a>{" "}
          times more likely to have a parent with a PhD than the general
          population.
        </li>
        <li>
          Ants occupy similar biomass to humans and consume{" "}
          <a href="https://medium.com/collective-wisdom/the-talebian-and-thielian-moment-af14d7016adb">
            10x
          </a>{" "}
          the amount of food as humans, compared to their body weight.
        </li>
        <li>
          <a href={fullListUrl}>See the full list on Notion ↗</a>
        </li>
      </ul>
      <p>
        Imagine if this list got infinitely longer. Imagine using it to cut
        through the noise of the information onslaught we're used to. This is
        why the website exists.
      </p>
      <hr />
      <a href={contributeUrl}>
        See how to start contibuting your own studies ↗
      </a>
      <hr />
      <h3>Why</h3>
      <p>
        I want results that are so significant they’re hard to believe, rather
        than just significant enough to be believable.
      </p>
      <p>
        Peter Thiel says "Brilliant thinking is rare, but courage is in even
        shorter supply than genius." Some findings might be difficult to accept.
        This was the case for the smoking studies.
      </p>
      <h3>What counts</h3>
      <ul>
        <li>
          <b>Surprising:</b> I'm sure your chance of getting hit by a car goes
          up 10x if you stand in the middle of the road wearing all black at
          night compared to staying home. Valuable discoveries are unintuitive
          or surprising.
        </li>
        <li>
          <b>Relevant:</b> Before getting a driver's license in the US, you need
          to learn how to coexist with motorcyclists (though they make up only a
          small minority of motorists). If you want to submit a finding about a
          niche group, be prepared to explain how they affect the average
          person.
        </li>
      </ul>
      <hr />
      <h3>Get notified with new studies / get involved</h3>
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
          justifyContent: "center",
        }}
      >
        <div style={{ width: ".25em", height: ".25em", background: "black" }} />
        <div style={{ marginRight: ".125em" }} />
        <div style={{ width: ".25em", height: "2.5em", background: "black" }} />
      </div>
    </div>
  );
}
