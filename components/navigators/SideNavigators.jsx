import { useRef } from "react"


const SideNavigators = ()=>{
    const navs= useRef()
    const toggleNavs =()=>{
          navs.current.classList.toggle('active')
    }
    return <div  ref={navs}className="side_Navigators no-circle">
        <span onClick={toggleNavs} className="handle no-circle">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width='18'height='18' fill='#fff' xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 185.343 185.343"  className='pointerEventNone' xmlSpace="preserve">
        <g>
          <g>
            <path  d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z" />
          </g>
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
        <g>
        </g>
      </svg>
        </span>
        <div className="side_Navigator no-circle active">
            <span>All</span>
        </div>
        <div className="side_Navigator no-circle ">
            <span>Design</span>
        </div>
        <div className="side_Navigator no-circle ">
            <span>Development</span>
        </div>
        <div className="side_Navigator no-circle ">
            <span>Marketing</span>
        </div>
        <div className="side_Navigator no-circle ">
            <span>Application</span>
        </div>
       
    </div>
}

export default  SideNavigators