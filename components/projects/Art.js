import { useEffect, useState } from "react";
import Link from 'next/link'


const genetics = {
    corner: {
        'rounded-tl-full': 1,
        'rounded-tr-full': 1,
        'rounded-bl-full': 4,
        'rounded-br-full': 4,
        'rounded-full': 10,
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
    const [artValue, setArtValue] = useState('')

    const calcArtValue = () => {
        let val = artArray.reduce((acc, a) => {
            return acc + a.value
        }, 0)

        let n_stars = parseInt(val/10)

        return '⭐️'.repeat(n_stars)
    }

    useEffect(() => {
        setArtArray(generateDNA(12))
        setArtValue(calcArtValue())
    }, [])


    useEffect(() => {
        // setArtArray(generateDNA(12))
        setArtValue(calcArtValue())
    }, [artArray])

    const wordlist = Object.keys(genetics.palette).map(p => Object.keys(genetics.intensity).map(i => ` bg-${p}-${i} `))



    return (
        <>
            <div className="container mx-auto flex flex-col justify-center items-center h-full pt-6 print:p-0 ">
                <div className="flex flex-row space-x-2">


                    <Link href="/">
                        <a className="print:hidden hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 text-center mx-auto bg-slate-800 px-8 py-4 my-2 drop-shadow-xl">
                            Back to Home Page
                        </a>
                    </Link >

                    <button
                        className=" print:hidden hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 text-center mx-auto bg-slate-800 p-4 my-2 drop-shadow-xl"
                        onClick={event => { setArtArray(generateDNA(12)) }}>
                        ✨
                    </button>

                </div>

                <div className="border-8 m-4 sm:m-0 sm:border-[30px] border-secondary-800 grid grid-cols-3 grid-rows-4 bg-white shadow-lg p-8 sm:p-20">

                    {artArray.map((item, i) => {
                        return (
                            <span key={i}
                                onClick={(event) => replaceStrand(i, artArray, setArtArray)}
                                className={item.strand + " transition-all"}></span>
                        )
                    })}

                </div>



                <div className="print:hidden text-xl pt-4 font-bold w-32 text-center break-words">{artValue}</div>

                {/* <div className="text-sm mt-20">{wordlist}</div> */}

            </div>
        </>
    )
}