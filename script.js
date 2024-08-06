function navFunction() {
    var x = document.getElementById("nav");
    if (x.className === "col") {
      x.className += " responsive";
    } else {
      x.className = "col";
    }
  }