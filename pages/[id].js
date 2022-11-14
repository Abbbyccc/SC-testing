// https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=beetroot
import { loadVeg } from '../lib/loadVeg.js'
import Nutrition from '../components/Nutrition.js'
import { loadNutritionFacts } from '../lib/loadNutritionFacts.js'

export async function getStaticPaths() {
    const allveg = await loadVeg()
    const allYearArray = []
    for (const month of allveg) {
        allYearArray.push(month.food.map((veg) => veg.name))
    }
    const flatPath = allYearArray.flat()
    const path = flatPath.map((veg) => ({
        params: {
            id: String(veg).toLowerCase().replace(' ', '-'),
        },
    }))

    return {
        paths: path,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    console.log(params)
    const vegetables = await loadNutritionFacts({ params })

    // const res = await fetch(
    //     `https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=${params.id}`
    // )

    // if (!res.ok) {
    //     const message = `An error has occured: ${res.status}`
    //     throw new Error(message)
    // }
    // const vegetables = await res.json()
    if (vegetables === undefined) {
        return
    } else {
        return {
            props: {
                vegetables:
                    vegetables['ingredients'][0]['parsed'][0]['nutrients'],
                params: params.id,
            },
            revalidate: 6000,
        }
    }
}

// loadRecipes().catch((error) => {
//     error.message // 'An error has occurred: 404'
// })

export default function SingleVeg({ vegetables, params }) {
    const arr = [
        vegetables.VITD,
        vegetables.ENERC_KCAL,
        vegetables.VITA_RAE,
        vegetables.PROCNT,
        vegetables.TOCPHA,
        vegetables.CHOCDF,
        vegetables.FIBTG,
        vegetables.VITB6A,
        vegetables.VITB12,
        vegetables.K,
        vegetables.NA,
        vegetables.SUGAR,
        vegetables.CA,
    ]

    return (
        <>
            <h2>Nutrition Facts</h2>
            <p>{params}</p>
            <table>
                <tbody>
                    {arr.map((el, index) =>
                        el !== undefined ? (
                            <tr key={index}>
                                <td>
                                    <Nutrition nutrition={el} />
                                </td>
                            </tr>
                        ) : (
                            ''
                        )
                    )}
                </tbody>
            </table>
        </>
    )
}
