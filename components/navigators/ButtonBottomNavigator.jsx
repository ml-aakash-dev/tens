import BannerNavArrImg from "../BannerNavArrImg"
import Link from 'next/link'

const ButtonBottomNavigator =({text,link})=>{
    return <Link href={link}>
                <div className="banner_navigator big-circle">
                    <h5 className='pointerEventNone'>
                       {text}
                    <BannerNavArrImg/>
                    </h5>
                </div>
        </Link>
}

export default  ButtonBottomNavigator