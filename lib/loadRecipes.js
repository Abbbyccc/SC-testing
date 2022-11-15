// Fetch API

// Lisa's Key
// const APIKey = '6fd0e8c2b9b844d4bf8f118d6bb6ebe8'
// Abby's Key
// const APIKey = '66bcc079f58d40fb9e98d5a5e5c492dc'
// Abby's second Key (8th Nov 13:24)
// const APIKey = 'e301a3ce6bb142c0a34efe94ca54f4a9'
//Edamam API
//b28b6060
//056872a5b10ed2e9bf8ac6cf8ce732c4
// const APIKey = 'd7dbb7ec7bbca26af0c2a02a77d30d9a'
// id 79e5508c

import { getRandomIntInclusive } from './utils'
const APIKey = '924549a5437c5d1b38df28b14ef767d7'

export async function loadRecipes(currentMonthVegArray) {
    const randomCurrentMonthVegArray = currentMonthVegArray
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)

    const allRecipes = []
    const filterData = []

    for (const veg of randomCurrentMonthVegArray) {
        const res = await fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${veg}&app_id=63a6259f&app_key=${APIKey}&imageSize=THUMBNAIL&field=label&field=image&field=url&field=ingredientLines&field=totalCO2Emissions`
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
