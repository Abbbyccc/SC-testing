// Fetch API
export async function loadVeg() {
    const res = await fetch(
        'https://sc-testing-na8owbxs4-seasonal-calendar2.vercel.app/api/vegdata'
    )
    const data = await res.json()
    return data
}

//http://localhost:3000/api/vegdata
//https://week7-seasonal-calendar-git-depolyment-seasonal-calendar2.vercel.app/api/vegdata
