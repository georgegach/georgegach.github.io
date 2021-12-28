
import SVGWaves from '../shared/SVGWaves'


export default function Landing({ }) {



    return (
        <>
            {/* 
            
                Welcome Message    

            */}
            <div className="mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center  select-none">

                <p className="text-9xl text-slate-100 font-relishlight tracking-tighter mt-24">
                    Hi
                </p>

                <div className='text-7xl text-slate-100 font-relishlight tracking-tighter'
                >
                    <span>I'm </span> <h1 className="inline-flex">George</h1></div>

                <h2 className='text-4xl text-slate-100'
                >Machine Learning and Web Engineer</h2>



                {/* 
            
                Profile picture
            
                */}

                <div className="flex flex-col bg-slate-200 relative w-full items-center mt-56">
                    <img className="rounded-full absolute z-10 top-0 -translate-y-3/4 h-64 cursor-move shadow-md shadow-slate-500/40"
                        src="/assets/profile-512.jpg"
                        alt="George's profle picture" />

                    <div className='relative w-full mt-1'>
                        <div className={`w-full absolute -top-72`}>
                            <svg className="fill-slate-200 opacity-70 absolute -scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,224L34.3,202.7C68.6,181,137,139,206,133.3C274.3,128,343,160,411,181.3C480,203,549,213,617,229.3C685.7,245,754,267,823,245.3C891.4,224,960,160,1029,165.3C1097.1,171,1166,245,1234,266.7C1302.9,288,1371,256,1406,240L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                            <svg className="fill-slate-200 opacity-50 absolute -scale-x-100  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,256L60,266.7C120,277,240,299,360,309.3C480,320,600,320,720,304C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                            <svg className="fill-slate-200 opacity-90  absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,224L34.3,202.7C68.6,181,137,139,206,133.3C274.3,128,343,160,411,181.3C480,203,549,213,617,229.3C685.7,245,754,267,823,245.3C891.4,224,960,160,1029,165.3C1097.1,171,1166,245,1234,266.7C1302.9,288,1371,256,1406,240L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                            <svg className="fill-slate-200 absolute " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,256L60,266.7C120,277,240,299,360,309.3C480,320,600,320,720,304C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                        </div>
                    </div>


                    <div className="prose font-anbanisans mt-24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur feugiat pharetra. Quisque finibus suscipit sagittis. Curabitur diam metus, semper ut aliquam eu, ultrices vitae risus. Donec facilisis lectus arcu, non viverra nisl lacinia eget. Nunc eu leo at tellus ornare faucibus. Donec at condimentum diam. Nulla egestas turpis eu hendrerit aliquet. Etiam vitae est velit. Etiam fringilla mi quis porta elementum. Aenean a est non ligula porttitor consectetur eu ut risus. Fusce quis feugiat mauris, vitae consectetur nisl.
                        <br />Ut faucibus nunc dui, nec ultricies leo lacinia rutrum. Quisque auctor, mi nec laoreet fermentum, arcu erat commodo magna, placerat auctor metus neque non ligula. Aliquam vehicula in sapien ut placerat. Mauris at elit metus. Donec commodo magna a urna viverra, eget rutrum dolor dapibus. Proin tincidunt faucibus fermentum. Aliquam mattis non ipsum ac molestie. Etiam tempus tellus lectus, sed viverra arcu mollis non. Cras vitae neque tempus, commodo nulla id, porttitor libero. Praesent condimentum nec odio vel accumsan. Fusce hendrerit diam leo, in ornare nunc fringilla eu. Mauris aliquet, turpis et facilisis pellentesque, felis nisl placerat neque, vitae blandit dui ligula a urna. Quisque rhoncus luctus ipsum et aliquam.
                        <br />
                        <br />Sed turpis felis, aliquam sit amet venenatis vel, varius eget est. Nam iaculis eu diam vitae malesuada. Fusce aliquet fringilla imperdiet. Fusce cursus scelerisque nulla, at ornare eros vehicula vel. Aliquam sed lacus odio. Integer mollis arcu quis ligula sollicitudin, ut commodo augue pulvinar. Donec ornare ullamcorper enim eu elementum. Donec feugiat at ante eu pharetra. Curabitur gravida, sem in ullamcorper efficitur, nisl lectus feugiat massa, vulputate accumsan est elit sed sapien. Praesent hendrerit mauris in eros semper, sed bibendum nisi placerat. In ac semper enim. Proin luctus dignissim metus nec bibendum. Proin lorem mauris, egestas in venenatis ut, vestibulum sed velit. Morbi sed laoreet odio. Maecenas elit turpis, suscipit vitae mauris id, tincidunt malesuada enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        <br />
                        <br />Nullam egestas est id sodales rutrum. Etiam venenatis, lorem sed dignissim pellentesque, arcu justo finibus dolor, vitae gravida elit est sed est. Duis vel erat convallis, pretium mi sed, rhoncus mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere dui tellus, at egestas enim mattis a. Sed tincidunt facilisis ornare. Nulla dignissim sit amet nisi non posuere. Nullam consequat luctus tempor. Mauris scelerisque lobortis ante. Nunc hendrerit maximus massa lacinia ultricies. Donec sed mi et risus rutrum lacinia ut eget est. Sed et commodo tortor, in ultricies tellus.
                        <br />
                        <br />Sed ut metus ac nisi efficitur faucibus quis non lectus. Nunc sollicitudin aliquam nisi at faucibus. Donec non ante eu arcu molestie finibus sed id lorem. In ultricies elit orci, quis dapibus arcu fringilla non. Aenean commodo consequat orci, eu gravida diam ullamcorper non. Duis ut faucibus magna, non euismod nulla. Proin eget iaculis mauris. Donec feugiat sit amet massa a pharetra. Maecenas at diam commodo, pulvinar enim et, interdum elit. Duis dapibus vel neque vitae convallis. Integer id dictum tortor.
                        <br />
                        <br />                    </div>

                    <div className='relative w-full -scale-y-100 mb-1'>
                        <div className={`w-full absolute bottom-72`}>
                            <svg className="fill-slate-200 opacity-70 absolute -scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,224L34.3,202.7C68.6,181,137,139,206,133.3C274.3,128,343,160,411,181.3C480,203,549,213,617,229.3C685.7,245,754,267,823,245.3C891.4,224,960,160,1029,165.3C1097.1,171,1166,245,1234,266.7C1302.9,288,1371,256,1406,240L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                            <svg className="fill-slate-200 opacity-50 absolute -scale-x-100  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,256L60,266.7C120,277,240,299,360,309.3C480,320,600,320,720,304C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                            <svg className="fill-slate-200 opacity-90  absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,224L34.3,202.7C68.6,181,137,139,206,133.3C274.3,128,343,160,411,181.3C480,203,549,213,617,229.3C685.7,245,754,267,823,245.3C891.4,224,960,160,1029,165.3C1097.1,171,1166,245,1234,266.7C1302.9,288,1371,256,1406,240L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                            <svg className="fill-slate-200 absolute " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,256L60,266.7C120,277,240,299,360,309.3C480,320,600,320,720,304C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                        </div>
                    </div>

                </div>


                <div className="mx-auto container max-w-screen-xl flex flex-col gap-4 justify-center items-center mt-20">

                    <p className="text-9xl text-slate-100 font-relishlight tracking-tighter mt-24">
                        Farewell
                    </p>

                </div>
            </div>

        </>
    )
}