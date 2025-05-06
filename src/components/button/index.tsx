import './styles.scss'
export const Button = ({title, onClick, position, textTransform}:any) => {
  return(
    // @ts-ignore
    <button className="button" onClick={onClick} style={{alignSelf:position, textTransform:`${textTransform}`}}>{title}</button>
  )
}