import './styles.scss'

export const ButtonBorder = ({title, onClick, width, alt, color, textPosition, style}: any) => {
  return (
    <button
      className={`buttonBorder ${alt || ''}`}
      onClick={onClick}
      style={{
        color: `${color}`,
        width: width,
        display: 'flex',
        justifyContent: `${textPosition || "center"} `,
        ...style,
      }}>
      {title}
    </button>
  )
}