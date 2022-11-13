// Fetch API
export async function loadVeg() {
    const res = await fetch(
        'https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod/v2/season-with-food/'
    )
    const data = await res.json()
    return data
}

//http://localhost:3000/api/vegdata
//https://week7-seasonal-calendar-git-depolyment-seasonal-calendar2.vercel.app/api/vegdata
