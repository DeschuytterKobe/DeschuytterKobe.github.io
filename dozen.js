const minimumAantalProductenPerdoos = 20;
let producten = new Array();
let dozen = new Array();
const doosFixed = new Array();

class Product {
  constructor(productCode, productLengte, productHoogte, productBreedte) {
    this._productCode = productCode;
    this._productLengte = productLengte;
    this._productHoogte = productHoogte;
    this._productBreedte = productBreedte;
  }
  get productCode() {
    return this._productCode;
  }
  get productLengte() {
    return this._productLengte;
  }
  get productHoogte() {
    return this._productHoogte;
  }
  get productBreedte() {
    return this._productBreedte;
  }

  berekenInhoud() {
    return this._productLengte + this._productHoogte + this._productBreedte;
  }
}
class Doos {
  constructor(doosLengte, doosHoogte, doosBreedte) {
    this._doosLengte = doosLengte;
    this._doosHoogte = doosHoogte;
    this._doosBreedte = doosBreedte;
    this._producten = new Array();
  }
  get doosLengte() {
    return this._doosLengte;
  }
  get doosHoogte() {
    return this._doosHoogte;
  }
  get doosBreedte() {
    return this._doosBreedte;
  }
  get producten() {
    return this._producten;
  }

  set doosLengte(doosLengte){
    this._doosLengte = doosLengte;
  }
  set doosHoogte(doosHoogte){
    this._doosHoogte = doosHoogte;
  }
  set doosBreedte(doosBreedte){
    this._doosBreedte = doosBreedte;
  }
  set producten(producten){
    this._producten = producten;
  }
  voegProductToe(product) {
    this._producten.push(product);
  }
  berekenInhoud() {
    return this._doosLengte + this._doosHoogte + this._doosBreedte;
  }
  clearProducts(){
    this._producten = new Array();
  }
  
}

function verwijderAlleProductenUitElkedoos(dozen) {
  for(let d of dozen){
    d.producten = new Array();
  }
}

//GEEF MATEN PRODUCTEN

function geefLengtesProducten() {
  let lengtesProducten = producten.map((value) => value.productLengte);

  let gesorteerdLengteProducten = lengtesProducten;
  gesorteerdLengteProducten.sort(function (a, b) {
    return a - b;
  });
  return gesorteerdLengteProducten;
}

function geefHoogtesProducten() {
  let hoogtesProducten = producten.map((value) => value.productHoogte);

  let gesorteerdeHoogteProducten = hoogtesProducten;
  gesorteerdeHoogteProducten.sort(function (a, b) {
    return a - b;
  });
  return gesorteerdeHoogteProducten;
}
function geefBreedtesProducten() {
  let breedtesProducten = producten.map((value) => value.productBreedte);

  let gesorteerdeBreedteProducten = breedtesProducten;
  gesorteerdeBreedteProducten.sort(function (a, b) {
    return a - b;
  });
  return gesorteerdeBreedteProducten;
}

//GEEF MATEN DOZEN

function geefLengtesDozen() {
  let lengteDozen = dozen.map((value) => value.doosLengte);

  let gesorteerdeLengtesDozen = lengteDozen;
  gesorteerdeLengtesDozen.sort(function (a, b) {
    return a - b;
  });
  return gesorteerdeLengtesDozen;
}
function geefHoogtesDozen() {
  let hoogteDozen = dozen.map((value) => value.doosHoogte);

  let gesorteerdeHoogtesDozen = hoogteDozen;
  gesorteerdeHoogtesDozen.sort(function (a, b) {
    return a - b;
  });
  return gesorteerdeHoogtesDozen;
}
function geefBreedtesDozen() {
  let breedtesDozen = dozen.map((value) => value.doosBreedte);

  let gesorteerdeBreedteDozen = breedtesDozen;
  gesorteerdeBreedteDozen.sort(function (a, b) {
    return a - b;
  });
  return gesorteerdeBreedteDozen;
}

//VOEG PRODUCTEN TOE AAN LIJST

function voegProductToe(product) {
  producten.push(product);
}

//VOEG DOZEN TOE AAN LIJST
function voegDoosToe(doos) {
  dozen.push(doos);
}

let keuzeHoeveelHeidDozen = 20;

function hoeveelheidProductenPerDoos() {
  return producten.length() / KeuzeHoeveelHeidDozen;
}

