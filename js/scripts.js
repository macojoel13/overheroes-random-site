function randomNumberPicker() {
    var number = Math.floor((Math.random() * 7) + 1);
    return number;
  }

function randomHeroPicker(){
    var number = randomNumberPicker();
    switch (number) {
      case 1: document.getElementById("resultImg").src =
       "https://image.ibb.co/cBOnUm/Icon_Portrait_Genji.png";
      break;
      case 2: document.getElementById("resultImg").src =
       "https://image.ibb.co/mvJzaR/Icon_Portrait_Pharah.png";
      break;
      case 3: document.getElementById("resultImg").src =
       "https://image.ibb.co/i8sgpm/Icon_Portrait_Reaper.png";
      break;
      case 4: document.getElementById("resultImg").src =
       "https://image.ibb.co/ddcsvR/Icon_Portrait_Soldier76.png";
      break;
      case 5: document.getElementById("resultImg").src =
        "https://image.ibb.co/gG3Mpm/Icon_Portrait_Tracer.png";
      break;
      case 6: document.getElementById("resultImg").src =
        "https://image.ibb.co/fQvHUm/Icon_Portrait_Sombra.png";
      break;
      case 7: document.getElementById("resultImg").src =
        "https://image.ibb.co/gMFvFR/Icon_Portrait_Mccree.png";
      default:
      break;
    }

}

/*  function test() {

    document.getElementById("heroResult").innerHTML = "Ryu Ga Waga Teki Wo Kurao!"

  }*/
