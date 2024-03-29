
import Gallery from '../folder/Gallery'
import Art from '../projects/Art'
import ArtZipfv from '../projects/ArtZipf'
import SVGWaves from '../shared/SVGWaves'
import Link from 'next/link'


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
                        <span>I'm </span> <h1 className="inline-flex">Giorgi</h1></div>

                    <h2 className='text-xl md:text-4xl text-slate-100 text-center'
                    >Data Architect and Platform Engineer</h2>


                </div>

                <div className="w-full">
                    <SVGWaves className={`translate-y-1`} />

                    <div className="flex flex-col bg-slate-200 relative w-full items-center justify-between py-16 md:py-32 gap-8 ">
                        <img className="rounded-full absolute z-10 top-0 -translate-y-3/4 w-1/3 md:w-1/4 max-w-xs cursor-move shadow-md shadow-slate-500/40"
                            src="/assets/profile.jpg"
                            alt="George's profle picture" />


                        <div className='prose flex-col flex space-y-2 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between'>
                            <div   className="socitem flex flex-row space-x-2 text-sm ">
                                <div   className="socicon">
                                    <a href="https://github.com/anbani" target="_blank" rel="noopener noreferrer nofollow" title="Github" className="flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fillCurrent">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                        </svg>
                                    </a>
                                </div>
                                <a href="https://github.com/georgegach" target="_blank" className="socvalue">github.com/georgegach</a>
                            </div>



                            <div   className="socitem flex flex-row space-x-2 items-center text-sm ">
                                <div   className="socicon">
                                    <a href="https://github.com/anbani" target="_blank" rel="noopener noreferrer nofollow" title="Github" className="flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 fillCurrent">
                                            <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <a href="https://linkedin.com/in/georgegach/" target="_blank" className="socvalue">linkedin.com/in/georgegach</a>
                            </div>
                        </div>

                        <div   className="font-firago text-sm text-justify prose px-6 text-secondary-700 drop-shadow-sm">
                            <div className='bg-slate-100 p-4 -mx-4 mb-4 text-sm'>

                            🚩 Open to full-time and consulting opportunities as a Data Architect.. <br/><br/> 
                            💌 Feel free to reach out on my socials or via <a href="mailto:georgegach@outlook.com">email</a>.<br/> 
                            📜 Recruiters, you may obtain my latest resume <Link href="/resume"><a>here</a></Link>.
                            </div>
                            <div className="text-xs">
                                

                            With over 10+ years in the field, I'm currently specializing in the design and deployment of robust cloud-native Data Platforms focused on modern ML lifecycle and self-serve analytics. <br /><br />
                            
                            I also have extensive experience in building scalable ML systems, training RecSys, Geospatial and NLP/LLM models, Big Data real-time and batched pipelines with Kafka and Spark, RCT experiment design and hypothesis testing, GCP/AWS/Azure cloud integration and deployment, MLOps and server maintenance, crafting insightful apps and dashboards in PowerBI/Streamlit. <br /><br />

                            I love building systems end-to-end which requires a lot of full-stack expertise that I have accumulated throughout my career. On this website, you'll find snippets of some of the projects I worked on. For more details, check out my resume below or just send a DM on Linkedin. <br /><br />

                            </div>

                        </div>

                        <div className="font-firago container mx-auto flex flex-col justify-center text-slate-800 ">

                            <Link href="/resume">
                                <a className="hello hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 p-5 text-center mx-auto  bg-slate-800 w-72 mb-16 drop-shadow-xl">
                                    Open Resume
                                </a>
                            </Link >
                        </div>


                        <Gallery />
                        {/* <Art /> */}





                    </div>

                    <SVGWaves className={`-scale-y-100 -translate-y-1`} />
                </div>


            </div>

            <div className="mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center  lg:-mt-20 mb-16" >

                <p className='text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter text-center mb-2 md:mb-12'>
                    Thanks for visiting!
                </p>

                {/* <p className='text-xl md:text-2xl text-slate-100 font-relishlight text-center mb-2 md:mb-10 px-8'>
                    Here's a unique generative art I just made personally for you.
                </p> */}


                <ArtZipfv />

                {/* <p className="text-5xl md:text-7xl text-slate-100 font-relishlight tracking-tighter mt-2 md:mt-10">
                    Farewell
                </p> */}

            </div>

        </>
    )
}