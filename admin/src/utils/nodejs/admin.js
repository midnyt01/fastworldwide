const API = 'https://api.fwwlogistic.com/admin';


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

async function httpLoginAdmin (adminCred) {
    const response = await fetch(`${API}/login`, {
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

async function httpGetAllShipments () {
    const response = await fetch(`${API}/shipments`, {
        method: "get",
    })
    const data = await response.json()
    return data
}

async function httpGetCurrentShipmentInfo (details) {
    const response = await fetch(`${API}/shipments`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(details)
    })
    const data = await response.json()
    return data
}

async function httpDeleteShipment (details) {
    console.log(details)
    const response = await fetch(`${API}/shipments`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(details)
    })
    const data = await response.json()
    return data
}

async function httpUpdateShipment (details) {
    const response = await fetch(`${API}/edit-shipment`, {
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
    httpLoginAdmin,
    httpCreateNewShipment,
    httpGetAllShipments,
    httpGetCurrentShipmentInfo,
    httpDeleteShipment,
    httpUpdateShipment
}