function navFunction() {
    let x = document.getElementById("nav");
    if (x.className === "col") {
      x.className += " responsive";
    } else {
      x.className = "col";
    }
  }