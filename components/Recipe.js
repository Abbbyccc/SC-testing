import Image from 'next/image'
import Link from 'next/link'

export default function Recipe({ props }) {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4 m-8 ">
            <div className="row-span-3 h-24 w-24 md:w-40 md:h-40 lg:w-48 lg:h-48 2xl:w-64 2xl:h-64">
                <Image
                    className=" rounded-md object-cover h-full w-full"
                    src={props.image}
                    alt={props.label}
                    width="300"
                    height="300"
                />
            </div>
            <div className="col-span-2">{props.label}</div>

            <Link className="row-span-2 col-span-2 " href={props.url} passHref>
                read full recipe
            </Link>
        </div>
    )
}
