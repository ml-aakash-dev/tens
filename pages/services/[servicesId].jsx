import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Layout from '../../components/layout/Layout'
import ButtonBottomNavigators from '../../components/navigators/ButtonBottomNavigators'
import services from '../../assets/data/services.json'

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
export default function Home() {
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
    const {query} = useRouter() 
    let id = query.servicesId
    useEffect( ()=>{
     let item
        if(id){

             item = services.filter(service => service.id == id)
             console.log('id')
        }
      
    setBottomNavigators(()=>{
       if(id){
        return[
            {
                text:item[0].name + " Projects",
                link:'/projects/'+item[0].id
            },
            {
                text: "Why " + item[0].name,
                link:'/why/'+item[0].id
            },
            {
                text:'More Services',
                link:'/services'
            },
        ]}
    })
     setBannerContent(prevState=>{
        if (id){  
        return {
                ...prevState,
                heading:[...item[0].heading],
                subHeading:[...item[0].subHeading]
            }}
        })
    },[id])
   
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
