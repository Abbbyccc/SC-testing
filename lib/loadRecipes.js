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
const APIKey = '056872a5b10ed2e9bf8ac6cf8ce732c4'

export async function loadRecipes(allVegArray) {
    const allRecipes = []
    const filterData = []

    for (const veg of allVegArray) {
        const res = await fetch(
            `https://api.edamam.com/search?&q=${veg}&app_id=b28b6060&app_key=${APIKey}&imageSize=THUMBNAIL&field=label&field=image&field=url&field=ingredientLines&from=0&to=2`
        )
        const recipeArray = await res.json()
        allRecipes.push(recipeArray)
    }

    //Create array with 3 random numbers
    const randoms = [
        getRandomIntInclusive(0, 6),
        getRandomIntInclusive(7, 13),
        getRandomIntInclusive(14, 20),
    ]
    // we slice the array because the api limits 10 calls per minute on their free plan.
    allRecipes.slice(0, 8).map((el) => {
        for (const key in el) {
            if (key == 'hits') {
                // add forEach looping random numbers array
                randoms.forEach((index) => {
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
