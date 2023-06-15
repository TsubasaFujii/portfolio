interface Link {
    name: string;
    route: string;
}

interface Introduction {
    subHeading: string;
    body: string[];
    keywords: string[];
}

interface Project {
    title: string;
    github: string;
    production: string;
    thumbnail: string,
    description: string;
    tools: IconName[];
    starred: boolean;
    createdAt: Date;
}

interface SocialMedia {
    name: IconName;
    url: string;
}