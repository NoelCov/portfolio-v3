export interface IProject {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  projectContent: string;
  projectTitle: string;
  websiteURL: string;
  toolsUsed: string[]
}

export const projectsArray: IProject[] = [
  {
    imageSrc: "/images/projects/AlphaFisioterapia.png",
    imageWidth: 1920,
    imageHeight: 898,
    projectContent:
      "Developed and designed a user-friendly, clean, and intuitive website that effectively showcases the services of a physical therapy clinic, leading to increased visibility and client engagement. Prioritized SEO optimization in the website to attract new customers and enhance the clinic's online presence.",
    projectTitle: "Alpha Fisioterapia",
    websiteURL: "https://alpha-fisioterapia.vercel.app/",
    toolsUsed: ["Next JS", "Styled Components", "Vercel"],
  },
  {
    imageSrc: "/images/projects/PricesComparison.png",
    imageWidth: 1920,
    imageHeight: 898,
    projectContent: "Participated in a hackathon sponsored by Hashnode and Auth0, creating a price comparison website to showcase different prices from five different stores. Implemented user authentication functionality using Auth0's API, ensuring secure and reliable access for users.",
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
