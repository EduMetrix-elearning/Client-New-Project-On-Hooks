import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbarpage } from "../Navbar/Navbarpage";
import "./TermOfservices.scss";

export const SubscriptionTerms = () => {
  return (
    <div className="termsofcondition-whole-div">
      <Navbarpage />
      <div className="TermsOfServices">
        <div className="article">
          <h3>Subscription terms</h3>
          <div className="paragraph-article">
            <p>
              For Learners, EduMetrix does not charge any fee for registration
              and account creation. However, certain Services offered by
              EduMetrix may be chargeable. Accordingly, access to certain
              Services and features is offered by EduMetrix through a multi-
              tiered paid subscription plan(s) or purchases; the details of the
              Services and applicable features along with their corresponding
              prices can be found on our site and/or Application
              (“Subscription”/ “Subscription Service”). You can purchase
              Subscriptions by following the instructions you encounter as you
              navigate through the Platform.
            </p>
            <h3>
              The terms that are applicable to Your purchase of Subscription(s)
              -
            </h3>
            <p>
              1. Purchase of a Subscription will allow you access only to the
              content available under the category of content for which you have
              purchased the Subscription.
            </p>
            <p>
              2. The Services offered, and the validity/term of your
              Subscription (“Subscription Period”)may vary depending on the plan
              you may purchase. Hence, before you proceed to purchase any
              Subscription, please read and understand the details of the
              Subscription(s) you intend to purchase on the Platform. If you are
              unclear about any part of the Subscription offering or need
              further clarification, then please feel free to write to us prior
              to your purchase at email address provided in the ‘Contact for
              User Support/Queries’ section below.
            </p>
            <p>
              3. We may personalize Services and feature them as part of
              Subscriptions, including showing you recommendations on content in
              the subscribed category, and other related categories that might
              be of interest to you. We also endeavour to continuously improve
              the Subscription offerings to improve your Platform experience.
            </p>
            <p>
              4. Subscription Period may be extended upon renewal of your
              already purchased Subscription. The terms of renewal, if any, can
              be found on our site and/or Application. However, please note that
              the prices may stand revised from the time of your first purchase
              of the Subscription.
            </p>
            <p>
              5. The Subscription is of a personal nature and is solely for the
              benefit of the person subscribing and is not allowed to be resold
              by you or transferred to or shared with any other person for
              consideration or otherwise. In the event we get to know that any
              User has resold / transferred / shared Subscription with another
              person, then EduMetrix retains the right to cancel/terminate the
              Subscription forthwith.
            </p>
            <p>
              6. Due to the limitations, if any, imposed on us by our Content
              Providers (who own the Content Provider Content), the Content
              Provider Content we make available to you under any Subscription
              offering are subject to restrictions on viewing access and on the
              length of time we make them available to you. These restrictions
              may change over time as we add new features, devices and content
              to our Subscription Service. Illustratively, following are some of
              the restrictions that are applicable to your access to the content
              (made available through Subscription Service or otherwise):
            </p>
          </div>
          <ol>
            <li>
              a. Live – Streaming of Content Provider Content/ Live Videos: You
              will get access to attend live videos (in other words, live-
              streamed content), if the same is offered as part of your
              purchased Subscription. The access shall be available to you
              through the Platform during the Subscription Period and shall be
              subject to the Platform Terms including the Live Videos Terms and
              Conditions Please be sure to use a Supported/Compatible device
              (refer to the ‘Right to Access and Account Creation’ section
              above) while accessing the live videos.
            </li>
            <li>
              b. Viewing Period: Depending on the Subscription, we may make
              available the recorded versions of any relevant live video to you
              for continued viewing on the Platform (which may include in-app
              downloading as mentioned below) during your Subscription Period.
              Please note that availability of the recorded versions of any
              relevant live video content for your subsequent access on the
              Platform is subject to our agreements with the Content Providers,
              and we do not in any manner guarantee the availability of the same
              for any reason whatsoever.
              <ul>
                <li>
                  c. In-App Downloading: Depending upon your Subscription, you
                  may only have an option to do in-app downloads and the
                  downloaded content can be viewed by you during the
                  Subscription Period. After downloading the Content Provider
                  Content, you shall have access to the same for the
                  Subscription Period only and all access to the downloaded
                  content shall be removed on expiry or termination of your
                  Subscription, as the case maybe.
                </li>
                <li>
                  d. Quality of Streaming: The resolution and quality of the
                  content you receive will depend on a number of factors,
                  including the type of Compatible Device on which you are
                  accessing the Content Provider Content and your bandwidth,
                  which may increase or decrease over the course of your
                  viewing. While we strive to provide you a high-quality viewing
                  experience, we make no guarantee as to the resolution or
                  quality of the content you will see when streaming.
                </li>
              </ul>
            </li>
          </ol>
          <div className="paragraph-article">
            <p>
              7. Depending on the Subscription Service you have purchased, you
              may be given access to certain additional Services and features.
              The additional terms applicable to each of these additional
              Services may be made available to you on the Platform in the form
              of terms and conditions or FAQs (Frequently Asked Questions) for
              that specific Service or may be otherwise communicated to you.
              Hence, please be sure to go through the Platform Terms to
              understand the additional services, if any made available to you,
              and how you can avail the same.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
