export async function loadNutritionFacts({ params }) {
    const res = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=028ddd50&app_key=c92dadc543313ce1263b60e163e014d0&nutrition-type=logging&ingr=${params.id}`
    )

    if (!res.ok) {
        const message = `An error has occured: ${res.status}`
        throw new Error(message)
    }
    // console.log(res)
    const myNutritionFacts = await res.json()

    return myNutritionFacts
}

loadNutritionFacts().catch((error) => {
    error.message
})
