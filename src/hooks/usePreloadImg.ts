import aboutImg from "../assets/img/foto.webp";
import perfilImg from "../assets/img/perfil-cv.webp";
import projectImg1 from "../components/Main/sections/Projects/img/project-1.webp";
import projectImg2 from "../components/Main/sections/Projects/img/project-2.webp";
import projectImg3 from "../components/Main/sections/Projects/img/project-3.webp";

const imgList = [aboutImg, perfilImg, projectImg1, projectImg2, projectImg3];
// const cache = [];

export const usePreloadImg = () => {
  imgList.forEach(src => {
    const img = new Image();
    img.src = src;
    // cache.push(img);
  });
};