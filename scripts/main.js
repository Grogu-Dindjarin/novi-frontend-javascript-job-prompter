import departments from "./departments.js";
import {
    getDepartmentInformation,
    getDesiredRoleInformation,
    getRoleDescription
} from "./departmentFunctions.js";
import {pushPromptedInformation} from "./uiHelperFunctions.js";


console.log(departments);

/* (Opdracht 1 - Gegevens aanspreken) */

const salesManagerDescription = departments.sales.jobs.find(job => job.title === "Verkoopmanager").description;

console.log(`De afdeling Sales heeft ${departments.sales.numberOfEmployees} medewerkers.`);
console.log(`Marketing is een leuke afdeling om te werken. ${departments.marketing.description}`);
console.log(`De afdeling Customer Service heeft ${departments["customer-service"].numberOfEmployees} medewerkers.`);
console.log(`Sales is een uitdagende afdeling om te werken als Verkoopmanager. ${salesManagerDescription}` );

/*
    (Opdracht 2 - prompten en beslissen)
    (Opdracht 3 - een nieuwe prompt)
    (Opdracht 4 - samenvoegen)
    (Opdracht 5 - bonus)
*/

const deptInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service].").toLowerCase();
const deptRoleInput = getDesiredRoleInformation(deptInput);

getDepartmentInformation(deptInput);
getRoleDescription(deptInput, deptRoleInput);
pushPromptedInformation(deptInput, deptRoleInput); /* (Opdracht 5 - bonus)*/
