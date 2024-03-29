import { useEffect, useState } from "react";
import Link from 'next/link'


export default function Resume() {

  useEffect(() => {
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, [])

  return (
    <>
      <div className="font-firago container mx-auto flex flex-col justify-center text-slate-800 ">

        <a href="/assets/resume/georgegach_resume.pdf" className="hello hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 p-5 text-center mx-auto mt-16 bg-slate-800 w-72 drop-shadow-xl" target="_blank">
          Download Resume
        </a>

        <Link href="/">
          <a className="hello hover:bg-slate-900 hover:shadow-lg text-sm tracking-widest text-slate-50 p-5 text-center mx-auto mt-4 bg-slate-800 w-72 mb-8 drop-shadow-xl">
            Back to Home Page
          </a>
        </Link >

        {/* PAGE 1 */}

        <div id="page1" className="page pageA4 flex flex-col justify-between">
          <div className="container pl-10 pr-12 pt-8">

            {/* NAME and SOCIAL */}
            <div className="container w-full flex flex-row justify-center tracking-wider gap-x-8 pr-6">
              <div className="name text-5xl text-right pb-2 tracking-wide font-italiana ">
                <div className="fname text-secondary-600">Giorgi</div><div className="lname text-5xl text-secondary-500 ">Gachechiladze</div>
              </div>

              <div className="social pt-3">
                {/* <div className="socitem flex flex-row space-x-2 items-center text-sm pb-2">
                  <div className="socicon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1" className="w-5 h-5 fillCurrent" viewBox="0 0 32 32" >
                      <g id="Style_2_copy_3">
                        <g>
                          <g>
                            <path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" fill="#1e293b" />
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
                  <div className="socvalue">(+995) 598 280 555</div>
                </div> */}
                <div className="socitem flex flex-row space-x-2 items-center text-sm pb-2">
                  <div className="socicon">
                    <a href="https://github.com/anbani" target="_blank" rel="noopener noreferrer nofollow" title="Github" className="flex items-center ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fillCurrent">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                    </a>
                  </div>
                  <a href="https://github.com/georgegach" target="_blank" className="socvalue">github.com/georgegach</a>
                </div>
                <div className="socitem flex flex-row space-x-2 items-center text-sm pb-2">
                  <div className="socicon">
                    <a href="https://github.com/anbani" target="_blank" rel="noopener noreferrer nofollow" title="Github" className="flex items-center ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fillCurrent">
                        <g xmlns="http://www.w3.org/2000/svg" id="Style_2"><g><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16s16-7.164,16-16C32,7.163,24.837,0,16,0z" /></g><g><polygon fill="#FFFFFF" points="6.518,21.815 11.707,15.291 6.518,12.119   " /><polygon fill="#FFFFFF" points="19.5,15.746 15.989,17.908 12.472,15.758 7.11,22.5 24.867,22.5   " /><polygon fill="#FFFFFF" points="15.988,16.864 25.482,11.017 25.482,9.5 6.518,9.5 6.518,11.076   " /><polygon fill="#FFFFFF" points="20.263,15.276 25.482,21.843 25.482,12.062   " /></g></g>
                      </svg>
                    </a>
                  </div>
                  <a href="mailto:georgegach@outlook.com" className="socvalue">georgegach@outlook.com</a>
                </div>

                <div className="socitem flex flex-row space-x-2 items-center text-sm pb-2">
                  <div className="socicon">
                    <a href="https://github.com/anbani" target="_blank" rel="noopener noreferrer nofollow" title="Github" className="flex items-center ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 fillCurrent">
                        <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"></path>
                      </svg>
                    </a>
                  </div>
                  <a href="https://linkedin.com/in/georgegach/" target="_blank" className="socvalue">linkedin.com/in/georgegach</a>
                </div>

              </div>

            </div>



            {/* OBJECTIVE */}

            <div className="mt-6 grid grid-cols-12 gap-x-4">
              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm pt-0"><b>objective</b><br /></div>
              <div className="col-span-10">
                <div className="flex flex-col justify-center">
                  <div className="text-xs pt-0.5">Principal-level full-time remote or on-site position as a Data Architect or ML Cloud Platform Engineer.</div>
                </div>
              </div>


            </div>

            {/* NEW PROFESSIONAL EXPERIENCE */}



            {/* PROFESSIONAL EXPERIENCE */}

            <div className="mt-6 grid grid-cols-12 gap-x-4 text-justify">
              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm pt-1"><b>professional</b> experience</div>

              <div className="col-span-10">
                <div className="flex flex-col">
                  <div className="text-xl">Space International<div className="inline-block pl-1  text-xs">in Tbilisi, Georgia </div></div>
                  <div className="text-l">Data Architect<div className="inline-block text-xs"><span className="text-slate-300 font-bold text-base px-0.5">჻</span> Dec 2023 - Present </div></div>
                  <div className="text-xs">Design and implementation of a robust cloud-native hybrid Data Platform suited for stringent data residency regulations while utilizing cutting-edge Lakehouse architecture. Deployment and adoption of modern ML lifecycle tools and paradigms. Performance monitoring and optimization of data products. Evaluation of modern data ecosystem and formation of Data Strategy. </div>
                </div>
              </div>

              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm"></div>

              <div className="col-span-10 mt-4">
                <div className="flex flex-col">
                  <div className="text-xl">Bank of Georgia<div className="inline-block pl-1  text-xs">in Tbilisi, Georgia </div></div>
                  <div className="text-l">Senior Data Scientist<div className="inline-block text-xs"><span className="text-slate-300 font-bold text-base px-0.5">჻</span> Aug 2022 - Dec 2023 </div></div>
                  <div className="text-xs">Solution architecture and server deployment for real-time contextual recommendation engine. Research and application of on-prem and remote Large Language Models in non-financial context. Design and maintenance of awesome streamlit internal apps and dashboards. RCT experiment design and hypothesis testing. Geospatial data clustering and anomaly detection. GCP and OpenAI integration.</div>
                </div>
              </div>

              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm "></div>
              <div className="col-span-10">
                <div className="flex flex-col">
                  {/* <div className="text-l mt-4">Software Engineer<div className="inline-block text-xs"><span className="text-slate-300 font-bold text-base px-0.5">჻</span> Feb 2017 - Jul 2017 </div></div> */}
                  <div className="text-l mt-4">Software Engineer<div className="inline-block text-xs"><span className="text-slate-300 font-bold text-base px-0.5">჻</span> May 2016 - Jul 2017 </div></div>
                  <div className="text-xs">Gained a general understanding of core banking ins and outs with financial and technical details during an intensive internship. Tackled numerous engineering and algorithmic problems using various techniques on a range of platforms. Joined the Digital Channels Unit as a full-time software engineer primarily focused on Web and Android app development. Led and collaborated the development of several web apps of varying sizes. Aided in the launch of the first BOG mobile app on Android.</div>
                </div>
              </div>

              {/* <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm "></div>
              <div className="col-span-10">
                <div className="flex flex-col">
                  <div className="text-l mt-4">Software Engineering Intern<div className="inline-block text-xs"><span className="text-slate-300 font-bold text-base px-0.5">჻</span> May 2016 - Jan 2017 </div></div>
                  <div className="text-xs">Gained a general understanding of core banking ins and outs with financial and technical details. Tackled numerous engineering and algorithmic problems using various techniques on a range of platforms. <h>(Java, .NET, Android, iOS, PLSQL, Web)</h></div>
                </div>
              </div> */}

              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm"></div>
              <div className="col-span-10  mt-4">
                <div className="flex flex-col">
                  <div className="text-xl">Freelancer<div className="inline-block pl-1  text-xs">Remote</div></div>
                  <div className="text-l">Software Engineer<div className="inline-block text-xs"><span className="text-slate-300 font-bold text-base px-0.5">჻</span> Dec 2013 - June 2021 </div></div>
                  <div className="text-xs">Developed web applications in PHP and JavaScript, integrating with the Instagram and Facebook Graph APIs for image processing and curation, and crafted a dynamic RSS reader with a tabbed UI, filters, and search features.<h> (Javascript, PHP, Laravel, RSS/XML, IG/Graph APIs)</h></div>
                  <div className="text-xs">Developed utilities in C# and C++ to process proprietary log data into CSV/Excel spreadsheets and convert XML data into executable SQL scripts for streamlined database migrations.<h> (C#, WinForms, .NET, C++)</h></div>
                  <div className="text-xs">Developed high-availability ML models. Deployed real-time object detection pipelines for security cameras. Worked on several web crawlers and parsers. Designed efficient workloads of big data processing pipelines.<h> (K8s, FastAPI, Keras, Scrapy, BS4, Hadoop MapReduce)</h></div>
                </div>
              </div>

            </div>


            {/* PROFESSIONAL SKILLS */}

            <div className="mt-6 grid grid-cols-12 gap-x-4">
              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm pt-1"><b>professional</b> skills</div>
              <div className="col-span-10">
                <div className="flex flex-col ">
                  <div className="text-xs text-justify tracking-tight mt-1"><b>Data Architecture</b> – Experience in designing hybrid cloud-native on-premise and Lakehouse Data Platform implementing modern Data Science and MLOps lifecycle practices. Familiarity with Enterprise Data Modeling, Data Quality monitoring, Data Governance and Compliance policies. </div>
                  <div className="text-xs text-justify tracking-tight mt-1"><b>Machine Learning</b> – Experience in building and optimizing Classification, Regression, Ranking and Time-Series forecasting models for the domains of NLP, Vision and Tabular using Keras, XGBoost, Implicit, BERTopic, Spark ML, etc. Keen on coding robust, highly parallelizable, and memory-efficient algorithms using PySpark and Dask. </div>
                  <div className="text-xs text-justify tracking-tight mt-1"><b>Data Science</b> – Experience in Data Mining, Collection, Cleaning, Profiling, and Feature Engineering using PySpark, Pandas, Polars, BS4, Map/Reduce and etc. Ability to apply advanced analytical methods such as clustering and regression analysis, spatio-temporal modeling, sentiment and semantic mining, association rule and decision tree learning, topic modeling, dimensionality reduction and multivariate statistics using PCA/LDA, Randomized Controlled Trials experiment design and hypothesis testing, etc.</div>
                  <div className="text-xs text-justify tracking-tight mt-2"><b>ML Ops</b> – Experience in setting up fully Ansible-automated on-premise cloud-native Data Platforms with Jupyterhub, Airflow, MLflow, Minio. Keen on managing Linux environments, shell scripting and setting up clusters of microservices with CI/CD using Docker, Jenkins, Github Actions and K8s. Familiarity with Kubernetes, Prometheus, Grafana and Terraform. </div>
                </div>
              </div>

            </div>



          </div>
          <div className="footer bg-slate-800 text-slate-100 text-xs flex flex-row justify-between h-12 px-5 items-center w-full">
            <a href="https://georgegach.github.io/resume" target="_blank"><div className="tracking-widest font-medium">GEORGEGACH.GITHUB.IO<span className="text-slate-100/60 font-light tracking-widest"> / RESUME</span></div></a>
            <div className="tracking-widest font-light">FEB <b className="text-sm">2024</b></div>
          </div>


        </div>


        {/* PAGE 2 */}

        <div className="page pageA4 text-slate-800 flex flex-col justify-between mb-36">
          <div className="container pl-10 pr-12 py-8">


            {/* ACADEMIC EXPERIENCE */}

            <div className="grid grid-cols-12 gap-x-4 font-normal">
              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm pt-1"><b>academic</b> experience</div>
              <div className="col-span-10">
                <div className="flex flex-col mb-4">
                  <div className="text-xl">Deep Learning Specialization<div className="inline-block pl-1  text-xs">from DeepLearning.AI <span className="text-slate-300 font-bold text-base px-0.5">჻</span> May 2021 - Apr 2022</div></div>
                  <div className="text-sm">Foundational program and certification led by Dr. Andrew Ng</div>
                  <div className="text-xs">– Neural Networks and Deep Learning <h>(Vectorization, Neural Nets, Backpropagation, Activation, etc.)</h> </div>
                  <div className="text-xs">– Hyperparameter Tuning, Regularization, Optimization <h>(Dropout, Vanish/Expl Gradients, LR decay, etc.)</h></div>
                  <div className="text-xs">– Structuring ML Projects <h>(Validation, Metrics, Multi-Task Learning, e2e DL, Transfer Learning, etc.)</h></div>
                  <div className="text-xs">– Convolutional Neural Networks <h>(Foundation, Object Det, Facial Rec, Style Transfer, etc.)</h></div>
                  <div className="text-xs">– Sequence Models <h>(RNN, NLP, Word2Vec, GloVe, Attention, Transformer, etc.)</h></div>
                </div>
              </div>

              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm"></div>
              <div className="col-span-10">
                <div className="flex flex-col mb-4">
                  <div className="text-xl">Worcester Polytechnic Institute<div className="inline-block pl-1  text-xs">in Worcester, MA, USA <span className="text-slate-300 font-bold text-base px-0.5">჻</span> Aug 2017 - May 2019</div></div>
                  <div className="text-sm">Fulbright Scholarship and Graduate Study in Computer Science</div>
                  <div className="text-xs">– Integration of Optical Flow in Facial Expression Recognition <h>(TensorFlow, Keras)</h></div>
                  <div className="text-xs">– Big Data Analytics and Hotspot detection of NYC Taxi trips <h>(Spark, Scala, Python)</h></div>
                  <div className="text-xs">– Object Detection with range of Classical CV and Deep Learning models <h>(OpenCV, Keras)</h></div>
                  <div className="text-xs">– Genre-aware Music Composer using RNNs <h>(TensorFlow, Magenta, Python)</h></div>
                  <div className="text-xs">– Text mining of Wikipedia articles: classification, clustering, and analysis <h>(NLTK, Python)</h></div>
                  <div className="text-xs"></div>
                </div>
              </div>


              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm"></div>
              <div className="col-span-10">
                <div className="flex flex-col mb-4">
                  <div className="text-xl">Tbilisi State University<div className="inline-block pl-1  text-xs">in Tbilisi, Georgia <span className="text-slate-300 font-bold text-base px-0.5">჻</span> Sep 2012 - May 2016</div></div>
                  <div className="text-sm">Undergraduate Study in Computer Science</div>
                  <div className="text-xs">– Spatial Modeling of Cell-Mediated Immune Response to Tumor Growth <h>(C, MPI, Cuda)</h> </div>
                  <div className="text-xs">– Semantic analysis and classification of Georgian texts <h>(Java, Naïve Bayes/SVM)</h></div>
                  <div className="text-xs">– Traveling Salesman Problem using Genetic Algorithms <h>(C++, JavaScript)</h></div>
                  <div className="text-xs"></div>
                </div>
              </div>

              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm"></div>
              <div className="col-span-10 pb-1">
                <div className="flex flex-col">
                  <div className="text-xl">Vilnius University<div className="inline-block pl-1  text-xs">in Vilnius, Lithuania <span className="text-slate-300 font-bold text-base px-0.5">჻</span> Sep 2014 - Jan 2015</div></div>
                  <div className="text-sm">Exchange Study in Computer Science</div>
                  <div className="text-xs">– Inference Engine project in Artificial Intelligence <h>(Python, C++)</h></div>
                  <div className="text-xs"></div>
                  <div className="text-xs">– Agile project management - SCRUM Master certification masterclass</div></div>
              </div>

            </div>

            {/* SIDE PROJECTS */}

            <div className="mt-6 grid grid-cols-12 gap-x-4">
              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm pt-1"><b>side</b><br />projects</div>
              <div className="col-span-10 ">
                <div className="flex flex-col text-left">
                  <div className="text-l">ᲐᲜᲑᲐᲜᲘ ჻ ANBANI</div>
                  <div className="text-xs"><a className="underline" href="https://anbani.ge" target="_blank">Anbani.ge</a> is an interactive platform that uses web technologies, modern typesetting, and AI to preserve each iteration of Georgian alphabet online. Included are <a className="underline" href="https://anbani.ge/wordnet" target="_blank">Anbani Wordnet</a>, a AI-tool offering unsupervised relevant word suggestions; <a className="underline" href="https://github.com/anbani/anbani.js" target="_blank">Anbani.JS</a> and <a className="underline" href="https://github.com/anbani/anbani.py" target="_blank">Anbani.Py</a>, toolkits for tasks related to the Georgian alphabet and NLP; and <a className="underline" href="https://anbani.ge/textart" target="_blank">Anbani TextArt</a>, the first Georgian text art generator.</div>
                  <div className="text-xs">{/* Feb 2017 - Jul 2017 */}</div>
                </div>
              </div>

              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm "></div>
              <div className="col-span-10 pb-1">
                <div className="flex flex-col">
                  <div className="text-l mt-4">Flowiz</div>
                  <div className="text-xs">Leading Python <a class="underline" href="https://github.com/georgegach/flowiz/" target="_blank">toolkit</a> to convert optical flow estimation artifacts into visualizable representations. </div>
                  <div className="text-xs">{/* May 2016 - Jan 2017 */}</div>
                </div>
              </div>

              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm "></div>
              <div className="col-span-10 pb-1">
                <div className="flex flex-col">
                  <div className="text-l mt-4">Arxiv Trends</div>
                  <div className="text-xs">A <a className="underline" href="https://twitter.com/arxivtrends" target="_blank">Twitter Bot</a> tasked to mine social platforms, understand research trends and tweet about them.</div>
                  <div className="text-xs">{/* May 2016 - Jan 2017 */}</div>
                </div>
              </div>
            </div>


            {/* Languages */}

            <div className="mt-6 grid grid-cols-12 gap-x-4">
              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm pt-1 pb-1"><b>human</b><br />languages</div>
              <div className="col-span-10">
                <div className="flex flex-col text-justify tracking-wide pt-3">
                  <div className="text-sm">Georgian (Native) ჻ English (C2) ჻ Russian (B2) ჻ Lithuanian (A2) </div>
                </div>
              </div>
            </div>

            {/* Awards */}

            <div className="mt-6 grid grid-cols-12 gap-x-4">
              <div className="col-span-2 border-r-4 border-slate-200 text-right pr-4 text-sm pt-1"><b>awards</b><br />and misc</div>
              <div className="col-span-10">
                <div className="flex flex-col text-justify tracking-wide ">
                  <div className="text-sm">Fulbright Scholarship</div>
                  <div className="text-xs mb-4">James William Fulbright Scholarship granted by the Tree of Life Foundation and the U.S. State Department that allowed me to pursue Machine Learning graduate study at Worcester Polytechnic Institute in Massachusetts, United States.</div>
                  <div className="text-sm">CYBERCUBE 2016</div>
                  <div className="text-xs mb-4">First-ever Cybersecurity competition organized by the Ministry of Justice of Georgia with 150 participants, lasting 5 hours containing various problem sets such as executable reverse engineering, packet / logfile / malicious file, and memory dump analysis – 2nd place.</div>
                  <div className="text-sm">100% tuition coverage based on National University Entrance Exams</div>
                  <div className="text-xs">{/* Feb 2017 - Jul 2017 */}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerWrapper dotgridfooter flex flex-col pt-1  bg-slate-50 justify-center items-start ">
            {/* <div className="bg-slate-50 w-24 p-1 my-2 ml-2.5 mr-2 ">
                            <Link href="/secret">
                                <a href="http://georgegach.github.io/secret">
                                    <img src="assets/resume/qr.png" className="" alt="" />
                                </a>
                            </Link>
                        </div> */}
            <div className="footer bg-slate-800   text-slate-100 text-xs flex flex-row justify-between px-5 h-12 items-center w-full">
              <a href="https://georgegach.github.io/resume" target="_blank"><div className="tracking-widest font-medium">GEORGEGACH.GITHUB.IO<span className="text-slate-100/60 font-light tracking-widest"> / RESUME</span></div></a>
              <div className="tracking-widest font-light">FEB <b className="text-sm">2024</b></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}