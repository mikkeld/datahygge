const SERVER = "http://localhost:8080/features";

export const loadFeatures = () => {
    return fetch(SERVER)
        .then(features => features.json())
};

export const loadFeatureFromId = (id) => {
    const path = `${SERVER}/${id}`;
    return fetch(path)
        .then(feature => feature.json())
};