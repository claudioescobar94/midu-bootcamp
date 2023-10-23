

export const Mensaje = (props) => {

    const mensaje = props

    return(
      <h1 style={{color: props.color}}> {mensaje.title} </h1>
    )
}