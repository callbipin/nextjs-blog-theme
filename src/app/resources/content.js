import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Bipin",
  lastName: "Rimal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Customer Success and Growth Manager",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kathmandu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nepali"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/BipinRimal314",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bipinrimal314/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Lamir314",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:bipinrimal314@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Customer Success & Growth | Aspiring AI Product Manager</>,
  subline: (
    <>
      I'm Bipin, a Customer Success and Growth Manager at EkLine.io.
      <br />
      I bridge the gap between complex AI technologies and user needs, combining technical expertise with customer-centric product strategies.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/bipin-rimal-q4fzar/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I work at the intersection of customers, product, and engineering to define problems, shape solutions, and drive adoption of complex technical systems. With a background in technical documentation, data science, and security products, I specialize in translating user pain points into actionable product requirements, success metrics, and scalable workflows.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "EkLine.io",
        timeframe: "Oct 2025 - Present",
        role: "Customer Success and Growth Manager",
        achievements: [
          <>
            Led customer success strategy by analyzing usage patterns, support tickets, and qualitative feedback to identify product gaps and growth opportunities.
          </>,
          <>
            Acted as the primary interface between customers, product, and engineering to translate real-world user problems into feature requirements and prioritization inputs.
          </>,
          <>
            Defined customer success metrics and feedback loops to inform product iteration and retention strategies.
          </>,
          <>Contributed to growth initiatives by identifying friction points in onboarding and activation workflows.
          </>

        ],
        images: [],
      },
      {
        company: "EkLine.io",
        timeframe: "April 2025 - Oct 2025",
        role: "Consultant",
        achievements: [
          <>
            Conducted discovery across customer workflows to identify scalability and adoption challenges.
          </>,
          <>
            Advised on product positioning and early growth strategy based on customer behavior and competitive analysis.
          </>,
          <>

            Helped establish foundational processes for customer feedback collection and product iteration.
          </>,
        ],
        images: [],
      },
      {
        company: "Logpoint",
        timeframe: "Feb 2023 - Oct 2025",
        role: "Technical Writer",
        achievements: [
          <>
            Addressed technical inquiries of customers via Zendesk, providing
            timely and effective customer support.
          </>,
          <>
            Collaborated with the Product team (Product Owners, Engineering
            Managers, Developers, and QA) to understand new features and develop
            comprehensive documentation.
          </>,
          <>
            Added correct technical details about enhancements, bug fixes, and
            vulnerability fixes in the release notes.
          </>,
          <>
            Collaborated with the SecOps team to create Product Vulnerability
            Reports and Security Testing Guides, ensuring product compliance
            with customer requirements.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display image
        ],
      },
      {
        company: "ComplianceQuest",
        timeframe: " Feb 2022 - Jan 2023",
        role: "Technical Writer",
        achievements: [
          <>
            Authored Installation Qualification and Operational Qualification
            documentation for Salesforce CRM products, ensuring compliance with
            industry standards.
          </>,
          <>
            Performed regression testing, achieving a 100% success of test
            cases, demonstrating meticulous attention to detail and a commitment
            to delivering high-quality products.
          </>,
        ],
        images: [],
      },
      {
        company: "Weesho Lapara",
        timeframe: " Jan 2020 - Feb 2022",
        role: "Technical Writer",
        achievements: [
          <>
            Provided technical support to customers via Zoom, email, and live
            chat, demonstrating strong communication skills and a
            customer-centric approach.
          </>,
          <>
            Onboarded four new clients, creating comprehensive documentation
            tailored to their needs, showcasing an ability to understand and
            meet customer requirements.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Coventry Unversity",
        description: <>MSc Data Science and Computational Intelligence</>,
      },
      {
        name: "Thames International College",
        description: <>Bachelors in Information Management.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Product & Technical Skills",
        description: (
          <>
            Product Management:
            <ul>
              <li>Product Strategy & Roadmap</li>
              <li>User Research & Discovery</li>
              <li>Data Analysis & Metrics</li>
              <li>Agile & Scrum Methodologies</li>
            </ul>
            Technical Proficiency:
            <ul>
              <li>Programming: Python (Data Science), Node.js</li>
              <li>Concepts: Machine Learning, REST APIs, OOP</li>
              <li>Tools: Jira, Confluence, Git, SIEM/SOAR</li>
            </ul>
            <p>
              More skills are showcased in{" "}
              <a href="https://www.salesforce.com/trailblazer/bipinrimal">
                Trailblazer
              </a>
              .
            </p>
          </>
        ),
        images: [],
      },
      {
        title: "Soft Skills",
        description: (
          <>
            Certified in:
            <ul>
              <li>Customer Service Training</li>
              <li>Business Writing</li>
              <p>
                View certification at{" "}
                <a href="https://www.linkedin.com/in/bipinrimal314/details/certifications/">
                  LinkedIn Profile
                </a>
                .
              </p>
            </ul>
            Achievements:
            <ul>
              <li>
                Placed second in the International Speech Contest 2023-2024,
                Area A4, District 41, Toastmasters International
              </li>
            </ul>
          </>
        ),
        images: [],
      },
    ],
  },
  openSource: {
    display: true,
    title: "Open Source Contributions",
    contributions: [
      {
        project: "Fern API Docs",
        description: "Enhanced documentation and navigation usability.",
        prs: [
          { url: "https://github.com/fern-api/docs/pull/397", label: "Add reference to Audiences for filtering API endpoints in API Reference docs" },
          { url: "https://github.com/fern-api/docs/pull/396", label: "Add example for tabs-placement: header with updated layout settings" },
        ],
      },
    ],
  },
};

// const blog = {
//   label: "Blog",
//   title: "1000 Words a day ...",
//   description: `Read what ${person.name} has been up to recently`,
//   // Create new blog posts by adding a new .mdx file to app/blog/posts
//   // All posts will be listed on the /blog route
// };

// export { person, social, home, about, blog };

export { person, social, home, about };
