const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = "./images/favicon/favicon-dark.svg";
  else faviconTag.href = "./images/favicon/favicon-light.svg";
};

changeFavicon();

setInterval(changeFavicon, 1000);