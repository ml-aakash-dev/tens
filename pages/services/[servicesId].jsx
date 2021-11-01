import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Layout from '../../components/layout/Layout'
import ButtonBottomNavigators from '../../components/navigators/ButtonBottomNavigators'





export const getStaticPaths = async () =>{
    const res = await fetch("http://localhost:8080/services")
    const data = await res.json()

    const paths = data.map(item => {
        return {
          params: { servicesId: item.id.toString() }
        }
      })
    return {
        paths,
        fallback:false
    }
}



export const getStaticProps = async (context)=>{
    const id = context.params.servicesId
    const res = await fetch("http://localhost:8080/services/"+id)
    const data = await res.json()
    return {
        props:{
            service:data
        }
    }
}






// const bottomNavigators =[
//     {
//         text:'React Js Projects',
//         link:'/react-js-projects'
//     },
//     {
//         text:'Why React Js',
//         link:'/why-react-js'
//     },
//     {
//         text:'More Services',
//         link:'/services'
//     },
// ]
// const bannerContent= {
//     heading: ["React Js","Development" ],
//     subHeading:["Expect", "Nothing", "Less than" ,"Perfect."],
//      btn1:{
//          text:'Our Projects'
//      },
//      btn2:{
//          text:'Hire Experts'
//      }

// }
export default function Home({service}) {
    const [bannerContent,setBannerContent] = useState({
        heading:[],
        subHeading:[],
        btn1:{
            text:'Our Projects'
        },
        btn2:{
            text:'Hire Experts'
        }


    })
    const [bottomNavigators,setBottomNavigators] = useState([])
    // console.log(bannerContent)
    
   
    useEffect( ()=>{
     let item
        // if(id){

        //      item = services.filter(service => service.id == id)
        //      console.log('id')
        // }
      
    setBottomNavigators(()=>{
      
        return[
            {
                text:service.name + " Projects",
                link:'/projects/'+service.id
            },
            {
                text: "Why " + service.name,
                link:'/why/'+service.id
            },
            {
                text:'More Services',
                link:'/services'
            },
        ]
    })
     setBannerContent(prevState=>{
        
        return {
                ...prevState,
                heading:[...service.heading],
                subHeading:[...service.subHeading]
            }
        })
    },[])
   
return (
<>
<Layout  >
    {
       bannerContent.heading &&  bannerContent.heading[0] &&

    <Banner  bannerContent={bannerContent} bottomNavigators={bottomNavigators} />
    }

</Layout>
</>
)
}
