import type { Job } from "../types/job";

export const mockJobs: Job[] = [
  {
    id: 1,
    url: "https://example.com/job/1",
    title: "Senior Frontend Developer",
    companyName: "TechCorp",
    category: "Software Development",
    tags: ["React", "TypeScript", "Frontend"],
    jobType: "full_time",
    publicationDate: "2023-05-15T12:00:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$120,000 - $150,000",
    description: `<p>We are looking for a Senior Frontend Developer to join our team.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience with React</li>
        <li>Strong TypeScript skills</li>
        <li>Experience with state management libraries</li>
        <li>Understanding of web accessibility standards</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop new user-facing features</li>
        <li>Build reusable components and libraries for future use</li>
        <li>Optimize applications for maximum speed and scalability</li>
        <li>Collaborate with other team members and stakeholders</li>
      </ul>`,
  },
  {
    id: 2,
    url: "https://example.com/job/2",
    title: "Backend Engineer",
    companyName: "DataSystems",
    category: "Software Development",
    tags: ["Node.js", "Express", "MongoDB"],
    jobType: "full_time",
    publicationDate: "2023-05-14T10:30:00Z",
    candidateRequiredLocation: "Remote, US",
    salary: "$110,000 - $140,000",
    description: `<p>DataSystems is seeking a Backend Engineer to help build our data processing platform.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience with Node.js</li>
        <li>Experience with MongoDB or similar NoSQL databases</li>
        <li>Knowledge of RESTful API design</li>
        <li>Understanding of server-side templating languages</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Design and implement backend services</li>
        <li>Optimize application for high-scale performance</li>
        <li>Implement security and data protection measures</li>
        <li>Integrate with third-party services</li>
      </ul>`,
  },
  {
    id: 3,
    url: "https://example.com/job/3",
    title: "UX/UI Designer",
    companyName: "CreativeMinds",
    category: "Design",
    tags: ["Figma", "UI Design", "User Research"],
    jobType: "full_time",
    publicationDate: "2023-05-13T09:15:00Z",
    candidateRequiredLocation: "Remote, Europe",
    salary: "$90,000 - $120,000",
    description: `<p>Join our design team at CreativeMinds and help shape the future of our products.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in UX/UI design</li>
        <li>Proficiency with Figma or similar design tools</li>
        <li>Portfolio demonstrating strong design skills</li>
        <li>Experience conducting user research</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Create wireframes, prototypes, and high-fidelity designs</li>
        <li>Conduct user research and usability testing</li>
        <li>Collaborate with product managers and developers</li>
        <li>Maintain and evolve our design system</li>
      </ul>`,
  },
  {
    id: 4,
    url: "https://example.com/job/4",
    title: "DevOps Engineer",
    companyName: "CloudNative",
    category: "DevOps",
    tags: ["AWS", "Kubernetes", "CI/CD"],
    jobType: "full_time",
    publicationDate: "2023-05-12T14:45:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$130,000 - $160,000",
    description: `<p>CloudNative is looking for a DevOps Engineer to help us scale our infrastructure.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>4+ years of experience in DevOps or SRE roles</li>
        <li>Strong knowledge of AWS or similar cloud platforms</li>
        <li>Experience with Kubernetes and containerization</li>
        <li>Familiarity with CI/CD pipelines</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Design and implement cloud infrastructure</li>
        <li>Automate deployment processes</li>
        <li>Monitor system performance and reliability</li>
        <li>Troubleshoot and resolve infrastructure issues</li>
      </ul>`,
  },
  {
    id: 5,
    url: "https://example.com/job/5",
    title: "Product Manager",
    companyName: "InnovateTech",
    category: "Product",
    tags: ["Product Management", "Agile", "B2B"],
    jobType: "full_time",
    publicationDate: "2023-05-11T11:20:00Z",
    candidateRequiredLocation: "Remote, US",
    salary: "$125,000 - $155,000",
    description: `<p>InnovateTech is seeking a Product Manager to lead our B2B product development.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience in product management</li>
        <li>Experience with B2B SaaS products</li>
        <li>Strong understanding of Agile methodologies</li>
        <li>Excellent communication and leadership skills</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Define product vision and strategy</li>
        <li>Gather and prioritize product requirements</li>
        <li>Work closely with engineering, design, and marketing teams</li>
        <li>Analyze market trends and competitive landscape</li>
      </ul>`,
  },
  {
    id: 6,
    url: "https://example.com/job/6",
    title: "Data Scientist",
    companyName: "AnalyticsPro",
    category: "Data Science",
    tags: ["Python", "Machine Learning", "SQL"],
    jobType: "full_time",
    publicationDate: "2023-05-10T13:10:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$115,000 - $145,000",
    description: `<p>AnalyticsPro is looking for a Data Scientist to help us extract insights from our data.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in data science or related field</li>
        <li>Strong programming skills in Python</li>
        <li>Experience with machine learning frameworks</li>
        <li>Proficiency in SQL and data manipulation</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop and implement machine learning models</li>
        <li>Analyze large datasets to extract insights</li>
        <li>Create data visualizations and reports</li>
        <li>Collaborate with product and engineering teams</li>
      </ul>`,
  },
  {
    id: 7,
    url: "https://example.com/job/7",
    title: "Technical Writer",
    companyName: "DocuTech",
    category: "Content",
    tags: ["Documentation", "Technical Writing", "API"],
    jobType: "full_time",
    publicationDate: "2023-05-09T09:30:00Z",
    candidateRequiredLocation: "Remote, Europe",
    salary: "$80,000 - $100,000",
    description: `<p>DocuTech is seeking a Technical Writer to create clear and concise documentation for our products.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>2+ years of experience in technical writing</li>
        <li>Ability to understand complex technical concepts</li>
        <li>Experience documenting APIs and software products</li>
        <li>Excellent writing and editing skills</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Create and maintain product documentation</li>
        <li>Write API documentation and guides</li>
        <li>Collaborate with developers and product managers</li>
        <li>Ensure documentation is accurate and up-to-date</li>
      </ul>`,
  },
  {
    id: 8,
    url: "https://example.com/job/8",
    title: "QA Engineer",
    companyName: "QualitySoft",
    category: "Quality Assurance",
    tags: ["Testing", "Automation", "Selenium"],
    jobType: "full_time",
    publicationDate: "2023-05-08T15:45:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$90,000 - $120,000",
    description: `<p>QualitySoft is looking for a QA Engineer to ensure the quality of our software products.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in software testing</li>
        <li>Experience with test automation frameworks</li>
        <li>Knowledge of testing methodologies</li>
        <li>Attention to detail and problem-solving skills</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop and execute test plans</li>
        <li>Create and maintain automated tests</li>
        <li>Report and track bugs</li>
        <li>Collaborate with developers to resolve issues</li>
      </ul>`,
  },
  {
    id: 9,
    url: "https://example.com/job/9",
    title: "Full Stack Developer",
    companyName: "FullStackLabs",
    category: "Software Development",
    tags: ["React", "Node.js", "MongoDB"],
    jobType: "full_time",
    publicationDate: "2023-05-07T10:15:00Z",
    candidateRequiredLocation: "Remote, US",
    salary: "$100,000 - $140,000",
    description: `<p>FullStackLabs is seeking a Full Stack Developer to work on our web applications.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>4+ years of experience in full stack development</li>
        <li>Proficiency with React and Node.js</li>
        <li>Experience with MongoDB or similar databases</li>
        <li>Understanding of RESTful API design</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop both frontend and backend components</li>
        <li>Implement responsive designs</li>
        <li>Optimize applications for performance</li>
        <li>Collaborate with cross-functional teams</li>
      </ul>`,
  },
  {
    id: 10,
    url: "https://example.com/job/10",
    title: "Mobile Developer",
    companyName: "AppWorks",
    category: "Mobile Development",
    tags: ["React Native", "iOS", "Android"],
    jobType: "full_time",
    publicationDate: "2023-05-06T12:30:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$110,000 - $140,000",
    description: `<p>AppWorks is looking for a Mobile Developer to help us build cross-platform mobile applications.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in mobile development</li>
        <li>Proficiency with React Native</li>
        <li>Experience with iOS and Android development</li>
        <li>Understanding of mobile UI/UX principles</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop cross-platform mobile applications</li>
        <li>Implement responsive and intuitive user interfaces</li>
        <li>Optimize applications for performance</li>
        <li>Collaborate with designers and backend developers</li>
      </ul>`,
  },
  {
    id: 11,
    url: "https://example.com/job/11",
    title: "Security Engineer",
    companyName: "SecureNet",
    category: "Security",
    tags: ["Cybersecurity", "Penetration Testing", "Security Audits"],
    jobType: "full_time",
    publicationDate: "2023-05-05T14:20:00Z",
    candidateRequiredLocation: "Remote, US",
    salary: "$130,000 - $160,000",
    description: `<p>SecureNet is seeking a Security Engineer to help protect our systems and data.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience in cybersecurity</li>
        <li>Experience with penetration testing and security audits</li>
        <li>Knowledge of security best practices</li>
        <li>Relevant security certifications (e.g., CISSP, CEH)</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Conduct security assessments and audits</li>
        <li>Implement security measures and controls</li>
        <li>Monitor systems for security breaches</li>
        <li>Develop security policies and procedures</li>
      </ul>`,
  },
  {
    id: 12,
    url: "https://example.com/job/12",
    title: "Project Manager",
    companyName: "ProjectPro",
    category: "Project Management",
    tags: ["Agile", "Scrum", "Project Planning"],
    jobType: "full_time",
    publicationDate: "2023-05-04T09:45:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$100,000 - $130,000",
    description: `<p>ProjectPro is looking for a Project Manager to lead our software development projects.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>4+ years of experience in project management</li>
        <li>Experience with Agile methodologies</li>
        <li>Strong leadership and communication skills</li>
        <li>PMP or Scrum Master certification preferred</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Plan and execute projects from start to finish</li>
        <li>Manage project scope, timeline, and budget</li>
        <li>Coordinate cross-functional teams</li>
        <li>Report project status to stakeholders</li>
      </ul>`,
  },
  {
    id: 13,
    url: "https://example.com/job/13",
    title: "Content Marketing Manager",
    companyName: "ContentHub",
    category: "Marketing",
    tags: ["Content Strategy", "SEO", "Social Media"],
    jobType: "full_time",
    publicationDate: "2023-05-03T11:30:00Z",
    candidateRequiredLocation: "Remote, Europe",
    salary: "$85,000 - $110,000",
    description: `<p>ContentHub is seeking a Content Marketing Manager to develop and execute our content strategy.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in content marketing</li>
        <li>Strong writing and editing skills</li>
        <li>Knowledge of SEO best practices</li>
        <li>Experience with content management systems</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop and implement content marketing strategy</li>
        <li>Create and edit high-quality content</li>
        <li>Manage editorial calendar</li>
        <li>Analyze content performance and optimize accordingly</li>
      </ul>`,
  },
  {
    id: 14,
    url: "https://example.com/job/14",
    title: "Cloud Architect",
    companyName: "CloudSolutions",
    category: "DevOps",
    tags: ["AWS", "Azure", "Cloud Infrastructure"],
    jobType: "full_time",
    publicationDate: "2023-05-02T13:15:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$140,000 - $180,000",
    description: `<p>CloudSolutions is looking for a Cloud Architect to design and implement our cloud infrastructure.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>6+ years of experience in cloud architecture</li>
        <li>Deep knowledge of AWS or Azure services</li>
        <li>Experience with infrastructure as code</li>
        <li>Understanding of security and compliance requirements</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Design and implement cloud architecture</li>
        <li>Develop migration strategies</li>
        <li>Optimize cloud costs and performance</li>
        <li>Ensure security and compliance of cloud infrastructure</li>
      </ul>`,
  },
  {
    id: 15,
    url: "https://example.com/job/15",
    title: "Customer Success Manager",
    companyName: "SuccessTeam",
    category: "Customer Success",
    tags: ["Customer Relationship", "SaaS", "Onboarding"],
    jobType: "full_time",
    publicationDate: "2023-05-01T10:00:00Z",
    candidateRequiredLocation: "Remote, US",
    salary: "$90,000 - $120,000",
    description: `<p>SuccessTeam is seeking a Customer Success Manager to ensure our customers achieve their desired outcomes.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in customer success or account management</li>
        <li>Experience with SaaS products</li>
        <li>Strong communication and relationship-building skills</li>
        <li>Problem-solving and analytical abilities</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Manage customer relationships and ensure satisfaction</li>
        <li>Develop and execute customer onboarding plans</li>
        <li>Identify upsell and cross-sell opportunities</li>
        <li>Monitor customer health and address concerns proactively</li>
      </ul>`,
  },
  {
    id: 16,
    url: "https://example.com/job/16",
    title: "Machine Learning Engineer",
    companyName: "AIInnovate",
    category: "Data Science",
    tags: ["Machine Learning", "Python", "TensorFlow"],
    jobType: "full_time",
    publicationDate: "2023-04-30T14:30:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$130,000 - $170,000",
    description: `<p>AIInnovate is looking for a Machine Learning Engineer to develop and deploy ML models.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>4+ years of experience in machine learning</li>
        <li>Strong programming skills in Python</li>
        <li>Experience with TensorFlow, PyTorch, or similar frameworks</li>
        <li>Understanding of ML deployment and MLOps</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Design and implement machine learning models</li>
        <li>Deploy models to production environments</li>
        <li>Optimize model performance and efficiency</li>
        <li>Collaborate with data scientists and engineers</li>
      </ul>`,
  },
  {
    id: 17,
    url: "https://example.com/job/17",
    title: "Frontend Developer",
    companyName: "WebFront",
    category: "Software Development",
    tags: ["React", "JavaScript", "CSS"],
    jobType: "full_time",
    publicationDate: "2023-04-29T11:45:00Z",
    candidateRequiredLocation: "Remote, Europe",
    salary: "$80,000 - $110,000",
    description: `<p>WebFront is seeking a Frontend Developer to create responsive and interactive web applications.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in frontend development</li>
        <li>Proficiency with React and JavaScript</li>
        <li>Strong CSS and HTML skills</li>
        <li>Experience with responsive design</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop user interfaces using React</li>
        <li>Implement responsive designs</li>
        <li>Optimize applications for performance</li>
        <li>Collaborate with designers and backend developers</li>
      </ul>`,
  },
  {
    id: 18,
    url: "https://example.com/job/18",
    title: "Sales Development Representative",
    companyName: "SalesGrowth",
    category: "Sales",
    tags: ["B2B Sales", "Lead Generation", "Outbound"],
    jobType: "full_time",
    publicationDate: "2023-04-28T09:30:00Z",
    candidateRequiredLocation: "Remote, US",
    salary: "$60,000 - $80,000 + Commission",
    description: `<p>SalesGrowth is looking for a Sales Development Representative to generate leads and build our sales pipeline.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>1+ years of experience in sales or lead generation</li>
        <li>Strong communication and interpersonal skills</li>
        <li>Experience with CRM systems</li>
        <li>Self-motivated and results-driven attitude</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Generate leads through outbound prospecting</li>
        <li>Qualify leads and schedule meetings for account executives</li>
        <li>Maintain accurate records in CRM</li>
        <li>Achieve monthly and quarterly targets</li>
      </ul>`,
  },
  {
    id: 19,
    url: "https://example.com/job/19",
    title: "HR Manager",
    companyName: "PeopleFirst",
    category: "Human Resources",
    tags: ["Recruitment", "Employee Relations", "HR Policies"],
    jobType: "full_time",
    publicationDate: "2023-04-27T13:00:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$90,000 - $120,000",
    description: `<p>PeopleFirst is seeking an HR Manager to oversee our human resources functions.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience in HR management</li>
        <li>Knowledge of HR best practices and employment laws</li>
        <li>Experience with HRIS systems</li>
        <li>Strong interpersonal and communication skills</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Develop and implement HR policies and procedures</li>
        <li>Oversee recruitment and onboarding processes</li>
        <li>Manage employee relations and performance management</li>
        <li>Ensure compliance with employment laws and regulations</li>
      </ul>`,
  },
  {
    id: 20,
    url: "https://example.com/job/20",
    title: "Backend Developer",
    companyName: "ServerSide",
    category: "Software Development",
    tags: ["Python", "Django", "PostgreSQL"],
    jobType: "full_time",
    publicationDate: "2023-04-26T10:15:00Z",
    candidateRequiredLocation: "Remote",
    salary: "$100,000 - $130,000",
    description: `<p>ServerSide is looking for a Backend Developer to build and maintain our server-side applications.</p>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in backend development</li>
        <li>Proficiency with Python and Django</li>
        <li>Experience with PostgreSQL or similar databases</li>
        <li>Knowledge of RESTful API design</li>
      </ul>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Design and implement backend services</li>
        <li>Develop and maintain databases</li>
        <li>Optimize application performance</li>
        <li>Collaborate with frontend developers</li>
      </ul>`,
  },
]