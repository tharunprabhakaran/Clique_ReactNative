/**
 * API Configs
 * @author tharunp
 * @description API Configuration parameters
 */

/* Initialise Global Parameters */
const defaultLog = console.log
const errorLog = console.log

/* API Config SingleTon */
let APIConfigSingleTon = (function () {
    var instance

    var config = {

        /* Headers */
        "headers": {},

        /* Authentication Headers */
        "authHeaders": {
            "ACCESS_TOKEN": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZ29kIiwicHJpbWFyeVJvbGUiOiJ0ZWFjaGVyIiwic2Vjb25kYXJ5Um9sZSI6IiIsInRpbWVzdGFtcCI6MTYxODQyNzc5MDM4MiwiaWQiOiI2MDVlMzZhNTlkODA4YTBmNTFjZTdmNGEiLCJzY2hvb2xJRCI6IjYwNWRmMjY4MThjNmNkMGE4Zjg2ODQyMCIsImlhdCI6MTYxODQyNzc5MH0.6nXD1rMJDRoh7XtEUGzN_qNCY4yieluzs1ZfyCQFI8w"
        },

        /* Endpoints */
        "endpoints": {
            "getSubject": "http://localhost:9000/subject",
            "getAttendance": "http://localhost:9001/attendance",
            "getTask": "http://localhost:9002/task",
            "getResult": "http://localhost:9003/result",
            
        },

        fireAPI: async (urlParameters) => {
            /**
            * urlParameters Structure
            * { 
            *  "endpoint": "String",
            *  "method": "String",
            *  "headers": "Object",
            *  "queryParameters": "Object",
            *  "body": "Object"
            * }
            */
            try {

                /* Retrive Endpoint */
                let httpEndpoint = config.endpoints[urlParameters.endpoint]

                /* Build Headers */
                let httpMethod = urlParameters.method

                /**
                 * Adding Query Parameter
                 * 1. Combine Query Parameters to queryString
                 * 2. Append queryString to the httpEndpoint
                 * 3. Encode URI - httpEndpoint
                 */

                let queryString = ""
                for (const query in urlParameters.queryParameters) {
                    queryString = `${queryString}&${query}=${urlParameters.queryParameters[query]}`
                }

                if (queryString != "" || queryString == null) {
                    httpEndpoint = httpEndpoint + "?" + queryString.substring(1)

                    /* Encode URI */
                    httpEndpoint = encodeURI(httpEndpoint)
                }



                /* Default Headers */
                let headers = {
                    "Accept": '*/*',
                    "Connection": 'keep-alive',
                    "User-Agent": 'CliqueReactNativeClient'
                }

                /* Adding Custom Parameters */
                urlParameters.headers.forEach(property => {
                    if (config.headers[property]) {
                        headers[property] = config.headers[property]
                    }
                });

                /* Merge Authentication Header & Headers */
                for (let property in config.authHeaders) {
                    headers[property] = config.authHeaders[property]
                }

                /* @TODO Build Body */

                /* Firing API */
                let response = await fetch(httpEndpoint, {
                    method: httpMethod,
                    headers: headers,
                    //body: body
                })

                /* Handle Response */
                let responseJSON = await response.json();
                return responseJSON

            } catch (error) {
                errorLog("Error | Fire API | Error -> ", error)
                throw { "name": "Generic Fire API", "code": "APIEC001", "error": error.toString() }
                return false
            }
        }
    }

    /* Instantiate SingleTon */
    function createInstance() {
        return config;
    }

    /**
     * Refresh singleton
     * @todo Implement refresh singleton
     * @description Updates all the list of available enpoints 
     */
    let refreshSingleTon = () => { }

    /**
     * Insert Headers
     * @param {Object} headers 
     * @param {Boolean} auth
     * @returns {Boolean}
     * @description Insert a new header into available header list 
     * @author tharunp
     */
    let insertHeaders = (headers, auth) => {
        try {
            /* Sanity Check */
            if (headers == undefined || typeof headers != "object" || typeof auth != "boolean") { throw "Invaild Parameter" }

            if (auth) {
                /* Upsert authHeaders */
                config.authHeaders = { ...config.authHeaders, headers }
            } else {
                /* Upsert Headers */
                config.headers = { ...config.headers, headers }
            }

            /* Return Bool */
            return true

        } catch (error) {
            /* Log Error */
            errorLog("API CONFIG | Insert Headers | Error | ", error)

            /* Retrun Bool */
            return false
        }
    }

    /**
     * Insert Endpoints
     * @param {Object} endpoints 
     * @returns {Boolean}
     * @descripion Insert endpoint objects into the available endpoint list.
     * @type sync
     * @author tharunp
     */
    let insertEndpoints = (endpoints) => {
        try {
            /* Sanity Check */
            if (endpoints == undefined || typeof endpoints != "object") { throw "Invaild Parameter" }

            /* Check for URL Format */
            for (let urlName in endpoints) {
                /* Typecheck on Endpoint Name */
                if (typeof endpoints[urlNamel] != "string") { throw "Invalid Endpoint" }

                /* Format Check for URL */
                let isValid = isValidURL(endpoints[urlName])
                if (!isValid) { throw "Invalid URL Format" }

                /* Upsert URL */
                config.endpoints = { ...config.endpoints, }
            }

            /* Return Bool */
            return true

        } catch (error) {
            /* Log Error */
            errorLog("API CONFIG | Insert Endpoints | Error | ", error)

            /* Retrun Bool */
            return false
        }
    }

    /**
     * Get Headers
     * @param {String} query 
     * @description Query list of the available Headers, default = Returns all avaialbe Headers
     * @type sync
     * @author tharunp
     */
    let getHeaders = (query) => {

        /* Return all headers if query is undefined */
        if (query == undefined) { return config.headers }

        /* Return Queried result */
        let response = {}
        response[query] = config.headers[query]
        return response
    }

    /**
     * Get AuthHeaders
     * @param {String} query 
     * @description Query list of available Authentication Headers, default = Returns all avaialbe AuthHeaders
     * @type sync
     * @author tharunp
     */
    let getAuthHeaders = (query) => {

        /* Return all headers if query is undefined */
        if (query == undefined) { return config.authHeaders }

        /* Return Queried result */
        let response = {}
        response[query] = config.authHeaders[query]
        return response
    }

    /**
     * Get Endpoint
     * @param {String} query 
     * @description Query list of available endpoints, default = Returns all available endpoints
     * @type sync
     * @author tharunp
     */
    let getEndpoint = (query) => {

        /* Return all endpoints if query is undefined */
        if (query == undefined) { return config.endpoints }

        /* Return Queried result */
        let response = {}
        response[query] = config.endpoints[query]
        return response
    }

    let getConfig = () => {
        return config
    }

    /**
     * Fire API
     * @param {Object} urlParameters 
     * @description Trigger API call using this functions.
     * @type Async
     * @author tharunp
     */
    let fireAPI = async (urlParameters) => {

        /**
         * urlParameters Structure
         * { 
         *  "endpoint": "String",
         *  "method": "String",
         *  "headers": "Object",
         *  "body": "Object"
         * }
         */
        try {

            /* Retrive Endpoint */
            let httpEndpoint = config.endpoints[urlParameters.endpoint]

            /* Build Headers */
            let httpMethod = urlParameters.method

            /* Default Headers */
            let headers = {
                "Accept": '*/*',
                "Connection": 'keep-alive',
                "User-Agent": 'CliqueReactNativeClient'
            }

            /* Adding Custom Parameters */
            urlParameters.headers.forEach(property => {
                if (config.headers[property]) {
                    headers[property] = config.headers[property]
                }
            });

            /* Merge Authentication Header & Headers */
            for (let property in config.authHeaders) {
                headers[property] = config.authHeaders[property]
            }

            /* Build Body */
            let body = JSON.stringfy(urlParameters.body)

            /* Firing API */
            let response = await fetch(endpoint, {
                method: httpMethod,
                headers: headers,
                body: body
            })

            /* Handle Response */
            let responseJSON = await response.json();
            return

        } catch (error) {
            errorLog("Error | Fire API | Error -> ", error)
            throw { "name": "Generic Fire API", "code": "APIEC001", "error": error.toString() }
            return false
        }

    }
    return {
        Initiate: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }

    };
})();

function isValidURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '(BASEURL)' + // BaseURL
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}

let APIUtility = APIConfigSingleTon.Initiate()
module.exports = APIUtility

