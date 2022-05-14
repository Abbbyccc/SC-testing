// https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=beetroot
import { loadVeg } from '../lib/loadVeg.js'

const currentMonth = new Date().getMonth()
export async function getStaticPaths() {
    const allveg = await loadVeg()
    const currentMonthData = allveg[currentMonth]
    const allVegArray = currentMonthData.food.map((veg) => veg.name)

    const path = allVegArray.map((veg) => ({
        params: { id: String(veg).toLocaleLowerCase() },
    }))

    return {
        paths: path,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    console.log(params.id)
    const res = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=cd596177&app_key=%20d3aae1ee2f6f3ae55aebc8f0d4c2662c&nutrition-type=logging&ingr=${params.id}`
    )

    const vegetables = await res.json()

    return {
        props: vegetables,
        revalidate: 10,
    }
}

export default function SingleVeg() {
    return (
        <>
            <p>hello</p>
        </>
    )
}
