import React, { useEffect, useRef } from 'react'
import Layout from '../../components/layout/Layout'
import Image from 'next/image'
import gsap from 'gsap'
import img from '../../assets/images/1.svg'
import Link from 'next/link'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    
    const line= useRef(null)
    const circle= useRef(null)
    useEffect(()=>{
        const updateHeight =(scroll) =>{
            let line =  document.querySelector('.LINE')
            let circle  = document.querySelector('.CIRCLE')
            if(line&& circle){
            line.style.height= scroll-(window.innerHeight /2 )+100 +'px' 
            circle.style.top= scroll-(window.innerHeight /2 )+100 +'px' 
          }
        }
        ScrollTrigger.create({
            trigger:'.servicesSect',

            onUpdate: ()=>{ 
                let y = self.scrollY
                updateHeight(y)
}
        })
        
        gsap.utils.toArray('.service_card').forEach(el=>{
            
            ScrollTrigger.create({
              trigger: el,
                start:"top center",              
             onEnter:()=> el.classList.add('active')
             
            });
          })
    },[])
    useEffect(()=>{
        let tl = gsap.timeline({defaults:{ease:"power1.out",duration:.2}})
       tl
       .to('.firstLayer',{y:"-100%",duration:1,ease:"linear"})
       .to('.servicemainhead h1 > span',{y:0,duration:.5})
       .to( '.servicemainhead p > span',{y:0,duration:.5})
       .to(['.servicemainhead .container .btn','nav ul li'],{opacity:1,stagger:.1})

    },[])
