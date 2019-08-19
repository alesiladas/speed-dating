/* OUTLINED REQUESTS TO CREATE, UPDATE, OR RETRIEVE DATA
ABOUT PARTICIPANTS, EVENTS, PREFERENCES, OR SCEDULES */

// EXAMPLE ERROR HANDLING
async function apiCaller(input, init) {
    const response = await fetch(input, init);
    if (response.status < 200 || response.status > 299) {
        throw new Error("Unexpected response");
    }
    return response;
}

// EXAMPLE POST REQUEST
export async function authenticateAdmin(email, password) {
    const response = await apiCaller(`some-url-to-auth-admin`, {
        method: "POST",
        headers: { "Content-type": "text/plain" },
        body: {email, password},
    });
    const responseBody = await response.json()
    return {...responseBody};
}

export async function authenticateUser(email, password) {
    const response = await apiCaller(`some-url-to-auth-user`, {
        method: "POST",
        headers: { "Content-type": "text/plain" },
        body: {email, password},
    });
    const responseBody = await response.json()
    return {...responseBody};
}

/* OTHER REQUESTS TO MAKE
    - request to server to update participant's relation to event
    - request to server to create participant
    - request to server to get participant information
    - request to server to get events
    - requst to server to create event schedule
    - request to server to update participant's preferences
*/
