function randomNumberPicker() {
    var number = Math.floor((Math.random() * 12) + 1);
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
      break;
      //Add new cases for the defense heroes random pool.
      case 8: document.getElementById("resultImg").src =
        "https://image.ibb.co/k44pEm/Icon_Portrait_Bastion.png";
      break;

      case 9: document.getElementById("resultImg").src =
        "https://image.ibb.co/i7Y5n6/Icon_Portrait_Junkrat.png";
      break;

      case 10: document.getElementById("resultImg").src =
        "https://image.ibb.co/dtjBS6/Icon_Portrait_Mei.png";
      break;

      case 11: document.getElementById("resultImg").src =
        "https://image.ibb.co/jKKd76/Icon_Portrait_Torbjorn.png";
      break;

      case 12: document.getElementById("resultImg").src =
        "https://image.ibb.co/fj1VLR/Icon_Portrait_Hanzo.png";
      break;

      case 13: document.getElementById("resultImg").src =
        "https://image.ibb.co/bXujfR/Icon_Portrait_Widowmaker.png";
      break;

      case 14: document.getElementById("resultImg").src =
        "https://image.ibb.co/jwQMC6/Icon_Portrait_Orisa.png";
      break;

      case 15: document.getElementById("resultImg").src =
        "https://image.ibb.co/fwSCKm/Icon_Portrait_Reinhardt.png";
      break;

      case 16: document.getElementById("resultImg").src =
        "https://image.ibb.co/eKQzzm/Icon_Portrait_Roadhog.png";
      break;

      case 17: document.getElementById("resultImg").src =
        "https://image.ibb.co/kccOQR/Icon_Portrait_Winston.png";
      break;

      case 18: document.getElementById("resultImg").src =
        "https://image.ibb.co/d9RuX6/Icon_Portrait_Zarya.png";
      break;

      case 19: document.getElementById("resultImg").src =
        "https://image.ibb.co/mrYmem/Icon_Portrait_D_va.png";
      break;

      case 20: document.getElementById("resultImg").src =
        "https://image.ibb.co/dZuWC6/Icon_Portrait_Moira.png";
      break;

      case 21: document.getElementById("resultImg").src =
        "https://image.ibb.co/i8N1C6/Icon_Portrait_Symmetra.png";
      break;

      case 22: document.getElementById("resultImg").src =
        "https://image.ibb.co/dmqA5R/Icon_Portrait_Zenyatta.png";
      break;

      case 23: document.getElementById("resultImg").src =
        "https://image.ibb.co/k6QMC6/Icon_Portrait_Ana.png";
      break;

      case 24: document.getElementById("resultImg").src =
        "https://image.ibb.co/ctN1C6/Icon_Portrait_Lucio.png";
      break;

      case 25: document.getElementById("resultImg").src =
        "https://image.ibb.co/kOTV5R/Icon_Portrait_Mercy.png";
      break;

      case 26: document.getElementById("resultImg").src =
        "https://image.ibb.co/kSKCkR/Icon_Portrait_Doomfist.png";
      break;

      default:
      break;
    }

}

/*  function test() {

    document.getElementById("heroResult").innerHTML = "Ryu Ga Waga Teki Wo Kurao!"

  }*/
