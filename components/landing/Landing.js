
import Art from '../projects/Art'
import ArtZipfv from '../projects/ArtZipf'
import SVGWaves from '../shared/SVGWaves'


export default function Landing({ }) {



    return (
        <>

            <div className="w-full">

                <div className="mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center select-none 
                mb-8 md:mb-2">

                    <p className="text-9xl text-slate-100 font-relishlight tracking-tighter mt-24">
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

                    <div className="flex flex-col bg-slate-200 relative w-full items-center justify-between">
                        <img className="rounded-full absolute z-10 top-0 -translate-y-3/4 w-1/4 max-w-xs cursor-move shadow-md shadow-slate-500/40"
                            src="/assets/profile-512.jpg"
                            alt="George's profle picture" />

                        <div className="font-anbanisans prose mt-32 mb-20 px-6">
                            For the past decade I've been designing and building awesome web and mobile apps. After the graduate degree program in US as a Fulbrighter, I've transitioned my career into Machine Learning which I firmly believe is software development 2.0 and future of the entire industry. <br /><br />

                            On this website you'll find some of the projects I worked on spanning but not limited to Data Science, Web and Mobile apps, Music, Design, Typography and so on. <br /><br />

                            Throughout my career I've interacted with great many frameworks and consider myself to be a language-agnostic engineer. Nevertheless, these are the ones I'm currently favoring and keeping my skills sharp: PyTorch, Pandas, Numpy, Docker, D3, Next and React. On the Open-Source tab you'll see more of some of my favorite things about FOSS ecosystem that I love and support.

                        </div>

                        {/* <Art /> */}



                    </div>

                    <SVGWaves className={`-scale-y-100 -translate-y-1`} />
                </div>


            </div>

            <div className="mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center  lg:-mt-20 mb-16" >

                <p className='text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter text-center'>
                    Thanks for visiting!
                </p>

                <p className='text-xl md:text-4xl text-slate-100 font-relishlight tracking-tighter text-center mb-2 md:mb-10'>
                    Here's a unique generative art I just made for you.
                </p>


                <ArtZipfv />

                <p className="text-2xl md:text-4xl text-slate-100 font-relishlight tracking-tighter mt-2 md:mt-10">
                    Sincerely, George
                </p>

            </div>

        </>
    )
}