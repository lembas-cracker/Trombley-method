export function hoverHandleOver(hoverHandleValue) {
  const elementList = document.querySelectorAll(
    "[hoverHandle=" + hoverHandleValue + "]"
  );
  elementList.forEach(element => {
    if (element.closest("svg")) {
      element.setAttribute("initialColor", element.style.fill);
      element.style.fill = "orange";
    } else {
      element.setAttribute("initialColor", element.style.backgroundColor);
      element.style.backgroundColor = "orange";
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
      element.style.backgroundColor = element.getAttribute("initialColor");
    }
  });
}
