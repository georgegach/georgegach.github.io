import { useEffect, useState } from "react";


export default function Art() {

    return (
        <>
            <div className="font-firago container mx-auto flex flex-col justify-center text-slate-700 ">

                {/* PAGE 1 */}

                <div className="page pageA4 bg-slate-50 flex flex-col justify-between ">
                    <div className="container pl-8 pr-2 py-8">

                        {/* NAME and SOCIAL */}
                        <div className="container w-full flex flex-row justify-center gap-x-8 pr-6">
                            <div className="name text-5xl text-right pt-1">
                                <div className="fname font-light">ᲒᲘᲝᲠᲒᲘ</div><div className="lname font-medium">ᲒᲐᲩᲔᲩᲘᲚᲐᲫᲔ</div>
                            </div>

                            <div className="social">
                                <div className="socitem flex flex-row space-x-2 items-center text-sm pb-2">
                                    <div className="socicon">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" className="w-5 h-5 fillCurrent" viewBox="0 0 32 32" >
                                            <g id="Style_2_copy_3">
                                                <g>
                                                    <g>
                                                        <path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#334155" />
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="style_4_1_">
                                                <g>
                                                    <rect fill="#FFFFFF" height="5.88" transform="matrix(0.7879 -0.6158 0.6158 0.7879 -7.8032 18.2727)" width="2.4" x="21.425" y="17.524" />
                                                    <path d="M22.513,24.284l-3.621-4.633c0,0-2.361-0.553-4.043-2.704c-1.681-2.151-1.647-4.576-1.647-4.576    L9.581,7.738c0,0-3.431,4.915,1.951,11.801S22.513,24.284,22.513,24.284z" fill="#FFFFFF" />
                                                    <rect fill="#FFFFFF" height="5.88" transform="matrix(0.7879 -0.6158 0.6158 0.7879 -2.4429 10.012)" width="2.4" x="12.113" y="5.612" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="socvalue">598-280-555</div>
                                </div>
                                <div className="socitem flex flex-row space-x-2 items-center text-sm pb-2">
                                    <div className="socicon">
                                        <a href="https://github.com/anbani" target="_blank" rel="noopener noreferrer nofollow" title="Github" className="flex items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fillCurrent">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="socvalue">github.com/georgegach</div>
                                </div>
                                <div className="socitem flex flex-row space-x-2 items-center text-sm pb-2">
                                    <div className="socicon">
                                        <a href="https://github.com/anbani" target="_blank" rel="noopener noreferrer nofollow" title="Github" className="flex items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fillCurrent">
                                                <g xmlns="http://www.w3.org/2000/svg" id="Style_2"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" /></g><g><polygon fill="#FFFFFF" points="6.518,21.815 11.707,15.291 6.518,12.119   " /><polygon fill="#FFFFFF" points="19.5,15.746 15.989,17.908 12.472,15.758 7.11,22.5 24.867,22.5   " /><polygon fill="#FFFFFF" points="15.988,16.864 25.482,11.017 25.482,9.5 6.518,9.5 6.518,11.076   " /><polygon fill="#FFFFFF" points="20.263,15.276 25.482,21.843 25.482,12.062   " /></g></g>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="socvalue">georgegach@outlook.com</div>
                                </div>

                                <div className="socitem flex flex-row space-x-2 items-center text-sm pb-2">
                                    <div className="socicon">
                                        <a href="https://github.com/anbani" target="_blank" rel="noopener noreferrer nofollow" title="Github" className="flex items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 fillCurrent">
                                                <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="socvalue">linkedin.com/in/georgegach</div>
                                </div>

                            </div>

                        </div>



                        {/* OBJECTIVE */}

                        <div className="mt-8 grid grid-cols-12 gap-x-4">
                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l pt-0"><b>objective</b><br /></div>
                            <div className="col-span-8">
                                <div className="flex flex-col justify-center">
                                    <div className="text-xs pt-1">Middle-level full-time position as a Data Scientist, ML Engineer or MLOps Engineer</div>
                                </div>
                            </div>


                        </div>


                        {/* PROFESSIONAL SKILLS */}

                        <div className="mt-8 grid grid-cols-12 gap-x-4">
                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l pt-1"><b>professional</b> skills</div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <div className="text-xs mt-2"><b>Data Science</b> – Extensive experience in Data Mining, Collection, Cleaning, Profiling and Feature Engineering using Pandas, BeautifulSoup, Spark, Matplotlib and etc.</div>
                                    <div className="text-xs mt-2"><b>Machine Learning</b> – Extensive experience at building and optimizing Classification, Regression and Time-Series forecasting models using sklearn, scipy, keras, xgboost, etc. Proficient at writing robust, highly parallelizable and memory efficient routines using Dask and Cython.</div>
                                    <div className="text-xs mt-2"><b>Dev Ops</b> – Ability to set up scalable clusters of microservices with CI/CD and monitoring using Docker, Kubernetes as a PaaS in Terraform. Long-time experience at managing Linux enviroments and bash scripting.</div>
                                    <div className="text-xs mt-2"><b>Web Dev</b> – Proficient at building progressive SSG/SSR SPAs using TailwindCSS, React and Next.JS. Ability to build dashboards and visualizations for static and real-time data streams using D3 and Plotly.</div>
                                    <div className="text-xs mt-2"><b>Databases</b> – Experience with SQL and NoSQL databases of Postgress, MySQL, MongoDB, MariaDB, Redis, Firebase, GraphQL, etc.</div>
                                    <div className="text-xs mt-2"><b>Analytics</b> – Experience with Google Data Studio, Analytics, Tag Manager and Facebook Insights.</div>
                                </div>
                            </div>

                        </div>

                        {/* ACADEMIC EXPERIENCE */}

                        <div className="mt-8 grid grid-cols-12 gap-x-4">
                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l pt-1"><b>academic</b> experience</div>
                            <div className="col-span-8">
                                <div className="flex flex-col mb-4">
                                    <div className="text-xl">Deep Learning Specialization<div className="inline-block pl-1  text-xs">from DeepLearning.AI</div></div>
                                    <div className="text-sm">Collection of online courses led by Andrew Yang</div>
                                    <div className="text-xs">– Sequence Models (NLP, LSTM, RNN, Attention, Transformers)</div>
                                    <div className="text-xs">– Convolutional Neural Networks (DL, Object Det/Seg, Facial Recogn., TensorFlow)</div>
                                    <div className="text-xs">– Structuring ML Projects (Multi-Task Learning, Decision Making, Inductive Transfer)</div>
                                    <div className="text-xs">– Hyperparameter Tuning, Regularization, Optimization (L2, Dropout, RMSprop, Adam…)</div>
                                    <div className="text-xs">– Neural Networks and Deep Learning (Neural Nets, Backpropagation, Numpy) </div>

                                </div>
                            </div>
                            <div className="col-span-2 text-xs pt-2">
                                May 2021 -<br /> Apr 2022
                            </div>

                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l"></div>
                            <div className="col-span-8">
                                <div className="flex flex-col mb-4">
                                    <div className="text-xl">Worcester Polytechnic Institute<div className="inline-block pl-1  text-xs">in Worcester, MA, USA</div></div>
                                    <div className="text-sm">Fulbright Scholarship for Graduate Studies in CompSci</div>
                                    <div className="text-xs">– Integration of Optical Flow in Facial Expression Recognition (TensorFlow, Keras)</div>
                                    <div className="text-xs">– Big Data Analytics and Hotspot detection of NYC Taxi trips (Spark, Scala, Python)</div>
                                    <div className="text-xs">– Genre-aware Music Composer using RNNs (TensorFlow, Magenta, Python)</div>
                                    <div className="text-xs">– Text mining of Wikipedia articles: classification, clustering and analysis (NLTK, Python)</div>
                                </div>
                            </div>
                            <div className="col-span-2 text-xs pt-2">
                                Aug 2017 -<br /> May 2019
                            </div>


                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l"></div>
                            <div className="col-span-8">
                                <div className="flex flex-col mb-4">
                                    <div className="text-xl">Tbilisi State University<div className="inline-block pl-1  text-xs">in Tbilisi, Georgia</div></div>
                                    <div className="text-sm">Undergraduate Study in CompSci</div>
                                    <div className="text-xs">– Spatial Modeling of Cell-Mediated Immune Response to Tumor Growth (C, MPI, Cuda) </div>
                                    <div className="text-xs">– Semantic analysis and classification of Georgian texts (Java, Naïve Bayes/SVM)</div>
                                    <div className="text-xs">– Traveling Salesman Problem using Genetic Algorithms (C++, JavaScript)</div>
                                </div>
                            </div>
                            <div className="col-span-2 text-xs pt-2">
                                Aug 2017 -<br /> May 2019
                            </div>

                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l"></div>
                            <div className="col-span-8">
                                <div className="flex flex-col mb-4">
                                    <div className="text-xl">Vilnius University<div className="inline-block pl-1  text-xs">in Vilnius, Lithuania</div></div>
                                    <div className="text-sm">Exchange Study in CompSci</div>
                                    <div className="text-xs">– Inference Engine project in Artificial Intelligence (Python, C++)</div>
                                    <div className="text-xs">– Agile project management - SCRUM Master certification</div></div>
                            </div>
                            <div className="col-span-2 text-xs pt-2">
                                Aug 2017 -<br /> May 2019
                            </div>

                        </div>
                    </div>
                    <div className="footer bg-slate-700 text-slate-100 text-xs flex flex-row justify-between px-6 h-8 items-center w-full">
                        <div className="tracking-widest">www.gach.ml</div>
                        <div className="tracking-widest">მაისი 2022</div>
                    </div>


                </div>


                {/* PAGE 2 */}

                <div className="page pageA4 bg-slate-50 text-slate-700 flex flex-col justify-between">
                    <div className="container pl-8 pr-2 py-8">



                        {/* PROFESSIONAL EXPERIENCE */}

                        <div className="mt-8 grid grid-cols-12 gap-x-4">
                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l pt-1"><b>professional</b> experience</div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <div className="text-xl">Bank of Georgia<div className="inline-block pl-1  text-xs">in Tbilisi, Georgia</div></div>
                                    <div className="text-l">Web Application Developer</div>
                                    <div className="text-xs">Responsibilities – Development and support of the brand new and existing web products.</div>
                                    <div className="text-xs">Highlight – www.bestofbog.ge - a solo project I worked on with beautiful UI/UX and progressive enhancements. (SPA, PWA, ES/JS)</div>
                                </div>
                            </div>
                            <div className="col-span-2 text-xs pt-8">
                                Feb 2017 -<br /> Jul 2017
                            </div>

                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l"></div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <div className="text-l mt-4">Software Engineering Intern</div>
                                    <div className="text-xs">Gained general understanding of core banking ins and outs with financial and technical details. Tackled numerous engineering and algorithmic problems using various techniques on range of platforms. (Java, .NET, Android, iOS, PLSQL, Web)</div>
                                </div>
                            </div>
                            <div className="col-span-2 text-xs pt-6">
                                May 2016 -<br /> Jan 2017
                            </div>

                        </div>


                        {/* SIDE PROJECTS */}

                        <div className="mt-8 grid grid-cols-12 gap-x-4">
                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l pt-1"><b>side</b><br />projects</div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <div className="text-l">ᲐᲜᲑᲐᲜᲘ ჻ ANBANI</div>
                                    <div className="text-xs">An interactive educational platform designed to preserve and develop every iteration of Georgian alphabet on the internet using Web Technologies, Modern Typesetting and AI.</div>
                                    <div className="text-xs">– Anbani.ge - collection of web tools with 2k monthly active visitors.</div>
                                    <div className="text-xs">– Anbani.js - javascript toolkit for working with every iteration of Georgian alphabet.</div>
                                    <div className="text-xs">– Anbani Words - Georgian Wikipedia transformed as TF-IDF using Google's wordcloud visualization.</div>
                                    <div className="text-xs">– Anbani Fake - Fake Georgian names and texts generated using CharRNN Deep Learning model.</div>
                                </div>
                            </div>
                            <div className="col-span-2 text-xs pt-2">
                                {/* Feb 2017 -<br /> Jul 2017 */}
                            </div>

                            <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-l"></div>
                            <div className="col-span-8">
                                <div className="flex flex-col">
                                    <div className="text-l mt-4">flowiz</div>
                                    <div className="text-xs">Leading toolkit for converting optical flow artifacts into visualizable representations such as images, video and interactive web.</div>
                                </div>
                            </div>
                            <div className="col-span-2 text-xs pt-2">
                                {/* May 2016 -<br /> Jan 2017 */}
                            </div>

                        </div>
                    </div>
                    <div className="footerWrapper dotgridfooter flex flex-col bg-slate-200 justify-center items-center ">
                        <img src="assets/qr-code.png" className="w-40 py-8" alt="" />
                        <div className="footer bg-slate-700 text-slate-100 text-xs flex flex-row justify-between px-6 h-8 items-center w-full">
                            <div className="tracking-widest">www.gach.ml</div>
                            <div className="tracking-widest">მაისი 2022</div>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}