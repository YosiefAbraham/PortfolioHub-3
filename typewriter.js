(function () {
  var el = document.querySelector("[data-typewriter]");
  if (!el) return;

  var text = (el.getAttribute("data-typewriter") || el.textContent || "").trim();
  if (!text) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    el.textContent = text;
    el.classList.add("is-typed");
    return;
  }

  var typeSpeed = 95;
  var deleteSpeed = 40;
  var holdMs = 4000;

  function typeIn(i) {
    el.classList.add("is-typing");
    el.classList.remove("is-typed");
    if (i < text.length) {
      el.textContent = text.slice(0, i + 1);
      window.setTimeout(function () {
        typeIn(i + 1);
      }, typeSpeed);
      return;
    }
    el.classList.remove("is-typing");
    el.classList.add("is-typed");
    window.setTimeout(deleteOut, holdMs);
  }

  function deleteOut() {
    el.classList.add("is-typing");
    el.classList.remove("is-typed");
    var next = el.textContent.slice(0, -1);
    el.textContent = next;
    if (next.length) {
      window.setTimeout(deleteOut, deleteSpeed);
      return;
    }
    window.setTimeout(function () {
      typeIn(0);
    }, typeSpeed);
  }

  el.textContent = "";
  typeIn(0);
})();
