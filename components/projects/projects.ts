export interface IProject {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  projectContent: string;
  projectTitle: string;
  websiteURL: string;
  toolsUsed: string[]
}

export const projectsArray : IProject[] = [
  {
    imageSrc: "/images/projects/AlphaFisioterapia.png",
    imageWidth: 1920,
    imageHeight: 898,
    projectContent:
      "I created this website for a physical therapy clinic in Mexico. They wanted a website that could attract new customers and could show them what they do at the clinic. They wanted to gain trust to bring new customers in. To achieve that I created a clean design and made sure the website has good SEO.",
    projectTitle: "Alpha Fisioterapia",
    websiteURL: "https://alpha-fisioterapia.vercel.app/",
    toolsUsed: ["Next JS", "Styled Components", "Vercel"],
  },
  {
    imageSrc: "/images/projects/PricesComparison.png",
    imageWidth: 1920,
    imageHeight: 898,
    projectContent: "I created this website on the first hackathon I participated in. It was sponsored by Hashnode and Auth0 and I was able to choose any app I wanted to create as long as it used Auth0's API to authenticate users. The final result is a website that lets you compare prices between five stores.",
    projectTitle: "Compare Prices (Hackathon)",
    websiteURL: "https://compare-prices.vercel.app/",
    toolsUsed: [
      "React JS",
      "Styled Components",
      "Vercel",
      "Auth0 API",
    ],
  },
];
