document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const href = link.getAttribute("href");
    const isExternal = href.startsWith("http") && !href.includes(window.location.hostname);
    if (isExternal) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
