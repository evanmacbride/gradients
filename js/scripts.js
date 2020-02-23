const colors = ["129,236,236","116,185,255","162,155,254",
  "223,230,233","255,234,167","253,121,168","243,166,131",
  "247,215,148","119,139,235","120,111,166","248,165,194",
  "99,205,218","205,132,241","255,204,204","255,175,64",
  "255,250,101","126,255,245","24,220,255"]

window.onload = ()=> {
  const modal = document.getElementById("modal");
  const body = document.querySelector("body");
  const veil = document.getElementById("veil");
  const closeModal = document.getElementById("closeModal");

  closeModal.addEventListener("click",()=> {
    modal.style.display = "none";
  });

  function setGradients(colorA) {
    // Pick colors and angles
    angleA = Math.floor(Math.random()*360);
    colorB = colors[Math.floor(Math.random()*colors.length)];
    angleB = Math.floor(Math.random()*360);
    console.log(colorA, colorB);
    // Apply the gradients
    body.style.backgroundImage = `
      linear-gradient(${angleA}deg, rgba(${colorA},0.0), rgba(${colorA},1.0)),
      linear-gradient(${angleB}deg,  rgba(${colorB},0.0), rgba(${colorB},1.0))
    `
    return colorB;
  }

  let step = 0.001;
  let opacity = 0.0 + step;
  let sign = 1;
  let savedColor = setGradients(colors[Math.floor(Math.random()*colors.length)]);
  veil.style.backgroundColor = `rgb(${savedColor})`;
  function fadeVeil() {
    // Veil is faded out. Its color can be set to a background gradient color.
    if (opacity <= 0.0) {
      veil.style.backgroundColor = `rgb(${savedColor})`;;
      sign = -sign;
    }
    // Veil is at peak opacity. Background gradients can be changed, but one
    // gradient color should match veil color.
    if (opacity >= 1.0) {
      savedColor = setGradients(savedColor);
      sign = -sign;
    }

    veil.style.opacity = opacity;
    requestAnimationFrame(fadeVeil);
    opacity += step * sign;
  }
  requestAnimationFrame(fadeVeil);
}
