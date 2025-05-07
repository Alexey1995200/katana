import './styles.scss'
import {arrLeft, menu} from "../../../assets";
import {LogoComponent} from "../../LogoComponent";

export const MobileWhiteHeader = ({backBtn, menuBtn}:any) => {
  return (
    <div className="mobileWhiteHeader">
      <button onClick={backBtn}><img className="MWHbutton" src={arrLeft} alt="(<)"/></button>
      <LogoComponent/>
      <button onClick={menuBtn}><img className="MWHbutton" src={menu} alt="|☰|"/></button>
    </div>
  )
}