
import Gallery from '../folder/Gallery'
import Art from '../projects/Art'
import ArtZipfv from '../projects/ArtZipf'
import SVGWaves from '../shared/SVGWaves'


export default function Landing({ }) {



    return (
        <>

            <div className="w-full">

                <div className="mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center select-none 
                mb-8 md:mb-2">

                    <p className="text-9xl text-slate-100 font-relishlight tracking-tighter mt-44">
                        Hi
                    </p>

                    <div className='text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter'
                    >
                        <span>I'm </span> <h1 className="inline-flex">George</h1></div>

                    <h2 className='text-xl md:text-4xl text-slate-100 text-center'
                    >Machine Learning and Web Engineer</h2>


                </div>

                <div className="w-full">
                    <SVGWaves className={`translate-y-1`} />

                    <div className="flex flex-col bg-slate-200 relative w-full items-center justify-between py-16 md:py-32 gap-16 ">
                        <img className="rounded-full absolute z-10 top-0 -translate-y-3/4 w-1/3 md:w-1/4 max-w-xs cursor-move shadow-md shadow-slate-500/40"
                            src="/assets/profile-512.jpg"
                            alt="George's profle picture" />

                        <div className="font-anbanisans prose px-6 text-secondary-700">
                            For the past decade, I've had the pleasure to work in various fields of software engineering. It all started out with the delight of building awesome web and mobile apps almost a decade ago. 
                            Later on, as a Fulbright Scholar to the US, I've had the pleasure to rediscover my long-time passion for all things Data which inevitably nudged to me delve into the rich world of modern AI during my graduate studies. <br /><br />
                            The field I chose to follow is called Machine Learning which concerns itself in delegating conventionally unprogrammable tasks to a computer equipped with a bunch of clever algorithms that have been exceeding super-human comprehension every year for the past decade.  
                            At this point, it's beyond a doubt that ML is the software development 2.0, or at least a big chunk of it, and I'm excited to be part of that journey going forward.<br /><br />

                            On this website you'll find some of the projects I worked on spanning but not limited to Data Science and ML, Web and Mobile apps, Music, Design, Typography and so on. <br /><br />


                        </div>

                        <Gallery/>
                        {/* <Art /> */}

                        <div className="font-anbanisans prose px-6 text-secondary-700">

                            Throughout my career I've interacted with great many frameworks and consider myself to be a language-agnostic engineer. Nevertheless, these are the ones I'm currently favoring and keeping my skills sharp: PyTorch, Pandas, Numpy, Docker, D3, Next and React. On the Open-Source tab you'll see more of some of my favorite things about FOSS ecosystem that I love and support.

                        </div>



                    </div>

                    <SVGWaves className={`-scale-y-100 -translate-y-1`} />
                </div>


            </div>

            <div className="mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center  lg:-mt-20 mb-16" >

                <p className='text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter text-center'>
                    Thanks for visiting!
                </p>

                <p className='text-xl md:text-2xl text-slate-100 font-relishlight text-center mb-2 md:mb-10 px-8'>
                    Here's a unique generative art I just made for you.
                </p>


                <ArtZipfv />

                <p className="text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter mt-2 md:mt-10">
                    Farewell
                </p>

            </div>

        </>
    )
}