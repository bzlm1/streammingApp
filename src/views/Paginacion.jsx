export default function Paginacion(props) {
  const getPaginas = () => {
    const resultado = []
    for (let i = 0; i < props.total; i++) {
      resultado.push(
        <a onClick={() => props.onChange(i + 1)}
          className={props.pagina === (i + 1) ? 'active' : ''}>
          {(i + 1)}
        </a>
      );
    }
    return resultado

  }
  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>Página {props.pagina} de {props.total}:</span>
        {/* {Array.apply(0, Array(props.total)).map(value =>
          <a className="active" href="#">{i + 1}</a>
        )} */}
        {/* {Array.apply(null, { length: props.total }).map((_, i) => */}

        {getPaginas()}

        {/* <a className="active" href="#">1</a>
        <a href="#">2</a> */}
        {/* <a href="#"><i className="ion-arrow-right-b"></i></a> */}
      </div>
    </div>
  )
}