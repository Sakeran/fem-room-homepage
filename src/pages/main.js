(() => {
  const body = document.querySelector("body.no-js");
  if (!body) return;

  body.classList.remove("no-js");
  body.classList.add("js");
})();
