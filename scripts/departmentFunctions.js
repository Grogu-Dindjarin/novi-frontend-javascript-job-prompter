import departments from "./departments.js";
import {printError} from "./errorMessages.js";

function departmentExists(input) {
    return departments.hasOwnProperty(input);
}

function generatePromptMessage(department, input) {
    const availableJobs = department.jobs.length - 1;
    let promptMessage = `Je koos ${input}. Over welke functie wil je meer weten? Voer een getal tussen 0 en ${availableJobs} in.\n`;

    department.jobs.forEach((job, index) => promptMessage += `${index} : ${job.title}, \n`);
    return prompt(promptMessage.trim().replace(/,\s*$/, ''));
}

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getDesiredRoleInformation(input) {
    if (!departmentExists(input)) {
        printError();
        return;
    }

    const department = departments[input];
    return generatePromptMessage(department, input);
}

export const getDepartmentInformation = (departmentName) => {
    if (!departments.hasOwnProperty(departmentName)) {
        printError();
        return;
    }

    const numberOfEmployees = departments[departmentName].numberOfEmployees;

    console.log(`Je koos ${departmentName}.`);
    console.log(`${capitalizeWord(departmentName)} is een leuke afdeling om te werken. Er werken op dit moment ${numberOfEmployees} medewerkers.`);
};

export function getRoleDescription(department, index) {
    if (!departments.hasOwnProperty(department) || !index) {
        printError();
        return;
    }

    const jobTitle = departments[department].jobs[index].title;
    const jobDescription = departments[department].jobs[index].description;

    console.log(`Je koos ${jobTitle}. Een uitdagende rol! ${jobDescription}`);
}
