import axios from "axios";

export const postWithAuth = (url, entity, countryIsoCode) => {
    const auth = 'getAuth()';
    return postAuthWithAccessToken(url, auth?.accessToken, entity, countryIsoCode)
};

export const putWithAuth = (url, entity) => {
    const auth = 'getAuth()';
    return putAuthWithAccessToken(url, auth?.accessToken, entity)
};


export const getWithAuth = (url) => {
    const auth = 'getAuth()';
    return getAuthWithAccessToken(url, auth?.accessToken, countryIsoCode)
};

export const getWithOutAuth = (url) => {
    return new Promise((resolve, reject) => {
        const headers = {
            "content-type": "application/json",
        };
        axios
            .get(url, { headers })
            .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                }
            })
            .catch((ex) => {
                resolve({ status: false, message: ex?.message, errorMessage: ex?.response?.data?.message, statusCode: ex?.response?.status });
            });
    });
};

export const postWithOutAuth = (url, entity) =>
    new Promise((resolve, _reject) => {
        const headers = {
            "content-type": "application/json",
        };

        axios
            .post(url, entity, { headers })
            .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                }
            })
            .catch((ex) => {
                resolve({ status: false, message: ex.message, errorMessage: ex?.response?.data?.message, statusCode: ex?.response?.status });
            });
    });

export const putWithOutAuth = (url, entity) =>
    new Promise((resolve, _reject) => {
        const headers = {
            "content-type": "application/json",
        };

        axios
            .put(url, entity, { headers })
            .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                }
            })
            .catch((ex) => {
                resolve({ status: false, message: ex.message, errorMessage: ex?.response?.data?.message, statusCode: ex?.response?.status });
            });
    });


export const getAuthWithAccessToken = (url, accessToken) => {
    return new Promise((resolve, reject) => {
        const headers = {
            "content-type": "application/json",
            "x-access-token": accessToken,
        };
        axios
            .get(url, { headers })
            .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                }
            })
            .catch((ex) => {
                resolve({ status: false, message: ex.message, errorMessage: ex?.response?.data?.message, statusCode: ex?.response?.status });
            });
    });
};

export const postAuthWithAccessToken = (url, accessToken, entity) => {

    const headers = {
        "content-type": "application/json",
        "x-access-token": accessToken,
    };
    return new Promise((resolve, reject) => {
        axios
            .post(url, entity, { headers })
            .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                }
            })
            .catch((ex) => {
                resolve({ status: false, message: ex.message, errorMessage: ex?.response?.data?.message, statusCode: ex?.response?.status });

            });
    });
};

export const putAuthWithAccessToken = (url, accessToken, entity) => {

    const headers = {
        "content-type": "application/json",
        "x-access-token": accessToken,
    };
    return new Promise((resolve, reject) => {
        axios
            .put(url, entity, { headers })
            .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                }
            })
            .catch((ex) => {
                resolve({ status: false, message: ex.message, errorMessage: ex?.response?.data?.message, statusCode: ex?.response?.status });
            });
    });
};

export const deleteWithOutAuth = (url) => {
    return new Promise((resolve, reject) => {
        const headers = {
            "content-type": "application/json",
        };

        axios
            .delete(url, { headers })
            .then((response) => {
                if (response && response.data) {
                    resolve(response.data);
                }
            })
            .catch((ex) => {
                resolve({ status: false, message: ex?.message, errorMessage: ex?.response?.data?.message, statusCode: ex?.response?.status });
            });
    });
};