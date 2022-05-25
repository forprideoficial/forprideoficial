import { useState, memo } from "react";
import { IoCalendarOutline, IoList, IoRadio, IoPersonOutline, IoCashOutline, IoSettingsOutline, IoPeopleOutline, IoMenuOutline,
    IoInformationCircleOutline, IoChatbubblesOutline, IoMailOutline, IoNewspaperOutline, IoBusinessOutline, IoMailOpenOutline, IoStatsChartOutline } from "react-icons/io5"
import { useFetch } from "../../hooks/useFetch";
import './barBottomMenu.css'

function BarBottomMenuComponenet() {
    const Local = localStorage.getItem("foursome");
    const userData = JSON.parse(Local);
    const [select, setSelect] = useState(false);


const {data} = useFetch(`/online`);

    function handleOpenUsersOnline (e) {
        e.preventDefault()
       setSelect(true)
    }
    function handleOpenBar (e) {
        e.preventDefault()
       setSelect(false)
    }

    return (
        <div className="BarBottom">
            <div className="BarBottomBlock">
                <div className="Buttons">

                  <a href="/feed" >
                 <button className="ButtonsUnic" >
                        <IoNewspaperOutline size={20}/>Feed
                    </button>
                    </a>

                    <a href="/profile" >
                    <button className="ButtonsUnic" >
                        <IoPersonOutline size={20}/>Perfil
                    </button>
                    </a>
          

                    <a href="/messages" >
                    <button className="ButtonsUnic" >
                        <IoMailOpenOutline size={20}/>
                       Enviado
                    </button>
                    </a>
                  
                    <a href="/radar" >
                    <button className="ButtonsUnic" >
                        <IoRadio size={20}/>
                       Radar
                    </button>
                    </a>

                    <a href="/events" >
                    <button className="ButtonsUnic" >
                        <IoCalendarOutline size={20}/>
                       Eventos
                    </button>
                    </a>

                    <a href="/groups" >
                    <button className="ButtonsUnic" >
                        <IoPeopleOutline size={20}/>
                       Grupos
                    </button>
                    </a>


                    <a href="/settings" >
                    <button className="ButtonsUnic" >
                        <IoSettingsOutline size={20}/>Configs
                    </button>
                    </a>


                </div>
            </div>
        </div>
    )
}

export const BarBottomMenu = memo(BarBottomMenuComponenet)