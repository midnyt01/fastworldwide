const API = 'http://localhost:8000/admin';


async function httpCreateAdmin (adminCred) {
    const response = await fetch(`${API}/createadmin`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(adminCred)
    })
    const admin = await response.json()
    return admin
}

async function httpCreateNewShipment (details) {
    const response = await fetch(`${API}/createshipment`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(details)
    })
    const data = await response.json()
    return data
}



export {
    httpCreateAdmin,
    httpCreateNewShipment,
}