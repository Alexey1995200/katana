import './styles.scss'
export const Button = ({title, onClick}:any) => {
  return(
    <button className="button" onClick={onClick}>{title}</button>
  )
}