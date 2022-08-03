function KilosToPounds(kg){ return  kg * 2.2; }
function PoundsToKilos(Lbs){ return Lbs / 2.2046; }

let Lbsresult = KilosToPounds(100);
let Kgresult = PoundsToKilos(100);

console.log("Pounds to Kilos = " + Lbsresult + " Kg");
console.log ("Kilos to pounds = " + Kgresult + " Lbs")