import web from "../public/web.png";
import mob from "../public/mob.png";
import ui from "../public/ui.png";

export const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: [
       "🟢 HTML",
       "🟢 CSS",
       "🟢 Bootstrap",
       "🟢 Tailwind CSS",
       "🟢 Javascript ES6+",
       "🟢 React.js",
       "🟢 Next.js",
       "🟢 TypeScript",
       "🟢 RESTful APIs",
       "🟢 Git & Github"
     

    ],
  },
  {
    title: "Education",
    id: "education",
    content: [

      "Parnian webdesign school",
    ],
  },
  {
    title: "Certifications",
    id: "certifications",
    content: [
      "Parnian webdesign school",
      ,
    ],
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Building responsive and modern websites with clean and efficient code.",
    icon: web,
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Creating seamless mobile applications with React Native and Flutter.",
    icon: mob,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive user experiences with a focus on usability and aesthetics.",
    icon: ui,
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "SPOTIFY clone with js",
    description:
      "full responsive musicplayer with JavaScript and swiperjs library",
    image: "/1.png",
    tag: ["All", "js"],
    gitUrl: "https://github.com/mohammadrezaafroozi/spotify-clone",
    previewUrl: "https://mohammadrezaafroozi.github.io/spotify-clone/",
  },
  
  {
    id: 2,
    title: "responsive online shop with Taiwind CSS",
    description:
      "An online store responsive in mobile scope and desktop.",
    image: "/2.png",
    tag: ["All",],
    gitUrl: "https://github.com/mohammadrezaafroozi/tailwind-responsive?tab=readme-ov-file",
    previewUrl: "https://mohammadrezaafroozi.github.io/tailwind-responsive/",
  },
  {
    id: 3,
    title: "FLAPPY BIRD mini game with space button",
    description:
      "JavaScript mini game with record time and keyEvents",
    image: "/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mohammadrezaafroozi/FLAPPY-BIRD-MINI-GAME?tab=readme-ov-file",
    previewUrl: "https://mohammadrezaafroozi.github.io/FLAPPY-BIRD-MINI-GAME/",
  },
  {
    id: 4,
    title: "online shop with Next",
    description:
      "responsive online with Next.js and Tailwindcss",
    image: "/4.png",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: " persian Weather Application",
    description:
      "A weather app that provides real-time forecasts, temperature, and climate details for various locations.",
    image: "/6.png",
    tag: ["All", "js"],
    gitUrl: "https://github.com/mohammadrezaafroozi/weather-app-js?tab=readme-ov-file",
    previewUrl: "https://mohammadrezaafroozi.github.io/weather-app-js/",
  },
  {
    id: 6,
    title: "PARALLAX-FULL-RESPONSIVE-AI-WEBSITE",
    description:
      "full-responsive modern parallax web only with tailwind css and js.",
    image: "/5.png",
    tag: ["All", "js"],
    gitUrl: "https://github.com/mohammadrezaafroozi/PARALLAX-FULL-RESPONSIVE-AI-WEBSITE?tab=readme-ov-file",
    previewUrl: "https://parallax-full-responsive-ai-website.vercel.app/",
  },

  {
    id: 7,
    title: "persian X with Next js",
    description:
      "A social media platform X (twitter) that enables users to preview images, and go to profile section and writing modal with paralell routes.",
    image: "/7.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/mohammadrezaafroozi/persian-X-twitter-full-responsive",
    previewUrl: "https://persian-x-twitter-full-responsive-yois-r7en9evkp.vercel.app/",
  },

   {
    id: 8,
    title: "awwwards scroll js",
    description:
      "personal website with js and GSAP and swiper library",
    image: "/8.png",
    tag: ["All", "js"],
    gitUrl: "https://github.com/mohammadrezaafroozi/slidebar-parallax-js?tab=readme-ov-file",
    previewUrl: "https://mohammadrezaafroozi.github.io/slidebar-parallax-js/",
    
  },
   {
    id: 9,
    title: "CRUD with Next js",
    description:
      "create read update & delete with Nextjs and react hooks and styling by TailwindCSS",
    image: "/9.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/mohammadrezaafroozi/CRUD-APP-WITH-NEXT?tab=readme-ov-file",
    previewUrl: "https://crud-app-with-next.vercel.app/",
  },
];
