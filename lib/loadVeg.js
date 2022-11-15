export async function loadVeg() {
    const res = await fetch(
        'https://week7-seasonal-calendar-git-depolyment-seasonal-calendar2.vercel.app/api/vegdata'
    )

    // if (!res.ok) {
    //     const message = `An error has occured: ${res.status}`
    //     throw new Error(message)
    // }

    const data = await res.json()
    return data
}

// loadVeg().catch((error) => {
//     error.message
// })
