(function () {
  var yearNodes = document.querySelectorAll("[data-year]");
  if (!yearNodes.length) {
    return;
  }
  var year = new Date().getFullYear();
  yearNodes.forEach(function (node) {
    node.textContent = year;
  });
})();
