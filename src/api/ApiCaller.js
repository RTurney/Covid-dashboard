
export const getCountryData = async () => {
    return fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data;
    });
};

export const getContinentData = async () => {
    return fetch("https://disease.sh/v3/covid-19/continents")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data;
    });
};

export const getVaccineDataByCountry = async () => {
    return fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?fullData=true")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data;
    });
};