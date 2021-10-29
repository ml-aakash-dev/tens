
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import Layout from '../../components/layout/Layout'
import Image from 'next/image'
import logo from '../../assets/images/logoLight.png'
import khansortium from '../../assets/images/khansortium.jpeg'
import grad1 from '../../assets/images/grad1.png'
import grad2 from '../../assets/images/grad2.png'
import grad3 from '../../assets/images/grad3.png'
import grad4 from '../../assets/images/grad4.png'
import grad5 from '../../assets/images/grad5.png'
import wholecell from '../../assets/images/wholecell.jpg'
import wholecell2 from '../../assets/images/wholecell2.jpg'
import we_fix_phones from '../../assets/images/we_fix_phones.jpeg'
import we_fix_phones2 from '../../assets/images/we_fix_phones2.jpeg'
import gamma_vr from '../../assets/images/gamma_vr.jpeg'
import gamma_vr2 from '../../assets/images/gamma_vr2.jpeg'
import crescent_cricket_club from '../../assets/images/crescent_cricket_club.jpeg'
import crescent_cricket_club2 from '../../assets/images/crescent_cricket_club2.jpeg'
import markaz_ul_fiqh from '../../assets/images/markaz_ul_fiqh.jpeg'
import markaz_ul_fiqh2 from '../../assets/images/markaz_ul_fiqh2.jpeg'
import markaz_ul_fiqh3 from '../../assets/images/markaz_ul_fiqh3.jpeg'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link'


gsap.registerPlugin(ScrollTrigger);

const Projects =()=>{
    const filter = useRef()
    const openFilter = ()=>{
        gsap.fromTo(filter.current,{y:"100%"},{y:0})
        // gsap.to(filter.current,{y:0})
    }
const closeFilter =()=>{
    gsap.to(filter.current,{y:"-100%"})
}
    useEffect(()=>{
        gsap.utils.toArray('.Project_Card').forEach(el=>{
            
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
       .to('.Projects_Container h1 > span',{y:0,duration:.5})

    },[])

    useEffect(()=>{
        const  filterProjects =(e)=>{
            let selectedValue = e.target.dataset.value
         let cards=  document.querySelectorAll('.Project_Card')
         let filtered = []
         cards.forEach(card=>{if(card.dataset.category == selectedValue) filtered.push(card)})
            // .forEach(item=>console.log(item.dataset.category))
            cards.forEach((card)=>
  {          card.classList.add('displayNone')
  }          ) 
  filtered.forEach(item=>item.classList.remove('displayNone'))
        }
        document.querySelectorAll('.filter_list li').forEach(item=>item.addEventListener('click',filterProjects))
    },[])
  return <Layout>
      <div className="Projects">
          <div className="Projects_Container">
            <h1 className='heading text-animation'><span>Our Projects</span></h1>
            <div onClick={openFilter} className="project_filter"><span>Type Of Project      
                 <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 330 330" style={{enableBackground: 'new 0 0 330 330', transform: 'rotate(90deg)'}} xmlSpace="preserve">
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
      </svg></span></div>
            <div className="Projects_Cards_Container">

                
                  
                        
                   
                <div  data-category='logo-design' className="Project_Card">
                    <Link href='projects/project_details'>
                        <a></a>
                    </Link>
                    <div className="Project_Image">
                        <Image src={khansortium}/>
                    </div>
                    <div className="Project_Content">
                       <h4 className='heading text-animation'><span>Khansortium</span></h4>
                       <span className='text-animation'><span>Logo Design</span></span>
                    </div>
                </div>
               
         

                

        
    
                <div  data-category='logo-design' className="Project_Card">
                    <div className="Project_Image">
                        <Image src={we_fix_phones}/>
                    </div>
                    <div className="Project_Content">
                       <h4 className='heading text-animation'><span>We Fix Phones</span></h4>
                       <span className='text-animation'><span>Logo Design</span></span>
                    </div>
                </div>
          
         

               
             
                       
                   
                <div data-category='back-end-development'  className="Project_Card">
                    <div className="Project_Image">
                        <Image src={gamma_vr}/>
                    </div>
                    <div className="Project_Content">
                       <h4 className='heading text-animation'><span>Gamma Vr</span></h4>
                       <span className='text-animation'><span>Full Stack Development</span></span>
                    </div>
                </div>
                
         

            
           
                    
            
                    <div data-category='full-stack-development'  className="Project_Card">
                        <div className="Project_Image">
                            <Image src={wholecell2}/>
                        </div>
                        <div data-category='full-stack-development' className="Project_Content">
                        <h4 className='heading text-animation'><span>Whole Cell Accessories</span></h4>
                        <span className='text-animation'><span>Full Stack Development</span></span>
                        </div>
                    </div>
                   
             

                
                
                        
                   
                <div data-category='full-stack-development'  className="Project_Card">
                    <div className="Project_Image">
                        <Image src={crescent_cricket_club2}/>
                    </div>
                    <div data-category='full-stack-development' className="Project_Content">
                       <h4 className='heading text-animation'><span>Crescent Cricket Club</span></h4>
                       <span className='text-animation'><span>Full Stack Development</span></span>
                    </div>
                </div>
               
         

               
                
                <div data-category='full-stack-development'  className="Project_Card">
                    <div className="Project_Image">
                        <Image src={markaz_ul_fiqh2}/>
                    </div>
                    <div data-category='full-stack-development' className="Project_Content">
                       <h4 className='heading text-animation'><span>Markaz Ul Fiqh</span></h4>
                       <span className='text-animation'><span>Full Stack Development</span></span>
                    </div>
                </div>
               
         
             
            </div>
          </div>
      </div>
      <div  ref={filter}className="project_filter_list">
          <div  onClick={closeFilter} className="times">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"/></svg>
          </div>
          <div className="filter_list">

          <h4>Select Project Type</h4>
          <ul>
              <li onClick={closeFilter} data-value='logo-design'>Logo Design</li>
              <li onClick={closeFilter} data-value='web-design'>Web Design</li>
              <li onClick={closeFilter} data-value='ecommerce-development'>eCommerce Development</li>
              <li onClick={closeFilter} data-value='front-end-development'>Front-End-Development</li>
              <li onClick={closeFilter} data-value='back-end-development'>Back-End-Development</li>
              <li onClick={closeFilter} data-value='wordpress-development'>WordPress-Development</li>
          </ul>
          </div>
      </div>
      <div className="firstLayer"></div>
  </Layout>
}

export default Projects