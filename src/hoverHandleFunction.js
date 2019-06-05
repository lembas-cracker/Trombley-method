export function hoverHandleOver(hoverHandleValue) {
  const elementList = document.querySelectorAll(
    "[hoverHandle=" + hoverHandleValue + "]"
  );
  elementList.forEach(element => {
    if (element.closest("svg")) {
      element.setAttribute("initialColor", element.style.fill);
      element.style.fill = "orange";
      element.style.cursor = "pointer";
    } else {
      element.classList.add("highlighted");
    }
  });
}

export function hoverHandleOut(hoverHandleValue) {
  const elementList = document.querySelectorAll(
    "[hoverHandle=" + hoverHandleValue + "]"
  );
  elementList.forEach(element => {
    if (element.closest("svg")) {
      element.style.fill = element.getAttribute("initialColor");
    } else {
      element.classList.remove("highlighted");
    }
  });
}
