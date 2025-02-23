import './styles.scss'
export const ButtonBorder = ({title, onClick, color}:any) => {
  return(
    <button className="buttonBorder" onClick={onClick} style={{color:`${color}`}}>{title}</button>
  )
}