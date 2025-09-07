export default function Paginacion(props) {
  const getPaginas = () => {
    const resultado = []
    for (let i = 0; i < props.total; i++) {
      resultado.push(<a className="active" href="#">{i + 1}</a>);
    }
    return resultado

  }
  return (
    <div className="topbar-filter">
      {/* <label>Movies per page:</label>
      <select>
        <option value="range">5 Movies</option>
        <option value="saab">10 Movies</option>
      </select> */}
      <div className="pagination2">
        <span>Página {props.pagina} de {props.total}:</span>
        {getPaginas()}

        {/* <a className="active" href="#">1</a>
        <a href="#">2</a> */}
        <a href="#"><i className="ion-arrow-right-b"></i></a>
      </div>
    </div>
  )
}