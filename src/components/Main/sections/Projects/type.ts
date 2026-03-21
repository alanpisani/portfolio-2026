interface techType{
    name: string;
    icon: string;
}

export type projectDataType = {
    name: string;
    simple_description: string;
    img: string;
    href: string;
    github_href: string;
    techs: techType[];
    descargable?: boolean;
}