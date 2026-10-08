(() => {
  const toggles = () => document.querySelectorAll("[data-pop]");

  const panelFor = (button) => document.getElementById(button.getAttribute("data-pop"));

  const closeAll = () => {
    toggles().forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      const panel = panelFor(button);
      if (panel) panel.hidden = true;
    });
  };

  const open = (button) => {
    const panel = panelFor(button);
    if (!panel) return;
    closeAll();
    button.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  };

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pop]");
    if (button) {
      event.preventDefault();
      if (button.getAttribute("aria-expanded") === "true") closeAll();
      else open(button);
      return;
    }
    if (!event.target.closest(".pop")) closeAll();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAll();
  });
})();
