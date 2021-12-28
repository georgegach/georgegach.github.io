import { useEffect, useState } from "react";


const genetics = {
    corner: {
        'rounded-tl-full': 1,
        'rounded-tr-full': 1,
        'rounded-bl-full': 4,
        'rounded-br-full': 4,
    },

    palette: {
        // 'red': 30,
        // 'orange': 30,
        // 'amber': 16 ,
        'yellow': 16,
        // 'lime': 32,
        // 'green': 30,
        'emerald': 32,
        // 'teal': 30,
        // 'cyan': 30,
        // 'sky': 30,
        // 'blue': 30,
        'indigo': 8,
        // 'violet': 30,
        // 'purple': 30,
        // 'fuchsia': 30,
        // 'pink': 30,
        'rose': 64,

        'slate': 1,
    },

    intensity: {
        300: 1,
        400: 1,
        500: 1,
        600: 30,
    }
}


function obtain(dict) {
    let dictkeys = Object.keys(dict)
    let sum = dictkeys.reduce((acc, nuc) => {
        return acc + dict[nuc]
    }, 0)
    let choices = [...Array(dictkeys.length).keys()].map(i => {
        let rarity = dict[dictkeys[i]]
        let chance = Math.floor(sum / rarity)
        return Array(chance).fill(i)
    }).flat()

    console.log(choices)

    let nucleotide = dictkeys[choices[Math.floor(Math.random() * choices.length)]]
    return {
        nuc: nucleotide,
        value: dict[nucleotide]
    };
}


function generateDNA(num) {
    const dna = Array.from(Array(num).keys()).map(_ => {
        let p = obtain(genetics.palette)
        let i = obtain(genetics.intensity)
        let c = obtain(genetics.corner)
        let strand = `h-20 w-20 bg-${p.nuc}-${i.nuc} ${c.nuc}`
        return {
            strand: strand,
            value: p.value + i.value + c.value
        }
    })
    console.log(dna)

    return dna

}

function replaceStrand(ith, dna, setter) {
    let p = obtain(genetics.palette)
    let i = obtain(genetics.intensity)
    let c = obtain(genetics.corner)
    let newStrand = `h-20 w-20 bg-${p.nuc}-${i.nuc} ${c.nuc}`

    let copyDna = JSON.parse(JSON.stringify(dna))
    copyDna[ith] = {
        strand: newStrand,
        value: p.value + i.value + c.value
    }
    setter(copyDna)
}



const lel = "bg-red-300 bg-red-400 bg-red-500 bg-red-600 bg-orange-300 bg-orange-400 bg-orange-500 bg-orange-600 bg-amber-300 bg-amber-400 bg-amber-500 bg-amber-600 bg-yellow-300 bg-yellow-400 bg-yellow-500 bg-yellow-600 bg-lime-300 bg-lime-400 bg-lime-500 bg-lime-600 bg-green-300 bg-green-400 bg-green-500 bg-green-600 bg-emerald-300 bg-emerald-400 bg-emerald-500 bg-emerald-600 bg-teal-300 bg-teal-400 bg-teal-500 bg-teal-600 bg-cyan-300 bg-cyan-400 bg-cyan-500 bg-cyan-600 bg-sky-300 bg-sky-400 bg-sky-500 bg-sky-600 bg-blue-300 bg-blue-400 bg-blue-500 bg-blue-600 bg-indigo-300 bg-indigo-400 bg-indigo-500 bg-indigo-600 bg-violet-300 bg-violet-400 bg-violet-500 bg-violet-600 bg-purple-300 bg-purple-400 bg-purple-500 bg-purple-600 bg-fuchsia-300 bg-fuchsia-400 bg-fuchsia-500 bg-fuchsia-600 bg-pink-300 bg-pink-400 bg-pink-500 bg-pink-600 bg-rose-300 bg-rose-400 bg-rose-500 bg-rose-600 bg-slate-300 bg-slate-400 bg-slate-500 bg-slate-600"



export default function Art() {
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
        let colors = shuffle(palette)
        let classes = []

        for (let i = 0; i < colors.length; i++) {
            let n = Math.floor((num / 2) / (i + 1))
            console.log(n)

            for (let z = 0; z < n; z++) {
                classes.push(`h-20 w-20 bg-${colors[i]}-${sample(intensity)} ${sample(rounds)}`)
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

            let className = `h-20 w-20 bg-${randcolor}-${randintensity} ${randshape}`
            return className;
        })
    }

    useEffect(() => {
        setArtArray(generateDNA(12))
    }, [])

    const wordlist = Object.keys(genetics.palette).map(p => Object.keys(genetics.intensity).map(i => ` bg-${p}-${i} `))



    return (
        <>
            <div className="container mx-auto flex flex-col justify-center items-center h-full">

                <button className=" bg-lime-500 text-white text-3xl active:bg-lime-600 p-4 m-8 rounded-full" onClick={event => { setArtArray(generateDNA(12)) }}>Re-Generate</button>
                <div className="border-[30px] border-secondary-800 grid grid-cols-3 grid-rows-4 bg-white shadow-lg p-20">

                    {artArray.map((item, i) => {
                        return (
                            <span key={i}
                                onClick={(event) => replaceStrand(i, artArray, setArtArray)}
                                className={item.strand}></span>
                        )
                    })}

                </div>

                <div className="text-5xl font-bold mx-auto">Value: {artArray.reduce((acc, a) => {
                    return acc + a.value
                }, 0)}</div>

                <div className="text-sm mt-20">{wordlist}</div>

            </div>
        </>
    )
}