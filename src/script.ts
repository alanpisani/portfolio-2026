
const theme: string = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", theme);
