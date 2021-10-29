import Layout from '../components/layout/Layout'
import Banner from '../components/Banner'

const ReactJsProjects =()=>{
  
   const bannerContent= {
       heading: ["React Js","Development" ],
       subHeading:["Expect Nothing Less than Perfect"],
        btn1:{
            text:'Our Projects'
        },
        btn2:{
            text:'Hire Experts'
        }

   }
   return<Layout>
        <Banner bannerContent={bannerContent}/>
   </Layout>
    
}
export default ReactJsProjects