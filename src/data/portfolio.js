export const PROJECTS = [
  {
    name: "Apple Product Sales Dashboard",
    category: "Analytics",
    approach: "The dashboard pairs sales exploration with revenue forecasting. Pricing, discounts, and customer ratings are inputs to the regression and random forest models.",
    desc: "Interactive Apache Superset dashboard analyzing Apple product sales (2022-2024), with Linear Regression and Random Forest models to forecast revenue demand using pricing, discount, and customer rating features.",
    tags: ["Apache Superset", "Python", "SQL", "Scikit-Learn"],
    url: "https://github.com/isaac-rico/Analytics-Portfolio/tree/9d2d4b412fdc9d0182377b0567f6053c43f7eaff/Apple-Product-Analysis",
  },

  {
    name: "Olist E-Commerce Analysis",
    category: "Analytics",
    approach: "The pipeline uses dbt to transform marketplace data in Snowflake, then brings the results into Apache Superset for exploration.",
    desc: "End-to-end data analytics pipeline of data from the Olist Brazilian e-commerce platform (2017-2018) using dbt, Snowflake, and Apache Superset",
    tags: ["dbt", "Snowflake", "SQL", "Apache Superset", "Business Intelligence"],
    url: "https://github.com/isaac-rico/Analytics-Portfolio/tree/602d6f3a511b834cce194507352c14867a8e8115/E-Commerce%20Analysis",
  },
  {
    name: "Real-Time Trending Topic Detector for Wikipedia",
    category: "Data Engineering",
    approach: "Apache Kafka handles the stream, Python processes incoming events, and PostgreSQL and FastAPI make the results available to query.",
    desc: "Detects trending Wikipedia articles and topics in real time, using Apache Kafka, Python, PostgreSQL, and FastAPI.",
    tags: ["Apache Kafka", "Python", "PostgreSQL", "Data Streaming", "Real-Time Analytics", "FastAPI", "Docker", "Pydantic", "psycopg2"],
    url: "https://github.com/isaac-rico/Analytics-Portfolio/tree/7ed286f7dfcd5d7e0b5c0325c12467a6575c781a/Real-Time%20Trending%20Topic%20Detector",
  },
  {
    name: "MockingBird Robotic Hand",
    category: "Robotics",
    approach: "Computer vision estimates finger angles from hand gestures. Those angles travel over a socket connection to a Raspberry Pi that controls the servos.",
    desc: "Gesture-controlled robotic hand using a Raspberry Pi, PCA9685 servo controller, and real-time computer vision to replicate human hand movements via finger-angle socket transmission.",
    tags: ["Python", "MediaPipe", "OpenCV", "Raspberry Pi"],
    url: "https://github.com/isaac-rico/MockingBird",
  },
  {
    name: "FUSION Motion-Controlled Rover",
    category: "Robotics",
    approach: "Flex sensors and a gyroscope capture motion. An Arduino uses those readings to drive the rover.",
    desc: "Co-led a team of 8 to build a motion-controlled rover with embedded control systems, integrating flex sensors and a gyroscope with an Arduino for sensor-driven robotic movement.",
    tags: ["C/C++", "Arduino", "Embedded Systems", "Sensors"],
    url: "https://github.com/isaac-rico/Mano-Po-FEP-2024",
  },
];

export const SKILLS = [
  { category: "Programming", items: ["Python", "SQL", "C/C++"] },
  { category: "Data engineering", items: ["Apache Kafka", "dbt", "Snowflake", "BigQuery", "PostgreSQL", "FastAPI", "Docker"] },
  { category: "Analytics & reporting", items: ["Power BI", "Apache Superset", "Google Data Studio"] },
  { category: "Applied ML & computer vision", items: ["scikit-learn", "Natural language processing", "OpenCV", "MediaPipe"] },
  { category: "Embedded systems & robotics", items: ["Raspberry Pi", "Arduino", "Sensor integration", "Servo control"] },
];

export const EXPERIENCE = [
  {
    title: "Marketing Analyst",
    company: "TruAbutment Inc.",
    date: "Aug 2026 – Nov 2026 · Irvine, CA",
    desc: [
      "Automated daily attendee analysis and registration tracking with Google Apps Script and Python, reducing manual reporting and giving the team a daily view of participation.",
      "Built a BigQuery database that consolidated event records and gave the team a single source for reporting.",
      "Built a dashboard to track registrations and event details across 50+ company events, supporting planning and reporting.",
    ],
  },
  {
    title: "Reliability Data Analyst Intern",
    company: "BioMarin Pharmaceutical Inc.",
    date: "Jun 2025 – Sep 2025 · Novato, CA",
    desc: [
      "Built Power BI dashboards that combined maintenance and equipment data from the computerized maintenance management system (CMMS), giving leadership a real-time view of maintenance backlog, inventory health, and equipment performance. Reduced reporting time by 75%.",
      "Partnered with reliability engineers and maintenance teams to develop analytics that cut leadership analysis time by 50%.",
    ],
  },
  {
    title: "Inventory Data Analyst Intern",
    company: "BioMarin Pharmaceutical Inc.",
    date: "Jun 2024 – Sep 2024 · Novato, CA",
    desc: [
      "Built a risk-based inventory model using parts turnover data and Failure Modes and Effects Analysis (FMEA) to improve critical spare-parts forecasting and reduce excess inventory.",
      "Co-developed a natural language processing (NLP) prototype that used CMMS data to calculate system turn rates and Maintenance Repair Ratio (MRR), eliminating 25 hours of manual data entry per week.",
    ],
  },
  {
    title: "Product Management Intern",
    company: "Yuba Bicycles",
    date: "Aug 2023 – Mar 2024 · Remote",
    desc: [
      "Identified gaps in bicycle accessory compatibility data, gathered stakeholder feedback to define product requirements, and maintained CAD drawings, compatibility records, and technical specifications in the product database.",
      "Worked with manufacturing and quality assurance to build an accessory compatibility web app that cut customer service response time by 30%.",
    ],
  },
];

export const CONTACTS = [
  { label: "Email", value: "isaacarnell.rico@gmail.com", href: "mailto:isaacarnell.rico@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/isaac-rico", href: "https://linkedin.com/in/isaac-a-rico" },
  { label: "GitHub", value: "github.com/isaac-rico", href: "https://github.com/isaac-rico" },
  { label: "Location", value: "California, USA", href: null },
];
