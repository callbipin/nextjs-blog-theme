import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Bipin",
  lastName: "Rimal",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Technical Writer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kathmandu", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nepali"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Have any questions?</>,
  description: (
    <>
      I am a person who loves communicating with people. If you have any
      querries, you can reach out to me through email.
    </>
  ),
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
  headline: <>Writer and Generalist</>,
  subline: (
    <>
      I'm Bipin, a writer, public speaker, and an overall generalist.
      <br />
      After hours, I make videos about communication, life, liberty, and the
      pursuit of sausages.
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Tech Support Specialist with 4+ years experience in Technical
        Troubleshooting and Documentation. <br />
        <br />
        As the bridge between Product and Customer, I create comprehensive
        guides that act as a roadmap customers can follow to reach their goals.
        My in-depth analysis of the customer feedback addresses the key pain
        points of the customers.
        <br />
        <br />
        Additionally, I am a huge fan of telling and listening to stories. In my
        free time, you will find me in Toastmasters around Kathmandu Valley,
        listening to people's stories and smiling. If you are ever so lucky, you
        may even get to see me get up on stage doing my best to make people
        laugh.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Logpoint",
        timeframe: "Feb 2023 - Present",
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
        timeframe: " Feb 2020 - Jan 2023",
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
        title: "Tools & Platforms",
        description: (
          <>
            Proficient in MadCap, Confluence, Jira, Zendesk, Slack, Git, SIEM,
            SOAR, and Salesforce. Knowledge of Programming languages (NodeJs,
            Python), programming concepts (RESTAPI, OOP). More skills present in
            <a href="https://www.salesforce.com/trailblazer/bipinrimal">
              Trailblazer
            </a>
            .
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Soft Skills",
        description: (
          <>
            <a href="https://www.goskills.com/Profile/BipinRimal">
              GoSkills certified
            </a>{" "}
            in Customer Service Training and Business Writing. Placed second in
            International Speech Contest 2023-2024, Area A4, District 41,
            Toastmasters Internation
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

export { person, social, newsletter, home, about, blog };
