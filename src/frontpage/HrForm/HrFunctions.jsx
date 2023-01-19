import React from "react";
import "./HrFunctions.css";

const HrFunctions = () => {
  return (
    <div className="HrFunctions-conatiner">
      <div className="HrSub-1">
        <div className="hr-function-title">Who we are!</div>
        <div className="hr-function-paragraph">
          EduMetrix Learning Solutions Pvt Ltd is a Edu-Tech and dynamic human
          resource consulting firm catering to recruitment needs of the
          corporate world. We, at EduMetrix, screen candidates based on their
          degree and skill set, and conduct lively classes on Full stack
          JavaScript Developer, which helps to simplify your hiring process. We
          also provide superior hands on practice with the ability to deliver
          desired results that has always helped them to stay focused. We have a
          team of dedicated and professional HR consultants who will guide you
          through the hiring process from the scratch. Whether it is an MNC, a
          Startup or a Medium-sized organization, we have tailor-made packages
          catering to all your requirements.
        </div>
      </div>

      <div className="HrCard-section">
        <div className="hr-function-title">What we do!</div>
        <div className="hrfuncion-cards">
          <div className="hrCards">
            <div className="hrcard-title">RPO Services:</div>
            <div color="hrCard-paragraph">
              Recruitment Process Outsourcing (RPO) is a form of business
              process outsourcing (BPO) where an employer transfers all or part
              of its recruitment processes to an external service provider
            </div>
          </div>
          <div style={{ height: "100%" }} className="hrCards">
            <div className="hrcard-title">Career Coaching:</div>
            <div color="hrCard-paragraph">
              We provide career tutorship to the professionals who are lagging
              in any particular skills. IT industry is booming. So is the demand
              for experienced IT professionals who have the right technical
              skills to work with global giants worldwide. We help professionals
              to shape their career graph and ensure them in building a
              promising career in there IT industry. We also help them to gain
              knowledge on career clarity, career growth and career transition
            </div>
          </div>
          <div className="hrCards">
            <div className="hrcard-title">Training&skills development:</div>
            <div color="hrCard-paragraph">
              We don't teach candidates as a student, in-fact we are taking them
              as our interns and make them work on real project guiding
              candidates in front end, backend, server technologies and train
              them as a full stack developer which a hiring company look for in
              their ideal candidate. We provide them a real project tasks and
              our FullStack Engineers Assist candidates to finish their tasks
              and make them grab more knowledge in real projects and help them
              grow in their problem solving skills.
            </div>
          </div>
          <div className="hrCards">
            <div className="hrcard-title">Disciplinary issues:</div>
            <div color="hrCard-paragraph">
              We will handle all your disciplinary concerns and represent the
              company at labor for peace work culture.
            </div>
          </div>
          <div className="hrCards">
            <div className="hrcard-title">Regulatory Compliance:</div>
            <div color="hrCard-paragraph">
              We work with management to ensure your company is fully compliant
              with all relevant regulations such as, Employment Act, Employment
              policies, Workers’ Compensation Act etc…
            </div>
          </div>
        </div>
      </div>

      <div className="hrSub-3">
        <div className="hr-function-title">Why Us!</div>
        <ol className="hr-function-paragraph">
          <li>
            “The art of HR Solution is to blend our experience, database,
            knowledge, people, culture, and market trend to provide the best
            candidate who fit in the organization.”
          </li>
          <li>
            WE ARE NOT A TRAINING INSTITUTE TO START BATCH-WISE, WE ARE AN IT
            FIRM, we make them work on real projects guiding them in front end,
            back end, server technologies and train them as a full stack
            developer and also help them in making own projects.
          </li>

          <li>
            Candidates who gets trained in our firm will be expertise on coding
            related to Front end (HTML, CSS, JavaScript, React and React
            Native), Back end (Node, JavaScript and My SQL/MongoDB), Server end
            (Azure/Github).
          </li>

          <li>
            We will be with you from the beginning until the end of the hiring
            process.
          </li>
          <li>
            We provide easy-to-understand yet professional communication. Our
            emotive effort is to bridge the gap between job seekers and job
            providers .
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HrFunctions;