//ZOEKT DE BESTE DOZEN VOOR DE PRODUCTEN
function zoekOptimaleDoos() {
  const rotateItems = true;
  const keuze = document.getElementById('maxDozen').value;
  const dozen = new Array();
  
//Vind de beste dozen

if(keuze < 2 ){
  console.error("De keuze moet minimum 2 zijn.");
}

//Vind de juiste dozen
//Hoogte
const maxHoogte = producten.reduce((prev, val) => val.productHoogte > prev ? val.productHoogte :prev, 0);
const minHoogte = producten.reduce((prev, val) => val.productHoogte < prev ? val.productHoogte :prev, Number.MAX_SAFE_INTEGER);
const stepHeightHoogte = Math.ceil((maxHoogte-minHoogte) / (keuze - 2));

//Lengte
const maxLengte = producten.reduce((prev, val) => val.productLengte > prev ? val.productLengte  :prev, 0);
const minLengte = producten.reduce((prev, val) => val.productLengte < prev ? val.productLengte  :prev, Number.MAX_SAFE_INTEGER);
const stepHeightLengte = Math.ceil((maxLengte-minLengte) / (keuze - 2));

//Breedte
const maxBreedte = producten.reduce((prev, val) => val.productBreedte > prev ? val.productBreedte :prev, 0);
const minBreedte = producten.reduce((prev, val) => val.productBreedte < prev ? val.productBreedte :prev, Number.MAX_SAFE_INTEGER);
const stepHeightBreedte = Math.ceil((maxBreedte-minBreedte) / (keuze - 2));

const kleinsteDoos = new Doos(minLengte, minHoogte, minBreedte);
dozen.push(kleinsteDoos);
for(let i = 1; i<=keuze-2; i++){
  const doos = new Doos(minLengte+ (stepHeightLengte*i) ,maxHoogte+ (stepHeightHoogte*i),maxBreedte+ (stepHeightBreedte*i));
  console.log(doos);
  dozen.push(doos);
}
const grootsteDoos = new Doos(maxLengte,maxHoogte,maxBreedte);
dozen.push(grootsteDoos);

//Loop eerst door alle producten die er zijn.
  producten.forEach(prod => {
      //Steek alle afmetingen in een array, en sorteer van klein naar groot.
      let afmetingen = [prod.productBreedte, prod.productHoogte, prod.productLengte];
      afmetingen = afmetingen.sort(function (a, b) {  return a - b;  });



    //Loop door alle dozen in de lijst, en kies diegene met de laagste restwaarde
    //Restwaarde betekent bij ons het verschil in afmetingen tussen de doos en het product
    let besteDoos;
    let besteDoosRestWaarde;
    dozen.forEach(doos => {
      //Als er nog geen beste doos is, zetten we deze als de eerste van de array van dozen en gaan we door naar de volgende doos.
      if(besteDoos === undefined) {
        besteDoos = doos;
        besteDoosRestWaarde = berekenRestWaarde(prod, doos);
      } else {

      //Kijk of de rest waarde van de current doos minder is als die van de beste doos, zo ja zet hij de current als de beste doos.
      const currentRest = berekenRestWaarde(prod, doos);
      if(currentRest < besteDoosRestWaarde){
        besteDoos = doos;
        besteDoosRestWaarde = berekenRestWaarde(prod, doos);
      }
    }
    });

    besteDoos.voegProductToe(prod);
    
    //Pas de afmetingen van de doos aan zodat het item er in past.
    if(prod.productLengte > besteDoos.doosLengte) besteDoos.doosLengte = (prod.productLengte);
    if(prod.productHoogte > besteDoos.doosHoogte) besteDoos.doosHoogte= (prod.productHoogte);
    if(prod.productBreedte > besteDoos.doosBreedte) besteDoos.doosBreedte= (prod.productBreedte);

    const prods = besteDoos.producten;
    besteDoos.clearProducts();

    prods.forEach(p => {
      let besteDoos;
      let besteDoosRestWaarde;

      dozen.forEach(doos => {
        //Als er nog geen beste doos is, zetten we deze als de eerste van de array van dozen en gaan we door naar de volgende doos.
        if(besteDoos === undefined) {
          besteDoos = doos;
          besteDoosRestWaarde = berekenRestWaarde(prod, doos);
        } else {
        //Kijk of de rest waarde van de current doos minder is als die van de beste doos, zo ja zet hij de current als de beste doos.
        const currentRest = berekenRestWaarde(prod, doos);
        if(currentRest <= besteDoosRestWaarde){ // <=?
          besteDoos = doos;
          besteDoosRestWaarde = berekenRestWaarde(prod, doos);
        }
      }
    });
    besteDoos.voegProductToe(p);

    })
  })
  


  dozen.forEach(doos => {
    //Hoogte
const maxHoogte = doos.producten.reduce((prev, val) => val.productHoogte > prev ? val.productHoogte :prev, 0);
doos.doosHoogte = maxHoogte;

//Lengte
const maxLengte = doos.producten.reduce((prev, val) => val.productLengte > prev ? val.productLengte  :prev, 0);
doos.doosLengte = maxLengte;

//Breedte
const maxBreedte = doos.producten.reduce((prev, val) => val.productBreedte > prev ? val.productBreedte :prev, 0);
doos.doosBreedte = maxBreedte;
  });

  console.log(dozen);


  verwijderAlleProductenUitElkedoos(dozen);
  voegProductenToeAanDoosMetZoKleinMogelijkeRestWaarde(producten, dozen);
  DozentoHtml(dozen);
}