return (
    
<>
<Layout  >
    <div className="services">
   
                <section className='servicemainhead'>
                    <div className="container">

                        <h1 className='heading no-circle text-animation'>
                           <span className='font-inherit text-animation'>
                            Your Native Technology Partner
                           </span>
                        </h1>
                        <p className='mt1 mb1 no-circle text-animation'  >
                            <span className='text-animation'> 

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sapiente accusantium quas animi modi laboriosam facere cum porro pariatur eos aut, odio dicta aliquid voluptate! Eos saepe, rerum itaque cupiditate officiis, est nisi quasi voluptas labore rem iure dignissimos illum.
                            </span>

                        </p>
                        <button className='btn mt1 no-circle '>View Services</button>
                        
                    </div>
                
                
                </section>
                <section className='servicesSect'>
                        <div className="servicesCenterLine">
                            <span ref={line} className="LINE">

                            </span>
                            <span ref={circle} className="CIRCLE"></span>
                        </div>
                    <div className="container ServicesContainer">

                        <div className="service_card">
                            <div className="service_card_content">
                                <h4 className='heading text-animation'>
                                <span>
                                    01
                                </span>
                                </h4>
                                    <Link passHref href='services/front-end-development' >
                                        
                                        <h2 className='heading text-animation'>
                                                <span>
                                                    Front End Development
                                                </span>
                                        </h2>
                                    </Link>
                                    <div className="service_img">
                                         <Image alt='baad me' src={img}/>
                                    </div>
                                <p className='text-animation'>
                                    <span>

                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                                    </span>
                                </p>
                                    <ul  className='mt2 sub_services_list'>
                                        <Link passHref href='services/website-design'>
                                            <li className='text-animation'> <span>
                                                Website Design
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/website-redesign'>
                                            <li className='text-animation'> <span>
                                                Website Redesign
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/react-js'>
                                            <li className='text-animation'> <span>
                                                React Js Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/vue-js'>
                                            <li className='text-animation'> <span>
                                                Vue Js Development
                                                </span> 
                                                </li>
                                        </Link>
                                      
                                    </ul>

                           
                            </div>
                            <div className="service_card_img">
                                <Image alt='baad me' src={img}/>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="service_card_content">
                                <h4 className='heading text-animation'>

                                <span>
                                    02
                                </span>
                                </h4>
                                    <Link passHref href='services/back-end-development'>
                                        <h2 className='heading text-animation'>
                                            <span>
                                                Back End Development
                                            </span>
                                        </h2>
                                    </Link>
                                    <div className="service_img">
                                         <Image alt='baad me' src={img}/>
                                    </div>
                                <p className='text-animation'>
                                    <span>

                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                                    </span>
                                </p>
                                <ul  className='mt2 sub_services_list'>
                                        <Link passHref href='services/node-js-development'>
                                            <li className='text-animation'> <span>
                                                Node Js Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/ecommerce-development'>
                                            <li className='text-animation'> <span>
                                               eCommerce Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/laravel-development'>
                                            <li className='text-animation'> <span>
                                                Laravel Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/php-development'>
                                            <li className='text-animation'> <span>
                                                PHP Development
                                                </span> 
                                                </li>
                                        </Link>
                                      
                                    </ul>
                            </div>
                            <div className="service_card_img">
                                <Image alt='baad me' src={img}/>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="service_card_content">
                                <h4 className='heading text-animation'>
                                <span>
                                    03
                                </span>
                                </h4>
                                
                                <Link passHref href='services/full-stack-development'>
                                    <h2 className='heading text-animation'>
                                        <span>
                                            Full Stack Development
                                        </span>
                                    </h2>
                                </Link>
                                <div className="service_img">
                                         <Image alt='baad me' src={img}/>
                                    </div>
                                <p className='text-animation'>
                                    <span>

                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                                    </span>
                                </p>
                                <ul  className='mt2 sub_services_list'>
                                        <Link passHref href='mern-stack-development'>
                                            <li className='text-animation'> <span>
                                                MERN Stack Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='jam-stack-development'>
                                            <li className='text-animation'> <span>
                                                JAM Stack Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='react-django-develoment'>
                                            <li className='text-animation'> <span>
                                                 React & Django Development
                                                </span> 
                                                </li>
                                        </Link>
                                   
                                      
                                    </ul>
                     
                            </div>
                            <div className="service_card_img">
                                <Image alt='baad me' src={img}/>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="service_card_content">
                                <h4 className='heading text-animation'>
                                <span>
                                    04
                                </span>
                                </h4>
                                <Link passHref href='services/ecommerce-development'>
                                    <h2 className='heading text-animation'>
                                        <span>
                                            eCommerce Website Development
                                        </span>
                                    </h2>
                                </Link>
                                <div className="service_img">
                                         <Image alt='baad me' src={img}/>
                                    </div>
                                <p className='text-animation'>
                                    <span>

                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                                    </span>
                                </p>
                                <ul  className='mt2 sub_services_list'>
                                        <Link passHref href='services/custom-ecommerce-development'>
                                            <li className='text-animation'> <span>
                                                Custom eCommerce Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/magento-development'>
                                            <li className='text-animation'> <span>
                                                Magento Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/shopify-development'>
                                            <li className='text-animation'> <span>
                                                Shopify Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/woocommerce-development'>
                                            <li className='text-animation'> <span>
                                                 WooCommerce Development
                                                </span> 
                                                </li>
                                        </Link>
                                   
                                      
                                    </ul>
                                    </div>
                            <div className="service_card_img">
                                <Image alt='baad me' src={img}/>
                            </div>
                        </div>
                        <div className="service_card">
                            <div className="service_card_content">
                                <h4 className='heading text-animation'>
                                <span>
                                    05
                                </span>
                                </h4>
                                <Link passHref href='services/wordpress-development'>
                                    <h2 className='heading text-animation'>
                                        <span>
                                            WordPress Development
                                        </span>
                                    </h2>
                                </Link>
                                <div className="service_img">
                                         <Image alt='baad me' src={img}/>
                                    </div>
                                <p className='text-animation'>
                                    <span>

                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus et, doloribus culpa similique quam excepturi nobis eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus rerum nam explicabo aspernatur facere magnam officiis consequatur? Voluptatem voluptas ut molestiae quae iusto.
                                    </span>
                                </p>
                                <ul  className='mt2 sub_services_list'>
                                        <Link passHref href='services/custom-ecommerce-development'>
                                            <li className='text-animation'> <span>
                                                Custom eCommerce Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/magento-development'>
                                            <li className='text-animation'> <span>
                                                Magento Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/shopify-development'>
                                            <li className='text-animation'> <span>
                                                Shopify Development
                                                </span> 
                                                </li>
                                        </Link>
                                        <Link passHref href='services/woocommerce-development'>
                                            <li className='text-animation'> <span>
                                                 WooCommerce Development
                                                </span> 
                                                </li>
                                        </Link>
                                   
                                      
                                    </ul>
                                    </div>
                            <div className="service_card_img">
                                <Image alt='baad me' src={img}/>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <section className='get_a_quote'>
                        <div className="get_a_quote_content">
                            <h3 className='heading'>
                                    <span>
                                        Ready To discucss Your Project
                                    </span>
                            </h3>
                            <button className='btn btnLg mt2'> Get a Quote</button>
                        </div>
                </section>
                
        <div className="firstLayer"></div>
        {/* <Banner  bannerContent={bannerContent} /> */}
        {/* <SideNavigators/> */}
    </div>
</Layout>
</>
)
}
