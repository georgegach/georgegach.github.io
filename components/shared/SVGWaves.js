export default function SVGWaves({ children, ...props }) {


    return (
        <>
            <div className={`-translate-y-full w-full isolate z-0 relative -mb-1 flex top-0 ${props['className']}`}>
                <svg className="fill-slate-200 dark:fill-slate-900 opacity-40 absolute top-0 -scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,32L60,74.7C120,117,240,203,360,245.3C480,288,600,288,720,266.7C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <svg className="fill-slate-200 dark:fill-slate-900 opacity-20  -scale-x-100 absolute top-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,256L60,266.7C120,277,240,299,360,309.3C480,320,600,320,720,304C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <svg className="fill-slate-200 dark:fill-slate-900 opacity-80  absolute top-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,32L60,74.7C120,117,240,203,360,245.3C480,288,600,288,720,266.7C840,245,960,203,1080,181.3C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                <svg className="fill-slate-200 dark:fill-slate-900  z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,256L60,266.7C120,277,240,299,360,309.3C480,320,600,320,720,304C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </>
    )
}