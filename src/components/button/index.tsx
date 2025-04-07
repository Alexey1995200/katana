import './styles.scss'
export const Button = ({title, onClick, position}:any) => {
  return(
    <button className="button" onClick={onClick} style={{alignSelf:position}}>{title}</button>
  )
}