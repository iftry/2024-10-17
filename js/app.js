let firstName = "jonas"
let lastName = "petrauskas"
let personalCode = "38507131234"

// 1. vardas > 3, pavarde > 5
// 2.1 transform Vardas
// 2.2 transform PAVARDE
// 3.1 pagal 2 ir 3 skaitmeni nustatyti metus
// 3.2 pagal trecias skaitmuo 1,2 gimimo vieta: Lietuva, jei ne - Nezinoma

if(firstName.length > 3 && lastName.length > 5){
    console.log("Teisingai ivesti duomenys")
}
else {
    console.log("Klaida, kartokite ivedima")
}
console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));
console.log(lastName.toUpperCase());

console.log("19" + personalCode[1] + personalCode[2] + "-" + personalCode[3] + personalCode[4] + "-" + personalCode[5] + personalCode[6])

switch(personalCode[2]){
    case '1': 
    case '2':
        console.log("Gimimo vieta: Lietuva");
    break;
    case '3':
        console.log("Gimimo vieta: Uzsienis");
    break;
    default:
        console.log("Gimimo vieta: Nezinoma");

}