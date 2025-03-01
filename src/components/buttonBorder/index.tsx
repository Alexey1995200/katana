import './styles.scss'
export const ButtonBorder = ({title, onClick, color, width}:any) => {
  return(
    <button className="buttonBorder" onClick={onClick} style={{color:`${color}`, width:width}}>{title}</button>
  )
}