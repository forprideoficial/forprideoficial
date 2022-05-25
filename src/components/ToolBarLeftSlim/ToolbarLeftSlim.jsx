import { IoNotificationsOutline, IoRadio, IoPersonOutline, IoPeopleOutline, IoBusinessOutline, IoStatsChartOutline,
    IoFlameOutline, IoNewspaperOutline, IoMailOpenOutline, IoSettingsOutline, IoCashOutline } from "react-icons/io5";
import {memo} from 'react' 
import './toolbarLeftSlim.css'
import logofans from '../../assets/images/logofans.png';

function ToolbarLeftSlimComponent() {
    const Local = localStorage.getItem("informations-foursome");
    const userInformation = JSON.parse(Local);

    const avatarImg = "https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/avatar.png?alt=media&token=f3b1f0bc-3885-4296-8363-ec1c3d43e240"


    return (
        <div className="content-toolbar">
            <div className="ToolBarLeftSlim">
                <div className="image">
                <a href="/profile" >
                    <img src={userInformation !== null ? userInformation.avatar :avatarImg} alt="" />
                    </a>
                </div>
                <div className="tools">

                <a href="/feed" >
                 <button className="toolIcon" >
                        <IoNewspaperOutline size={20}/>Feed
                    </button>
                    </a>

                    <a href="/profile" >
                    <button className="toolIcon" >
                        <IoPersonOutline size={20}/>Perfil
                    </button>
                    </a>
          

                    <a href="/notifications" >
                    <button className="toolIcon" >
                        <IoNotificationsOutline size={20}/>
                       Notificações
                    </button>
                    </a>

                    <a href="/messages" >
                    <button className="toolIcon" >
                        <IoMailOpenOutline size={20}/>
                       Mensagens
                    </button>
                    </a>
                    <a href="/radar" >
                    <button className="toolIcon" >
                        <IoRadio size={20}/>
                       Radar
                    </button>
                    </a>

                    <a href="/groups" >
                    <button className="toolIcon" >
                        <IoPeopleOutline size={20}/>
                       Grupos
                    </button>
                    </a>

                    <a href="/signature" >
                    <button className="toolIcon2" >
                       Assinatura Pride +
                    </button>
                    </a>

                    <a href="https://www.pridefans.com.br" >
                    <button className="toolIcon3" >
                      <img src={logofans} alt="" />    
                    </button>
                    </a>



                   
                    <a href="/settings" >
                    <button className="toolIcon4" >
                        <IoSettingsOutline size={20}/>Configs
                    </button>
                    </a>
 
                </div>
            </div>
        </div>
    )
}

export const ToolbarLeftSlim = memo(ToolbarLeftSlimComponent)