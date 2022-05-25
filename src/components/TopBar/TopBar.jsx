import logo from '../../assets/images/logo.png';
import logofans from '../../assets/images/logofans.png';
import logoSimpes from '../../assets/images/logosimples.png';
import { IoFlameOutline, IoLogOutOutline} from 'react-icons/io5';
import './topBar.css';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import ReactTooltip from 'react-tooltip';


import { SearchUsers } from '../ButtonsTopBar/SearchUsers/SearchUsers';
import { SolicitationsFriend } from '../ButtonsTopBar/SolicitationsFriend/SolicitationsFriend';
import { Notifications } from '../ButtonsTopBar/Notifications/Notifications';
import { MyMessages } from '../ButtonsTopBar/MyMessages/MyMessages';

function TopBar() {
    const {logout} = useContext(AuthContext);
    const Local = localStorage.getItem("foursome");
    const user = JSON.parse(Local);
    const LocalInformation = localStorage.getItem("informations-foursome");
    const userInformation = JSON.parse(LocalInformation);

    const avatarImg = "https://firebasestorage.googleapis.com/v0/b/foursome4-b925c.appspot.com/o/avatar.png?alt=media&token=f3b1f0bc-3885-4296-8363-ec1c3d43e240"

    function Tologout(e) {
        e.preventDefault();
        logout(user.id)
    }


     return (
        <div className="topBar">
            <div className="logo">
                <a href="/feed">
                <img src={logoSimpes} alt="" />
                </a>
            </div>
            <div className="logo2">
                  <a href="/feed">
                <img src={logo} alt="" />
                </a>
            </div>

            <SearchUsers />
  
            <div className="links">


                <SolicitationsFriend />
                <Notifications /> 

            

                <MyMessages />


             


                <a href="/pridefans">
                <div className="linkSelect" data-tip data-for='Convidar'>
                <img src={logofans} alt="" />
                </div>
                </ a>

                <div className="account">
                    <a href="/profile">
                        <div className="avatar">
                    <img src={userInformation !== null ? userInformation.avatar : avatarImg} alt="" />
                    </div>
                    </a>
                    <a href="/profile">
                    <h4>@{user !== null ? user.username : "Usuário não encontrado"}</h4>
                    </a>
                </div>

                <div className="link" data-tip data-for='Sair'>
                    <IoLogOutOutline onClick={Tologout} />
                </div>
                <ReactTooltip id='Sair' place="bottom" type="dark" effect="solid">
                     <span>Sair</span>
                </ReactTooltip>
                
            </div>
           

        </div>


    )
}

export {TopBar}