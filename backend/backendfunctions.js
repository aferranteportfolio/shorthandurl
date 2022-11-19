import { urlDataBase } from "../database.js";

import { randomNumbersConcatenation } from '../program/functionality.js'




// ----------------------------------- BACK END API FUNCTIONS -------------------------------

function addEntry(longUrl) {
        let entry = {
            "shortened": randomNumbersConcatenation(),
            "lastAccessedAt": Date.now()
        }
        return urlDataBase[longUrl] = entry
    }

function urlPostAPI(jsonBodyLongUrlObjectKey) {
    if (urlPostVerificator(jsonBodyLongUrlObjectKey)) {
        return JSON.stringify(urlDataBase[jsonBodyLongUrlObjectKey].shortened)
    } else {

        return addEntry(jsonBodyLongUrlObjectKey)
    }
}

function urlGetAPI(shortUrlQueryReq) {
    for (const key in urlDataBase) {
        if (Object.hasOwnProperty.call(urlDataBase, key)) {
            const element = urlDataBase[key];
            if (element.shortened === shortUrlQueryReq) {
                element.lastAccessedAt = Date.now()
                return key
            }
        }
    }
}

function urlGetChecker(shortUrlQueryReq) {
    let longUrlAssigned = urlGetAPI(shortUrlQueryReq)
    if (longUrlAssigned) {
        return longUrlAssigned
    } return '/home'

}

function urlPostVerificator(jsonBodyLongUrlObjectKey) {
    if (Object.hasOwnProperty.call(urlDataBase, jsonBodyLongUrlObjectKey)) {
        urlDataBase[jsonBodyLongUrlObjectKey].lastAccessedAt = Date.now()
        return JSON.stringify(urlDataBase[jsonBodyLongUrlObjectKey].shortened)
    }
}
function expirationEntryChecker(date) {
    for (const key in urlDataBase) {
        if (Object.hasOwnProperty.call(urlDataBase, key)) {
            const element = urlDataBase[key];
            if (Date.now() - element.lastAccessedAt > 30000) {
                delete urlDataBase[key]
            }
        }
    }
}

export { expirationEntryChecker, urlPostVerificator, urlGetChecker, urlGetAPI, urlPostAPI, addEntry }