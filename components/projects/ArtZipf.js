import { useEffect, useState } from "react";


const rounds = [
    'rounded-tl-full',
    'rounded-tr-full',
    'rounded-bl-full',
    'rounded-br-full',
    // 'rounded-full',
]

const palette = [
    'slate',
    // 'red',
    // 'orange',
    // 'amber' ,
    // 'yellow',
    // 'lime',
    // 'emerald',
    // 'teal',
    // 'cyan',
    // 'sky',
    // 'blue',
    'indigo',
    // 'violet',
    // 'purple',
    // 'fuchsia',
    // 'pink',
    'rose',
    'indigo',
    // 'green',

]

const intensity = [
    300,
    400,
    500,
    600,
]

const lel = "bg-red-300 bg-red-400 bg-red-500 bg-red-600 bg-orange-300 bg-orange-400 bg-orange-500 bg-orange-600 bg-amber-300 bg-amber-400 bg-amber-500 bg-amber-600 bg-yellow-300 bg-yellow-400 bg-yellow-500 bg-yellow-600 bg-lime-300 bg-lime-400 bg-lime-500 bg-lime-600 bg-green-300 bg-green-400 bg-green-500 bg-green-600 bg-emerald-300 bg-emerald-400 bg-emerald-500 bg-emerald-600 bg-teal-300 bg-teal-400 bg-teal-500 bg-teal-600 bg-cyan-300 bg-cyan-400 bg-cyan-500 bg-cyan-600 bg-sky-300 bg-sky-400 bg-sky-500 bg-sky-600 bg-blue-300 bg-blue-400 bg-blue-500 bg-blue-600 bg-indigo-300 bg-indigo-400 bg-indigo-500 bg-indigo-600 bg-violet-300 bg-violet-400 bg-violet-500 bg-violet-600 bg-purple-300 bg-purple-400 bg-purple-500 bg-purple-600 bg-fuchsia-300 bg-fuchsia-400 bg-fuchsia-500 bg-fuchsia-600 bg-pink-300 bg-pink-400 bg-pink-500 bg-pink-600 bg-rose-300 bg-rose-400 bg-rose-500 bg-rose-600 bg-slate-300 bg-slate-400 bg-slate-500 bg-slate-600"



export default function ArtZipfv() {
    const [artArray, setArtArray] = useState([])


    function sample(array) {
        return array[Math.floor(Math.random(1) * array.length)];
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function zipfColors(num) {
        // let colors = shuffle(palette)
        let colors = palette
        let classes = []

        for (let i = 0; i < colors.length; i++) {
            let n = Math.floor((num / 2) / (i + 1))
            console.log(n)

            for (let z = 0; z < n; z++) {
                classes.push(`h-14 w-14 md:h-20 md:w-20 bg-${colors[i]}-${sample(intensity)} ${sample(rounds)}`)
            }
        }

        console.log(num, classes.length)

        return shuffle(classes).slice(0, num)
    }


    function generateArtArray(num) {
        return Array.apply(0, Array(num)).map((_, i) => {
            let randcolor = sample(palette);
            let randintensity = sample(intensity)
            let randshape = sample(rounds)

            let className = `h-10 w-10 md:h-20 md:w-20 bg-${randcolor}-${randintensity} ${randshape}`
            return className;
        })
    }

    useEffect(() => {
        setArtArray(zipfColors(12))
    }, [])

    const wordlist = palette.map(p => intensity.map(i => ` bg-${p}-${i} `))



    return (
        <>
            <div className="container mx-auto flex flex-col justify-center items-center h-full">

                <div className="border-[20px] md:border-[40px] cursor-pointer border-secondary-800 grid grid-cols-3 grid-rows-4 bg-secondary-200 p-5 md:p-10
                shadow-lg  shadow-slate-900/50 shadow-inner
                drop-shadow-xl 

                "
                    onClick={event => { setArtArray(zipfColors(12)) }}
                >

                    {artArray.map((item, i) => {
                        return (
                            <span key={i}
                                className={item}></span>
                        )
                    })}

                </div>

                {/* <div className="text-sm mt-20">{wordlist}</div> */}

            </div>
        </>
    )
}