function pastInDoos(doos,product){
  return (doos.doosHoogte >= product.productHoogte && doos.doosLengte>=product.productLengte && doos.doosBreedte >= product.productBreedte);
  }

  function berekenRest(doos, product) {
    let rest = 0;
    rest += Math.abs(doos.doosLengte - product.productLengte);
    rest += Math.abs(doos.doosBreedte - product.productBreedte);
    rest += Math.abs(doos.doosHoogte - product.productHoogte);
    return rest;
  }
  function voegProductToeAanDoos(doos, product) {
    const arr = doos.producten;
    arr.push(product);
    doos.producten = arr;
  }

//Jesus, wtf is die naam zelf
function voegProductenToeAanDoosMetZoKleinMogelijkeRestWaarde( producten, dozen) {
  verwijderAlleProductenUitElkedoos(dozen);
  producten.forEach((product) => {
    let restWaarde;
    let besteDoos;

    dozen.forEach((doos) => {
      if (besteDoos === undefined && pastInDoos(doos, product)) {
        restWaarde = berekenRest(doos, product);
        besteDoos = doos;
      } else {
        const rest = berekenRest(doos, product);
        if (rest < restWaarde && pastInDoos(doos, product)) {
          restWaarde = rest;
          besteDoos = doos;
        }
      }
    });

    //Product pas in geen enkele doos:
    if(besteDoos == undefined){
      dozen.forEach((doos) => {
        if (besteDoos === undefined) {
          restWaarde = berekenRest(doos, product);
          besteDoos = doos;
        } else {
          const rest = berekenRest(doos, product);
          if (rest < restWaarde) {
            restWaarde = rest;
            besteDoos = doos;
          }
        }
      });
      if(besteDoos.doosHoogte < product.productHoogte) besteDoos.doosHoogte = product.productHoogte;
      if(besteDoos.dooslengte  < product.productLengte) besteDoos.dooslengte = product.productLengte;
      if(besteDoos.doosBreedte < product.productBreedte) besteDoos.doosBreedte = product.productBreedte;
    }
    voegProductToeAanDoos(besteDoos, product);

  });
}
function berekenRestWaarde(product, doos){
  let rest = 0;
  rest+=Math.abs(product.productLengte - doos.doosLengte);
  rest+=Math.abs(product.productBreedte - doos.doosBreedte);
  rest+=Math.abs(product.productHoogte - doos.doosHoogte);

 doos.producten.forEach(value => {
    rest+=Math.abs(product.productLengte - value.productLengte);
    rest+=Math.abs(product.productBreedte - value.productBreedte);
    rest+=Math.abs(product.productHoogte - value.productHoogte);
  });

  rest /= (doos.doosBreedte + doos.doosLengte + doos.doosHoogte);

  return rest;
}


this.parseExcel = function (file) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
      type: "binary",
    });
    workbook.SheetNames.forEach(function (sheetName) {
      // Here is your object
      var XL_row_object = XLSX.utils.sheet_to_row_object_array(
        workbook.Sheets[sheetName]
      );
      var json_object = JSON.stringify(XL_row_object);
      console.log();

      JSON.parse(json_object).forEach((element) => {
        if (element === undefined) {
          console.log("Undefined shizzl");
        } else
          voegProductToe(
            new Product(
              element["Part numbers"],
              Math.ceil(element["Length (cm)"]),
              Math.ceil(element["Height (cm)"]),
              Math.ceil(element["Width (cm)"])
            )
          );
      });
      console.log("Loaded " + producten.length + " producten");
      jQuery("#xlx_json").val(json_object);
      zoekOptimaleDoos();
    });
  };

  reader.onerror = function (ex) {
    console.log(ex);
  };

  reader.readAsBinaryString(file);
};

function DozentoHtml(dozen) {
  document.getElementById("tabel").innerHTML = "";
  dozen.forEach((value, index) => {
    let html = `<div class="st_wrap_table" data-table_id="${
      index % 2
    }" id="${index}}">
        <header class="st_table_header">
          <h2>[Doos ${index+1}]  Lengte = ${value.doosLengte} Breedte = ${
      value.doosBreedte
    } Hoogte = ${value.doosHoogte}</h2>
          <div class="st_row">
            <div class="st_column _rank">0</div>
            <div class="st_column _name">VolgNummer</div>
            <div class="st_column _surname">Lengte</div>
            <div class="st_column _year">Breedte</div>
            <div class="st_column _section">Hoogte</div>
            </div>
            </header>`;

    //document.getElementById(index).innerHTML="";

    value.producten.forEach((value2, index2) => {



      html += `<div class="st_table">
             <div class="st_row">
            <div class="st_column _rank">${index2 + 1}</div>
            <div class="st_column _name">${value2.productCode}</div>
            <div class="st_column _surname">${value2.productLengte}</div>
            <div class="st_column _year">${value2.productBreedte}</div>
            <div class="st_column _section">${value2.productHoogte}</div>
            </div>`;
    });
    document.getElementById("tabel").insertAdjacentHTML("beforeend", html);
  });
}

function init() {
  document.getElementById("knop").onclick = function (event) {
    parseExcel(document.getElementById("filechooser").files[0]);
  };
}

window.onload = init;
