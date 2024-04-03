import departments from "./departments.js";
import {errorElementIDNotFound, printError} from "./errorMessages.js";

function getHtmlElementById(elementId) {
    return document.getElementById(elementId);
}

function displayErrorMessage(message) {
    alert(message);
    console.error(errorElementIDNotFound);
}

function updateElementTextContent(element, content) {
    element.textContent = content;
}

function updateElementWithInformationIfValid(elementId, information) {
    const htmlElement = getHtmlElementById()
    const message = `Ongeldige invoer, er bestaat geen html element met de id '${elementId}'.`;

    if (!htmlElement) {
        displayErrorMessage(message)
        return null;
    }

    updateElementTextContent(htmlElement, information)
}

export function pushPromptedInformation(department, jobsIndex) {
    if (!departments.hasOwnProperty(department) || !jobsIndex) {
        printError();
        return;
    }

    const job =  departments[department].jobs[jobsIndex];
    const elementsToUpdate = {
        'role-title': job.title,
        'department-description': departments[department].description,
        'role-description': job.description
    };

    for (const [elementId, information] of Object.entries(elementsToUpdate)) {
        updateElementWithInformationIfValid(elementId, information);
    }
}
