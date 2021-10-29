import gsap from "gsap"
import { useEffect } from "react"
import Layout from "../../components/layout/Layout"
import Image from "next/image"
import banner from '../../assets/images/banner.jpg'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import portfolio from '../../assets/images/portfolio.jpg'
import portrait from '../../assets/images/portrait.jpg'


gsap.registerPlugin(ScrollTrigger);

const ProjectDetail =()=>{

    useEffect(()=>{
        const moveBanner =()=>{
            let banner = document.querySelector('.project_banner')
            let sdb = document.querySelector('.scroll_down_btn')
            if(window.scrollY>100){
                banner?.classList.add('active')
                sdb?.classList.remove('active')
                
            }else{
                banner?.classList.remove('active')
                sdb?.classList.add('active')
                
            }
        }
      window.addEventListener('scroll',moveBanner)
          gsap.utils.toArray('.portfolio_image').forEach(el=>{
            
            ScrollTrigger.create({
              trigger: el,
                start:"top center",              
                onEnter:()=> el.classList.add('active')
             
            });
          })
   
        let tl = gsap.timeline({defaults:{ease:"power1.out",duration:.2}})
       tl
       .to('.firstLayer',{y:"-100%",duration:1,ease:"linear"})
       
       .to(['nav ul li'],{opacity:1,stagger:.1})
       .to('.project_details_first_section_container h1 > span',{y:0,duration:.5})
       .to('.project_details_first_section_container h4 > span',{y:0,duration:.5})
       .to('.project_category  > span',{y:0})
       .to('.project_category',{overflow:'visible'})
       .to('.project_banner > div',{y:'0',opacity:1,duration:.7})
       .to('.project_banner .scroll_down_btn',{scale:'1'})

    },[])
 /*    const scrollDown =()=>{
        window.scrollTo(0,window.innerHeight/1.2)
    } */
    return <Layout>
        <div className="Project_Details">
            <div className="project_details_first_section">
                <div className="project_details_first_section_container">
                
                <h1 className='heading text-animation'><span>Khansortium</span></h1>
                <h4 className='text-animation'><span>Webiste Design</span></h4>
                <div className='project_category text-animation'><span>Full Stack Development</span></div>
                </div>
                <div className="project_banner" id='banner_img'>
                    <a href="#banner_img">

                <span className="scroll_down_btn active" /* onClick={scrollDown} */>
                    
                    <svg width='35' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style={{enableBackground: 'new 0 0 330 330', transform: 'rotate(90deg)'}} xmlSpace="preserve">
            <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z" />
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>
                    </span>
                    </a>
              <a href="">
              <span className="visit_site_btn" /* onClick={scrollDown} */>
                    
                    Visit Site
                </span>
              </a>
                    <Image  src={banner}/>
                </div>
            


            </div>
            <div className="portfolio_images">
                <div className="portfolio_image">
                    <Image src={portfolio}/>
                </div>
                <div className="portfolio_image">
                    <div className="portfolio_half displaySmallNone">
                    

                    </div>
                    <div className="portfolio_half">

                    <Image  src={portrait}/>
                    </div>
                </div>
                <div className="portfolio_image">
                    <Image src={portfolio}/>
                </div>
                {/* <div className="portfolio_image"></div> */}
                <div className="portfolio_image" >
                    <Image src={portfolio}/>
                </div>
                <div className="portfolio_image">
                    <Image src={portfolio}/>
                </div>
                <div className="portfolio_image">
                    <div className="portfolio_half">
                    <Image src={portrait}/> 

                    </div>
                    <div className="portfolio_half">

                    <Image  src={portrait}/>
                    </div>
                </div>
                <div className="portfolio_image">
                    <Image src={portfolio}/>
                </div>
                <div className="portfolio_image">
                    <Image src={portfolio}/>
                </div>
                <div className="portfolio_image">
                    <div className="portfolio_half">
                    <Image src={portrait}/> 

                    </div>
                    <div className="portfolio_half displaySmallNone">

           
                    </div>
                </div>
            </div>
        </div>
      <div className="firstLayer"></div>
    </Layout>
}
export default ProjectDetail