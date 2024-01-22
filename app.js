const qrtext = document.querySelector("#qr-text");
const down = document.querySelector("#down");
const gen = document.querySelector("#gen");
const size = document.querySelector("#sizes");
const qrcontainer = document.querySelector(".qr-body");
function len() {
  if (qrtext.value.length > 0) {
    generateQrCode();
  } else {
    alert("Type your text or URL");
  }
}
let sizes = size.value;
gen.addEventListener("click", function (e) {
  e.preventDefault();
  len();
});
size.addEventListener("change", function (e) {
  sizes = e.target.value;
  len();
});
function generateQrCode() {
  qrcontainer.innerHTML = "";
  new QRCode(qrcontainer, {
    text: qrtext.value,
    width: sizes,
    height: sizes,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
}
down.addEventListener("click", function () {
  let img = document.querySelector(".qr-body img");
  if (img !== null) {
    let imgAttr = img.getAttribute("src");
    down.setAttribute("href", imgAttr);
  } else {
    down.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});
