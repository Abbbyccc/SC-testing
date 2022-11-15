import { getRandomIntInclusive } from './utils'
const APIKey = '87067d5df05e0560fffdd7dcff935bc1'

export async function loadRecipes(currentMonthVegArray) {
    const randomCurrentMonthVegArray = currentMonthVegArray
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)

    const allRecipes = []
    const filterData = []

    for (const veg of randomCurrentMonthVegArray) {
        const res = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${veg}&app_id=d920f565&app_key=${APIKey}&imageSize=THUMBNAIL&field=label&field=image&field=url&field=ingredientLines&field=totalCO2Emissions`
        )

        // if (!res.ok) {
        //     const message = `An error has occured: ${res.status}`
        //     throw new Error(message)
        // }

        const recipeObj = await res.json()
        allRecipes.push(recipeObj)
    }

    //Create array with 3 random numbers
    const randomIndex = [
        getRandomIntInclusive(0, 5),
        getRandomIntInclusive(6, 10),
        getRandomIntInclusive(11, 15),
        getRandomIntInclusive(16, 20),
    ]

    allRecipes.map((el) => {
        for (const key in el) {
            if (key == 'hits') {
                randomIndex.forEach((index) => {
                    if (el[key][index] !== undefined) {
                        return filterData.push({
                            label: el[key][index].recipe.label,
                            image: el[key][index].recipe.image,
                            ingredientLines:
                                el[key][index].recipe.ingredientLines,
                            url: el[key][index].recipe.url,
                        })
                    }
                })
            }
        }
    })
    return { fetched: filterData }
}

// loadRecipes().catch((error) => {
//     error.message // 'An error has occurred: 404'
// })
