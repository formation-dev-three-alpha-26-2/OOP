class Voiture {
  constructor(nombreMax, carburant) {
    this.nombreDePassager = 0;
    this.nombreMax = nombreMax;
    this.carburant = carburant;
    this.km = 0;
  }

  monter() {
    if (this.nombreDePassager < this.nombreMax) {
      this.nombreDePassager++;
      return "ajouté un passager";
    }

    return "plus de place";
  }
  descendre() {
    if (this.nombreDePassager > 0) {
      this.nombreDePassager--;
      return "un passager a descendu";
    }

    return "personne a bord";
  }

  rouler(Ndemiles) {
    if (this.nombreDePassager === 0) {
      return "pas de conducteur";
    }

    let carburantPrlaVoiture = Ndemiles / this.nombreDePassager;

    if (carburantPrlaVoiture > this.carburant) {
      return "carburant insuffisant";
    } else {
      this.km += Ndemiles;

      this.carburant -= carburantPrlaVoiture;
      return "bon voyage";
    }
  }
}

let voiture1 = new Voiture(5, 30);

console.log(voiture1);
console.log(voiture1.monter());

console.log(voiture1.rouler(20));

class Grillepain {
  constructor() {
    this.toast = undefined;
    this.enMarche = false;
    this.minuterie = undefined;
  }

  ajouterToast(nom) {
    this.toast = nom;
    return this.toast;
  }

  ejecter() {
    if (this.toast === undefined) {
      return "grille pain est vide";
    } else {
      let pain = this.toast;

      this.toast = undefined;

      return "voila le" + pain;
    }
  }

  demarrer() {
    if (this.toast === undefined) {
      return "ajoutez du pain";
    }
else {


  
     //  version1: let x = this 
    // setTimeout(
        
        
    // function () {
    //   console.log("DING");
    //   console.log(x);

    //   x.toast += "grillé";
    //   console.log(x.toast);
      
    // }
    
    
    
    
    // , 5000)

// version2:
 this.minuterie =  setTimeout( () => {
      console.log("DING");
      this.toast += "grillé";
      console.log(this.toast);
      
    }
     , 10000)
console.log(this.minuterie);


}}


arreter () {

clearTimeout(this.minuterie)


}


}

let makinetkhobz = new Grillepain();
console.log(makinetkhobz);
console.log(makinetkhobz.ajouterToast("tabouna"));

console.log(makinetkhobz.demarrer());
// console.log(makinetkhobz.arreter());
