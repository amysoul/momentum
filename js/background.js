function setBackground() {
  const images = ["bg0.jpg", "bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg"];
  const chosenImage = images[Math.floor(Math.random() * images.length)];

  document.body.style.backgroundImage = `url("img/${chosenImage}")`;
  //background-image: url("img/bg0.jpg");
}
setBackground();

