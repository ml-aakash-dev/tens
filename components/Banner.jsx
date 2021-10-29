import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react'
import arrow from '../assets/images/arrows/45degarr.svg'
import Image from 'next/image'
import BannerNavArrImg from './BannerNavArrImg';
import Link from 'next/link'
import ButtonBottomNavigators from './navigators/ButtonBottomNavigators';

// const bottomNavigators =[
//     {
//         text:'React Js Projects',
//         link:'/projects/react-js-projects'
//     },
//     {
//         text:'Why React Js',
//         link:'/why/react-js'
//     },
//     {
//         text:'More Services',
//         link:'/services'
//     },
// ]

const Banner = ({ bannerContent: { heading, subHeading, btn1, btn2 }, bottomNavigators }) => {
    const [rightColored, setRightColored] = useState(true)
    const [isMobile,setIsMobile] = useState(false)
    useEffect(() => {
        
        setIsMobile(document.innerWidth > 600)
        const handleMouseMove =(e)=>{

            const circle = document.getElementById('circle')
            circle.classList.add('opa1')
            if(circle){
            if(e?.target?.classList?.contains('no-circle')){
                circle.style.opacity =0
            }else{
                circle.style.opacity =1
                
            }
            if(e.target.classList.contains('big-circle')){
                circle.classList.add('big-circle')  
                 circle.style.top=e.clientY -30 +"px"
                circle.style.left=e.clientX -30+ "px"
            }else{
                circle.classList.remove('big-circle') 
                circle.style.top=e.clientY -12.5 +"px"
                circle.style.left=e.clientX -12.5+ "px"
            }
            
            }
          
         }
        window.addEventListener('mousemove',handleMouseMove)
        return () => {
           
        window.removeEventListener('mousemove',handleMouseMove)
        }
    }, [])
    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         let mouse = e.clientX
    //         let width = window.innerWidth / 2
    //         let heading = document.querySelector('.banner h1')

    //         let transform = window.getComputedStyle(heading)
    //         let matrix = new WebKitCSSMatrix(transform.transform).m41;

    //         if (mouse < width) {
    //             if (matrix < 50) {
    //                 heading.style.transform = `translateX(${matrix + 1}px)`
    //             }
    //             setRightColored(true)
    //         } else {
    //             if (matrix > -50) {
    //                 heading.style.transform = `translateX(${matrix - 1}px)`

    //             }
    //             setRightColored(false)
    //         }
    //     }
    //     window.addEventListener('mousemove', handleMouseMove)

    //     return () => window.removeEventListener('mousemove', handleMouseMove)
    // }, [])


    useEffect(() => {
        let tl = gsap.timeline({ defaults: { ease: "power1.out", duration: .2 } })
        tl
            .to('.firstLayer', { y: "-100%", duration: 1, ease: "linear" })
            .to('.banner h1 > span', { y: 0, duration: .5 })
            .to('.banner h4 > span', { y: 0, duration: .5 })
            .to(['.banner .btn', 'nav ul li'], { opacity: 1, stagger: .1 })
            .to('.banner_navigators', { y: 0 })
            .to('.banner_navigators h5', { opacity: 1 })
            .to('.banner_navigators .nav-arr-img', { scale: 1, opacity: 1 })
    }, [])

    return <section className=' banner'>
         { !isMobile && 
        <div id="circle">

        </div>}
        <div className="firstLayer">

        </div>
        <div className="container">


            <h1 className='heading'>
                <span>
                    <span className={!rightColored && 'colored'}>
                        {heading[0]} </span>
                    <span className={rightColored && 'colored'}>
                        {heading[1]}
                    </span>
                </span>
            </h1>
            <h4 className='mb1  mt1'>
                <span>
                    {subHeading[0]} <span className='colored'>  {subHeading[1]} </span> {subHeading[2]} <span className='colored'> {subHeading[3]} </span>
                </span>
            </h4>
            <div className='banner_btns'>
                <button className='btn btnPrimaryOutlined btnLg  mr1 no-circle'>{btn1.text} </button>
                <button className='btn btnPrimary btnLg   no-circle'>{btn2.text} </button>
            </div>

            <ButtonBottomNavigators navigators={bottomNavigators} />
        </div>
    </section>

}
export default Banner