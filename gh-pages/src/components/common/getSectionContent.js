/**
 * getSectionContent async fetches content using a http GET request.
 * @param {string} url Request URL.
 * @param {object} opt Options for request {returnType: json/text}
 */
export const getSectionContent = async (url, opt = {}) => {
    if (!opt.returnType) {
        opt.returnType = "json";
    }

    const response = await fetch(url, {
        method: "GET"
    });

    let responseString = await opt.returnType == "text" ? response.text() : response.json();

    if (response.ok) {
        return responseString;
    }

    throw new Error(`Error ${response.status}. ${responseString}`);
};