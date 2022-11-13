import Image from 'next/image'

export default function VegName({ allMonths, index }) {
    return (
        <>
            <h2>{allMonths[index].name}</h2>
            <div className="grid gap-4 grid-cols-3 lg:grid-cols-4">
                {allMonths[index].food.map((veg) => (
                    <div
                        key={veg.name}
                        className="flex flex-col justify-center items-center"
                    >
                        <div className="h-24 w-24 md:w-40 md:h-40 lg:w-48 lg:h-48 2xl:w-64 2xl:h-64">
                            <Image
                                src={veg.imageUrlSmall}
                                width={300}
                                height={300}
                                alt={veg.name}
                                className="object-cover h-full w-full rounded-full"
                            />
                        </div>

                        <h2>{veg.name}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}
