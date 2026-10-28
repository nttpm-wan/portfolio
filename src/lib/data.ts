export type Project = {
  id: string;
  index: string; // display index, e.g. "01"
  title: string;
  year: string;
  role: string;
  description: string;
  contributions: string[];
  tags: string[];
  href: string;
  color: string; // accent used behind the thumbnail preview
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    fit?: "cover" | "contain";
  };
};

export const projects: Project[] = [
  {
    id: "fitai",
    index: "01",
    title: "FitAI — AI-powered fitness mobile app",
    year: "2026",
    role: "Coursework · Sripatum University",
    description:
      "A fitness mobile app using real-time camera-based pose detection to count repetitions and track exercise tempo.",
    contributions: [
      "Tested the WebSocket pipeline behind real-time pose detection, repetition counting, and exercise tempo.",
      "Collaborated through GitHub issues, version control, and code reviews.",
    ],
    tags: ["Camera AI", "WebSocket", "GitHub"],
    href: "https://github.com/nttpm-wan/FitAI-AI-Fitness-App",
    color: "#1f3a5f",
    image: {
      src: "/images/fitai-preview.png",
      alt: "FitAI mobile app screens showing activity tracking, workout planning, exercise guidance, progress, and nutrition",
      width: 994,
      height: 506,
      fit: "contain",
    },
  },
  {
    id: "wifi-mesh-mqtt",
    index: "02",
    title: "LoRa-based Off-Grid Mesh Network + MQTT — Off-grid rescue communication",
    year: "2025",
    role: "Coursework · Sripatum University",
    description:
      "A simulated off-grid LoRa mesh network dashboard showing node status and emergency messages relayed between nodes through an MQTT broker.",
    contributions: [
      "Built and tested the mesh communication core with the project team.",
      "Used GitHub for version control and an Agile workflow to coordinate development.",
    ],
    tags: ["LoRa", "MQTT", "Mesh networking", "SOS relay"],
    href: "https://github.com/nttpm-wan/LoRa-based-Off-Grid-Mesh-Network-",
    color: "#2b3b52",
    image: {
      src: "/images/lora-mesh-preview.png",
      alt: "LoRMesh dashboard showing three connected nodes, an off-grid network map, and SOS messages relayed between nodes",
      width: 1505,
      height: 1045,
    },
  },
  {
    id: "smart-plug-mqtt",
    index: "03",
    title: "Smart Plug + MQTT — energy monitor",
    year: "2024",
    role: "Coursework · Sripatum University",
    description:
      "A connected smart plug for controlling a device over MQTT and monitoring real-world energy usage.",
    contributions: [
      "Wrote the firmware that controls the smart plug over MQTT.",
      "Applied IoT concepts to support real-world energy monitoring.",
    ],
    tags: ["MQTT", "IoT", "Firmware"],
    href: "https://github.com/nttpm-wan/Smart-plug-MQTT-IOT-",
    color: "#34495e",
    image: {
      src: "/images/smart-plug-mqtt-preview.png",
      alt: "Smart Plug + MQTT illustration showing an ESP32 relay controlled from a Wi-Fi phone app in a connected home",
      width: 1254,
      height: 1254,
      fit: "contain",
    },
  },
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  detail: string;
  href: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: "cyber-guardians-2026",
    title: "Meet The Youth Cyber Guardians & White Hat Thailand 2026",
    issuer: "หน่วยบัญชาการไซเบอร์ทหาร กองบัญชาการกองทัพไทย",
    date: "Aug 2026",
    detail:
      "Certificate of participation from the Royal Thai Armed Forces Cyber Command for the Meet The Youth Cyber Guardians & White Hat Thailand 2026 event.",
    href: "/certificates/cyber-guardians-2026.png",
    image: "/certificates/cyber-guardians-2026.png",
  },
  {
    id: "huawei-cloud",
    title: "Cloud Infrastructure & Service",
    issuer: "Huawei-AIS Academy",
    date: "Apr 2026",
    detail:
      "Utilizing Huawei Cloud services — compute, network, and storage resource management, plus system security and stability.",
    href: "https://www.credly.com/badges/d04a0195-695a-4a46-a58c-1d6be2cc5f62",
    image: "/certificates/huawei-cloud.png",
  },
  {
    id: "aws-ml",
    title: "AWS Academy Graduate — Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "Jun 2026",
    detail: "20-hour training badge covering core machine learning foundations on AWS.",
    href: "https://www.credly.com/go/m4cCh0KG",
    image: "/certificates/aws-ml.png",
  },
  {
    id: "thaimooc-digital-teaching",
    title: "เทคโนโลยีเสริมการสอน ในยุค Digital",
    issuer: "Thai MOOC · ม.ศรีปทุม",
    date: "Nov 2023",
    detail: "หลักสูตรออนไลน์ 10 ชั่วโมงการเรียนรู้ พัฒนาโดยมหาวิทยาลัยศรีปทุม ผ่านแพลตฟอร์ม Thai MOOC.",
    href: "https://lms.thaimooc.org/certificates/f2cd0caf23da43668a5615727216c954",
    image: "/certificates/thaimooc-digital-teaching.png",
  },
];

export const site = {
  name: "Nathapoom",
  fullName: "Nathapoom Wangsatang",
  title: "Nathapoom Wangsatang — Computer Engineering Portfolio",
  description:
    "Computer Engineering student exploring full-stack development, quality assurance, IoT and embedded systems, and AI engineering. Open to internships in Bangkok, Thailand.",
  role: "Software developer & frontend engineer",
  headline: "Software developer & frontend engineer",
  tagline: "Bangkok, Thailand · Open to internships",
  location: "Bangkok, Thailand",
  email: "nathapoom.wan@gmail.com",
  github: "https://github.com/nttpm-wan",
  linkedin: "https://linkedin.com/in/nathapoom",
};

export const skills = [
  "C / C++",
  "Python",
  "JavaScript",
  "HTML / CSS",
  "React.js",
  "Node.js",
  "UX/UI Design",
  "MySQL",
  "Git / GitHub",
  "VS Code",
  "PCB Design",
  "Arduino",
];

export const skillGroups = [
  { title: "Programming languages", items: [
    { name: "C", icon: "c" }, { name: "C++", icon: "cplusplus" },
    { name: "Python", icon: "python" }, { name: "JavaScript", icon: "javascript" },
  ] },
  { title: "Web development", items: [
    { name: "HTML", icon: "html5" }, { name: "CSS", icon: "css3" },
    { name: "React.js", icon: "react" }, { name: "Node.js", icon: "nodejs" },
  ] },
  { title: "Database", items: [ { name: "MySQL", icon: "mysql" } ] },
  { title: "Tools & platforms", items: [
    { name: "Git", icon: "git" }, { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" }, { name: "PCB Design", icon: "pcb" },
    { name: "Arduino", icon: "arduino" }, { name: "UX/UI Design", icon: "ux-ui" },
  ] },
];

export type WorkExperience = {
  year: string;
  title: string;
  context: string;
  description: string;
};

// Only confirmed internship or employment history belongs here.
// The section and navigation item stay hidden while this list is empty.
export const experience: WorkExperience[] = [];
