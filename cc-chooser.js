function generateLicense() {
    const commercialUse = document.querySelector('input[name="commercial"]:checked').value;
    const derivatives = document.querySelector('input[name="derivatives"]:checked').value;

    let licenseURL = "https://creativecommons.org/licenses/";
    let licenseName = "";

    // Determine license based on user input
    if (commercialUse === "yes" && derivatives === "yes") {
        licenseURL += "by/4.0/";
        licenseName = "Attribution 4.0 International (CC BY 4.0)";
    } else if (commercialUse === "yes" && derivatives === "share-alike") {
        licenseURL += "by-sa/4.0/";
        licenseName = "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)";
    } else if (commercialUse === "no" && derivatives === "yes") {
        licenseURL += "by-nc/4.0/";
        licenseName = "Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)";
    } else if (commercialUse === "no" && derivatives === "share-alike") {
        licenseURL += "by-nc-sa/4.0/";
        licenseName = "Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)";
    } else if (commercialUse === "no" && derivatives === "no") {
        licenseURL += "by-nc-nd/4.0/";
        licenseName = "Attribution-NonCommercial-NoDerivs 4.0 International (CC BY-NC-ND 4.0)";
    } else {
        licenseURL += "by-nd/4.0/";
        licenseName = "Attribution-NoDerivs 4.0 International (CC BY-ND 4.0)";
    }

    // Display the result
    const resultDiv = document.getElementById("licenseResult");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h2>Your Selected License</h2>
        <p><a href="${licenseURL}" target="_blank">${licenseName}</a></p>
        <p>Copy this HTML to attribute your work:</p>
        <textarea readonly style="width:100%; height:100px;">
        <a href="${licenseURL}" target="_blank">${licenseName}</a>
        </textarea>
    `;
}
