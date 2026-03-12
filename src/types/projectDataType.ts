import type { techType } from "./techType";

export interface projectDataType{
    name: string;
    simple_description: string;
    img: string;
    href: string;
    github_href: string;
    techs: techType[];
    descargable?: boolean;
    inverted?: boolean;
}