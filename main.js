function main() {
  const datePickers = document.querySelectorAll(".date-picker");
  const dates = document.querySelectorAll(".dates");
  const timeline = document.querySelectorAll(".timeline")[0];
  //Make sure to validate that the first date is before the second date.
  datePickers.forEach(function (item, index) {
    item.addEventListener("input", function () {
      dates[index].innerHTML = item.value;
    });
  });
  timeline.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    if (e.clientX < rect.left + rect.width / 1.025) {
      timeline.style.borderRight = `${Math.abs(
        (e.clientX - rect.left) / 50
      ).toFixed(0)}px solid black`;
    }
    if (e.clientX < rect.right - rect.width / 3) {
      timeline.style.borderLeft = `${Math.abs(
        (rect.right - e.clientX) / 50
      ).toFixed(0)}px solid black`;
    }
    if (e.clientY > rect.top) {
      timeline.style.borderBottom = `${Math.abs(
        (e.clientY - rect.top) / 20
      ).toFixed(0)}px solid black`;
    }
    if (e.clientY < rect.bottom) {
      timeline.style.borderTop = `${Math.abs(
        (rect.bottom - e.clientY) / 20
      ).toFixed(0)}px solid black`;
    }
  });
}
main();
