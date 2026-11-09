const APP_IMG = "https://www.tactyqal.com/application/assets/img/apps";
const BLOG_IMG = "https://www.tactyqal.com/application/assets/images";

export const site = {
  name: "Tactyqal Labs",
  tagline:
    "Empower Your Kid To Build The Next App That Impacts Millions, in 8 Weeks",
  description:
    "1:1 mentoring that takes teens from idea to a full-stack app in 8 weeks — no coding required.",
};

export const navItems = [
  { id: "program", label: "Program", href: "#program" },
  { id: "stories", label: "Stories", href: "#stories" },
  { id: "tools", label: "Tools", href: "#tools" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
  { id: "faq", label: "FAQ", href: "#faq" },
] as const;

export const hero = {
  videoSrc: "/videos/kid_impact.mp4",
  headline: site.tagline,
  bullets: [
    "1:1 Mentoring",
    "Idea To Full-Stack App",
    "No Coding",
    "Admissions To The Best Colleges",
    "Grants",
    "Media Coverage",
  ],
  stats: [
    { value: "100+", label: "Students Mentored" },
    { value: "Top University", label: "Admissions" },
    { value: "₹Thousands", label: "of People Impacted" },
  ],
};

export const pricing = {
  original: "₹25,000",
  current: "₹16,000",
  badgeLimited: "Limited Time Offer",
  badgeGuaranteed: "Results Guaranteed",
  moneyBack: "Results guaranteed or money back",
  spots: "Limited time offer - Only 15 spots available for the month",
  heading: "Start Your Teen's Entrepreneurial Journey",
  features: [
    "8 weeks of 1:1 mentoring",
    "Full-stack app development",
    "Product Hunt launch",
    "Pitch deck creation",
    "Marketing strategy",
    "Ongoing support",
  ],
};

export const storiesHeading = "Real Students. Real Apps. Real Success.";

export const stories = [
  {
    id: "krishidrishti",
    name: "KrishiDrishti",
    description:
      "AI-powered soil analysis & crop recommendation app that can impact millions of local farmers in India.",
    images: [
      `${APP_IMG}/krishidrishti1.png`,
      `${APP_IMG}/krishidrishti2.png`,
      `${APP_IMG}/krishidrishti3.png`,
    ],
  },
  {
    id: "elenor",
    name: "Elenor Vegan Handbags",
    description:
      "Corporate gifting platform that sells vegan handbags, started by a 16 year old and generated INR 9,000 in the first week.",
    images: [
      `${APP_IMG}/elenor1.png`,
      `${APP_IMG}/elenor2.png`,
      `${APP_IMG}/elenor3.png`,
    ],
  },
  {
    id: "olc",
    name: "One Last Chapter",
    description:
      "Book subscription service for kids. Started by a 13-year old and is generating INR 100,000 month revenue.",
    images: [`${APP_IMG}/olc1.png`, `${APP_IMG}/olc2.png`, `${APP_IMG}/olc3.png`],
  },
  {
    id: "paws",
    name: "Paws of Promise",
    description:
      "App for virtual pet adoption that connects pet lovers with pets from shelters.",
    images: [`${APP_IMG}/pop1.png`, `${APP_IMG}/pop2.png`],
  },
  {
    id: "audionova",
    name: "AudioNova",
    description: "AI music/video production company",
    images: [
      `${APP_IMG}/audionova1.png`,
      `${APP_IMG}/audionova2.png`,
      `${APP_IMG}/audionova3.png`,
    ],
  },
  {
    id: "converza",
    name: "Converza - Spanish Learning App",
    description:
      "Language learning app featuring Luna the friendly AI language learning bot",
    images: [
      `${APP_IMG}/converza1.png`,
      `${APP_IMG}/converza2.png`,
      `${APP_IMG}/converza3.png`,
    ],
  },
];

export const program = {
  heading: "From Idea to Full App in 8 Weeks",
  weeks: [
    { id: "w12", label: "Week 1-2", title: "Ideation & Market Research" },
    { id: "w34", label: "Week 3-4", title: "Design & Prototyping" },
    { id: "w56", label: "Week 5-6", title: "Full-Stack Development" },
    { id: "w78", label: "Week 7-8", title: "Launch & Marketing" },
  ],
  quote:
    "Learn to sell. Learn to build. If you can do both, you will be unstoppable.",
  quoteAuthor: "Naval Ravikant",
  sessions: "Personal 1:1 Live Sessions • 1 Hour Each • Expert Guidance",
  outcomes:
    "University admissions, revenue generation, international recognition, grants",
  cta: "Start Your Journey Today",
};

export const whyUs = {
  heading: "Why Parents Choose Tactyqal Labs",
  videoSrc: "/videos/continuous-support.mp4",
  items: [
    {
      icon: "GraduationCap" as const,
      title: "1:1 Personalized Mentoring",
      description:
        "Every student gets dedicated, expert guidance. No group classes.",
    },
    {
      icon: "Laptop" as const,
      title: "Full Stack App with No-Code",
      description: "Build real apps using modern no-code tools and platforms.",
    },
    {
      icon: "Trophy" as const,
      title: "Proven Track Record",
      description:
        "50+ successful students, real revenue, and top university admits.",
    },
    {
      icon: "Landmark" as const,
      title: "University Admission Edge",
      description:
        "Stand out in applications with real-world projects and achievements.",
    },
    {
      icon: "IndianRupee" as const,
      title: "Revenue Generation",
      description:
        "Students learn to build, launch, and monetize their own apps.",
    },
    {
      icon: "Infinity" as const,
      title: "Life Long Support",
      description:
        "From ideation to launch, students master the full journey.",
    },
    {
      icon: "Megaphone" as const,
      title: "Pitch & Presentation Skills",
      description: "Learn to pitch, present, and launch on Product Hunt.",
    },
  ],
};

export const founder = {
  heading: "Startup Ideas 101",
  description:
    "Learn how to identify and validate profitable startup ideas from our founder.",
  youtubeSrc: "https://www.youtube.com/embed/UyUH06CfLbk?start=105",
};

export const tools = {
  heading: "Free Tools to Get Started",
  subheading: "Explore our startup assessment tools used by 1000+ entrepreneurs",
  cta: "Access All Tools Free",
  allHref: "https://tactyqal.com/Tests",
  items: [
    {
      icon: "Lightbulb" as const,
      title: "Startup Idea Generator",
      href: "https://www.tactyqal.com/index.php/Questions/ideaDisplayer",
    },
    {
      icon: "TrendingUp" as const,
      title: "Fundability Assessment",
      href: "https://tactyqal.com/Tests/Fundable-Startup",
    },
    {
      icon: "Users" as const,
      title: "Team Evaluation Tool",
      href: "https://tactyqal.com/Tests/Startup-Team",
    },
    {
      icon: "FileText" as const,
      title: "Pitch Deck Analyzer",
      href: "https://www.tactyqal.com/Tests/Pitch-Deck",
    },
    {
      icon: "Search" as const,
      title: "Top 10 Traits For Business Success",
      href: "https://www.tactyqal.com/Tests/General-Success",
    },
    {
      icon: "Handshake" as const,
      title: "Cofounder Compatibility Test",
      href: "https://www.tactyqal.com/Tests/The-Right-Cofounder",
    },
    {
      icon: "Scale" as const,
      title: "Problem-Solution Fit",
      href: "https://www.tactyqal.com/Tests/Problem-Solution-Fit",
    },
    {
      icon: "Globe" as const,
      title: "Website Landing Page Assessment",
      href: "https://www.tactyqal.com/Tests/Landing-Page",
    },
  ],
};

export const testimonials = [
  {
    name: "Aarav Sharma",
    quote: "I had to struggle to find a tech cofounder",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Isha Patel",
    quote: "Now I feel independent and can build anything I want",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rohan Verma",
    quote: "It's the future",
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Simran Kaur",
    quote:
      "I can focus on the creative side and don't have to worry about whether it can be built",
    avatar: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    name: "Devansh Mehta",
    quote: "I went on from having no idea to launching my app",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Priya Nair",
    quote: "My impact app was only in my head till I built it",
    avatar: "https://randomuser.me/api/portraits/women/70.jpg",
  },
];

export const blog = {
  heading: "Learn from Industry Experts",
  cta: "Read All Articles",
  allHref: "https://tactyqal.com/blog",
  posts: [
    {
      title: "The elevator pitch for business entrepreneurs",
      excerpt:
        "An elevator pitch is the fastest way to describe what your startup...",
      author: "Tactyqal",
      readTime: "3 min read",
      date: "2024-05-01",
      href: "https://www.tactyqal.com/blog/elevator-pitch-with-examples-for-business-entrepreneurs/",
      image: `${BLOG_IMG}/blog-ele.png`,
    },
    {
      title: "How to build a tech startup team?",
      excerpt:
        "In the early days, the fewer employees, the better. Managing people takes up a lot of time...",
      author: "Tactyqal",
      readTime: "4 min read",
      date: "2024-04-20",
      href: "https://www.tactyqal.com/blog/how-to-build-a-tech-startup-team-2/",
      image: `${BLOG_IMG}/blog-startup.png`,
    },
    {
      title: "11 reasons why startups fail at the idea stage",
      excerpt:
        "The default state of a startup is failure and there are many...",
      author: "Tactyqal",
      readTime: "3 min read",
      date: "2024-04-10",
      href: "https://www.tactyqal.com/blog/11-reasons-why-startups-fail-at-idea-stage/",
      image: `${BLOG_IMG}/blog-fail.png`,
    },
    {
      title: "50 No-code startup app ideas",
      excerpt: "Find a list of 50 unique ideas you can explore for your startup...",
      author: "Tactyqal",
      readTime: "5 min read",
      date: "2025-07-09",
      href: "https://tactyqal.com/blog/50-no-code-startup-ideas-to-build-without-programming-skills/",
      image: `${BLOG_IMG}/50-No-Code-Startup-Ideas-You-Can-Build-Without-Programming-Skills.webp`,
    },
    {
      title: "30 Startup ideas to solve food waste problems",
      excerpt:
        "Food waste is a massive problem. Every year, we throw away one-third of all food...",
      author: "Tactyqal",
      readTime: "4 min read",
      date: "2024-03-15",
      href: "https://tactyqal.com/blog/30-startup-ideas-for-solving-food-waste-problems/",
      image: `${BLOG_IMG}/30-startup-ideas-for-food-waste-problems.jpg`,
    },
    {
      title: "50 Startup ideas for Gen-Z Entrepreneurs",
      excerpt:
        "Looking at the opportunities ahead, Generation Z entrepreneurs has advantages..",
      author: "Tactyqal",
      readTime: "6 min read",
      date: "2024-03-05",
      href: "https://tactyqal.com/blog/50-startup-ideas-for-generation-z-entrepreneurs/",
      image: `${BLOG_IMG}/50-Startup-Ideas-for-Generation-Z-Entrepreneurs.jpg`,
    },
  ],
};

export const faqs = [
  {
    question: "What if my teen has no coding experience?",
    answer:
      "No problem! Our program is designed for beginners. We use no-code tools and guide students step-by-step.",
  },
  {
    question: "How do you guarantee university admissions?",
    answer:
      "We help students build standout projects that strengthen their university applications.",
  },
  {
    question: "What kind of apps do students typically build?",
    answer:
      "Apps range from AI-powered tools, e-commerce platforms, subscription services, to social good projects. We help students pick ideas that excite them.",
  },
  {
    question: "How much time commitment is required?",
    answer:
      "About 2-3 hours per week, including 1 hour of live mentoring and independent work.",
  },
  {
    question: "What is the success rate?",
    answer: "100% of our students launch a working app and achieve their goals.",
  },
  {
    question: "Can my teen generate real revenue?",
    answer:
      "Yes! Many of our students have generated real revenue and even won grants & media coverage.",
  },
  {
    question: "What universities have your students gotten into?",
    answer:
      "Our alumni have been admitted to top universities in the US, UK, including Ivy League.",
  },
  {
    question: "What ongoing support do you provide?",
    answer:
      "We offer ongoing support, alumni community, and guidance even after the program ends.",
  },
];

export const contact = {
  heading: "Ready to Start Your Teen's Success Story?",
  title: "Contact Us",
  blurb:
    "Reach out to our dedicated team for any inquiries, assistance, or information you need.",
  email: "tactyqal.labs@gmail.com",
  phone: "+91-98047-72106",
  hours: "Mon-Sat, 9am-7pm",
  responseTime: "Response Time: Within 24 hours",
  calendarTitle: "Book a Free Appointment",
  calendarUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3JlaCrNitoPs8Bdr-FUP0cRfFI-MopSIH2azaPNDpRk56h6drYLbXSh-mDc9sfEZAQUKGdsUXs?gv=true",
};

export const cta = {
  book: "Book Free Consultation",
  enroll: "Enroll Now",
  learnMore: "Learn More",
};
