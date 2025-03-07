import "./HomeContent.css";

import VerticalCohortSelector from "../VerticalCohortSelector/VerticalCohortSelector";

export default function HomeContent() {
    return (
        <section className="HomeContent">
            <div className="HomeContent-content">
                <div className="left-scroll-content">
                    <div className="article-content">
                        <h2>Outcome-Driven UX Metrics.</h2>
                        <h2>Measuring your users’ actual experience.</h2>
                        <p>
                            <b>Outcome-Driven UX Metrics</b> is our radical
                            approach to measuring and reporting UX metrics with
                            your organization. You’ll directly measure how every
                            new release of your products and services improves
                            your customers’ and users’ lives.
                        </p>
                        <p>When you share Outcome-driven UX Metrics, you’ll…</p>
                        <ul>
                            <li>
                                Increase the strategic contributions your UX
                                team delivers to your organization.
                            </li>
                            <li>
                                Raise the perception of UX’s value in the eyes
                                of your executives and senior stakeholders.
                            </li>
                            <li>
                                Inspire your peers in development and product
                                management to make UX a priority in their work.
                            </li>
                            <li>
                                Guide your organization to deliver more
                                human-centered products and services.
                            </li>
                        </ul>
                        <p>
                            {" "}
                            The Outcome-driven UX Metrics framework is not based
                            on the magical thinking you find in conventional UX
                            metrics approaches. Conventional metrics make your
                            work harder because there’s no direct connection to
                            the effort you put in.
                        </p>

                        <p>
                            With conventional metrics, you have to cross your
                            fingers and hope that your hard work will improve
                            your conversion rates, Net Promoter Scores, or
                            revenue and retention metrics. Those metrics make it
                            hard when someone asks how you know your work made
                            things better. With conventional metrics, you never
                            really know.
                        </p>

                        <p>
                            Outcome-driven UX Metrics are different. They
                            measure directly how you and your team have improved
                            your customers’ and users’ lives.
                        </p>
                        <p>
                            <i>”What gets measured, gets done.”</i> With
                            Outcome-driven UX Metrics, UX gets done well. Your
                            executives and senior stakeholders immediately see
                            the value improved UX brings your customers and the
                            increased benefits your users receive.
                        </p>
                        <p>
                            Outcome-driven UX Metrics make UX distinctively
                            visible.
                        </p>

                        <h3>
                            Showcase precisely where you’re delivering value.
                        </h3>

                        <p>
                            You’ll start with what we call a <i>UX Outcome.</i>{" "}
                            Your UX outcome answers a simple question:{" "}
                            <i>
                                How will you improve your users’ and customers’
                                lives?
                            </i>{" "}
                            Ultimately, you’ll build your metrics around this
                            question.{" "}
                        </p>

                        <p>
                            {" "}
                            Using your UX outcome, you’ll create three
                            categories of metrics:
                        </p>
                        <ul>
                            <li>
                                <i>UX Success metrics:</i> Report the precise
                                moment you’ve improved your customers’ and
                                users' lives.
                            </li>
                            <li>
                                <i>UX Progress metrics:</i> Achieve key results
                                as your team progresses against your planned
                                milestones.
                            </li>
                            <li>
                                <i>Problem-value metrics:</i> Pinpoint and
                                aggregate your organization’s ongoing costs of
                                poor UX to promote UX’s return on investment. 
                            </li>
                        </ul>
                        <p>
                            Each of these metrics categories helps you tell the
                            story of your UX journey. The story of where you’re
                            going, where you started, and how far along you are.
                        </p>
                        <p>
                            Outcome-driven UX Metrics are simple in their
                            concepts. Once you acquire the fundamentals, you’re
                            ready to implement your own. 
                        </p>
                        <p>
                            And once you implement your own Outcome-Driven UX
                            Metrics, you've unleashed a superpower. You'll spark
                            exceptional outcomes with your UX metrics as a
                            foundation.
                        </p>
                        <p>
                            <b>
                                You need Outcome-driven UX metrics to improve
                                how your organization values UX.
                            </b>
                        </p>
                    </div>
                </div>
                <div className="right-scroll-content">
                    <VerticalCohortSelector />
                </div>
            </div>
        </section>
    );
}
