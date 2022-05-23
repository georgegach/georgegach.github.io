
import { projects } from '../../lib/data.js'
import Card from './Card'


export default function Gallery({}) {

    return  (

        <>
            <div className="max-w-screen-xl grid grid-cols-1 px-4 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {
                projects.map((item, i) => {
                    return <Card 
                        key={item.name}
                        name={item.name}
                        descEn={item.desc.en}
                        descKa={item.desc.ka}
                        img={item.img}
                        tags={item.tags}
                        url={item.url}

                    />
                })
            }


            </div>
        </>
    )
}