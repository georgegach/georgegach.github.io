


export default function Card({ name, descEn, descKa, img, tags = [], url }) {

    // console.log(name, descEn, descKa, img, tags)

    return (
        <>
            <a href={url} target="_blank">

                <div className="max-w-sm overflow-hidden shadow-md pb-4 flex flex-col gap-4 border-brand-600 font-anbanisans rounded-3xl 
            
            cursor-pointer hover:scale-105 transition ease-in-out hover:shadow-xl

            bg-secondary-100
            
            ">

                    <div className="relative overflow-hidden rounded-b-3xl shadow-md">

                        <img className="w-full aspect-video object-cover " src={img} alt="Black Marble" />
                        <div className="flex flex-col justify-end text-3xl px-4 absolute bottom-0 text-secondary-100 pb-4 w-full h-full bg-gradient-to-b from-transparent via-secondary-900/20 to-secondary-900/70 gradient-sto">
                            {name}
                        </div>
                    </div>
                    <div className="text-lg px-4 text-secondary-500 ">
                        {descEn}
                    </div>
                    <div className="text-lg px-4 flex flex-row gap-2 text-secondary-100 flex-wrap">
                        {tags.map((t, i) => {
                            return <span key={i} className="bg-slate-400 rounded-full px-3 py-1">{t}</span>

                        })}
                    </div>
                </div>
            </a>


        </>
    )
} 