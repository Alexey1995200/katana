import {Link} from "react-router-dom";

const CurrentSet = () => {
  return (<div className="navHistory">
    <Link to={"/"} style={{color: 'black'}}>Main</Link>
    <div className="circle"
         style={{width: '4px', height: '4px', backgroundColor: 'red', borderRadius: '100%'}}></div>
    <Link to={'/blog'} style={{color: '#97a3a6'}}>Blog</Link>
  </div>)
}