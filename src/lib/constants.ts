import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "./icons";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const primaryFeatures = [
  {
    name: "Early access to new products.",
    description:
      "Stay ahead of the curve by accessing new products as they become available.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Exclusive access to upcoming features.",
    description:
      "Get access to our newest features before they're released to the public.",
    icon: LockClosedIcon,
  },
  {
    name: "Be part of our community.",
    description:
      " Get exclusive access to our community of customers & partners.",
    icon: ServerIcon,
  },
];
export const secondaryFeatures = [
  {
    name: "Developer API",
    description:
      "All projects come with a developer API that allows you to access your data in a secure manner.",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Authentication",
    description:
      "All projects come with a secure authentication system that allows you to manage your users.",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "Database",
    description:
      "All projects come with a database that allows you to store your data in a secure manner.",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export const people = [
  {
    name: "Streetbeefs Scrapyard",
    role: "Senior Developer",
    imageUrl:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1691381837/STREETBEEFS%20SCRAPYARD/scrapyardlogo_x4pegl.svg ",
    bio: "Streetbeefs Scrapyard is a fight organization that I designed & developed ",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Anuera",
    role: "Senior Developer",
    imageUrl:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1680855996/ANUERA/hand_green_icon_boquet_la4gtv.png",
    bio: "Anuera is a sustainable living company, whose application I designed & developed",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Plant Life",
    role: "Senior Developer",
    imageUrl:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1660758699/PlantLife/quiz/PlantLifeLogo-logo-white-bg_tnnxqr.svg",
    bio: "Plant Life is a quiz application that I designed & developed",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "JV Labs",
    role: "Owner & Senior Developer",
    imageUrl:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1682362542/JV-Labs/1_ekz3va.jpg",
    bio: "JV Labs is a web development company that I own & operate",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "WreckedUI",
    role: "Senior Developer",
    imageUrl:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1696799378/WreckedUI/1_h064lg.svg",
    bio: "WreckedUI is an open source project that I designed & developed",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "JVflow",
    role: "Senior Developer",
    imageUrl:
      "https://res.cloudinary.com/dpytkhyme/image/upload/v1696799644/JVflow/1_kaofbj.png",
    bio: "JVflow is an open source framework that I designed & developed",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export const tiers = [
  {
    name: "E-Commerce",
    id: "tier-freelancer",
    href: "/",
    price: [{ monthly: "$25", annually: "$250" }],
    description: "The essentials to provide your best work for customers.",
    features: [
      "Shopify integration",
      "Custom Headless Storefront",
      "Existing Storefront Integration/New Custom Storefront",
      "Custom Product Pages",
    ],
    mostPopular: false,

    cta: "Buy plan",
    icon: "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
  },
  {
    name: "SPA/MPA",
    id: "tier-startup",
    href: "/",
    price: [{ monthly: "$40", annually: "$400" }],
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "Maintenance",
      "Custom API",
      "Advanced analytics",
      "2-hour, dedicated support response time",
      "Marketing automations",
    ],
    mostPopular: true,

    cta: "Buy plan",
    icon: "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
  },
  {
    name: "CMS",
    id: "tier-enterprise",
    href: "/",
    price: [{ monthly: "$50", annually: "$500" }],
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Hosted Custom CMS",
      "Long-term support",
      "Custom reporting tools",
      "5-hour, dedicated support response time",
      "Custom integrations",
      "Dedicated account manager",
    ],
    mostPopular: false,

    cta: "Contact sales",
    icon: "https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg",
  },
];

export const topSrc = [
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1646886682/recruiter-card_tbnatw.png",
  "https://res.cloudinary.com/dpytkhyme/image/upload/v1643954107/joshua_vaughn_o8nklp.svg",
];
export const topPicks = [
  {
    name: "Recruiter",
    description: "I'm Ready to Work",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1684803126/Portfolio/Blue_Futurustic_Programmer_LinkedIn_Post_w5k8mb.png",
    imageAlt: "joshua vaughn portfolio",
    href: "/recruiter",
  },
  {
    name: "Freelance",
    description: "Let's build together!",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1684799178/Portfolio/1_iheznq.png",

    imageAlt: "contract me",
    href: "/contract",
  },
  {
    name: "Coming Soon!",
    description: "See What I'm Up To...",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1684799179/Portfolio/3_ardvkq.png",

    imageAlt: "shopify",
    href: "/future",
  },
];

export const TimeLineData = [
  {
    year: 2018,
    text: "January I began learning the basics of Web Development",
    id: 0,
    name: "Learning the basics",
    description: "Self Taught",
    src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1643982438/portfolio_project_thumbnails_u11j8x.png",
    alt: "January I began learning the basics of Web Development",
    href: "#",
  },
  { year: 2019, text: "Started Lambda School Bootcamp" },
  {
    year: 2020,
    text: "Improved my skills in React, Apollo, Next, Three.js & Node.js & Started Learning React Native with & without EXPO",
  },
  {
    year: 2021,
    text: "Learned Shopify Liquid, Polaris, GraphQL & UI/UX DESIGN",
  },
  {
    year: 2022,
    text: "I hope to further my skills & learn Python to code my first neural network",
  },
];

export const features = [
  {
    id: 0,
    name: "Microservices",
    description:
      "Headless services that can be deployed to any cloud provider. No need to worry about infrastructure, just deploy your services & let them do the rest.",
    icon: GlobeAltIcon,
  },
  {
    id: 1,
    name: "Next.js, TypeScript & Tailwindcss",
    description:
      "Secure, Scalable & Fast. Built with Next.js, TypeScript, & Tailwindcss. Production ready for production deployment.",
    icon: ScaleIcon,
  },
  {
    id: 2,
    name: "Design Tools",
    description:
      "Built with Sketch, Figma & Adobe XD. No need to worry about design. Just focus on building your app.",
    icon: LightningBoltIcon,
  },
  {
    id: 3,
    name: "Modern UX Principles & Architecture",
    description:
      "Using JAM Stack tooling. No need to worry about the details. Just focus on building your app.",
    icon: AnnotationIcon,
  },
];
