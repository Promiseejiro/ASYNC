import { Link ,Outlet} from 'react-router-dom'

import './sidebar.css'

// component 
import Chats from '../../Pages/chats-page/chats-page';

const SideBar =({children,width,outlet})=>{




     return(
<div className="main-container">
<div className="side-bar" style={{
     width:width
}}>
     {children}
</div>
{/* <div className="chats-side-bar"><Chats/> 
</div>*/}
{outlet}
</div>
     )
}

export default SideBar