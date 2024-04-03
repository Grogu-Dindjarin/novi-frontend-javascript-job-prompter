const errorMessage = "Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.";
export const errorElementIDNotFound = "Ongeldige element ID is niet gevonden'.";

export const printError = () => {
    const errorMessageElement = "error-message";
    const errorElement = document.getElementById(errorMessageElement);

    if (!errorElement) {
        console.error(errorElementIDNotFound);
        return null;
    }

    errorElement.textContent = errorMessage;
    console.error(errorMessage);
}
