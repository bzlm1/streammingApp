export default function Pelicula(props) {
  return (
    <div className="movie-item-style-2">
      <img src={props.image} alt="" />
      <div className="mv-item-infor">
        <h6><a href="moviesingle.html">{props.title} <span>({props.anho})</span></a></h6>
        <p className="rate"><i className="ion-android-star"></i><span>8.1</span> /10</p>
        <p className="describe">{props.descripcion}</p>
        <p className="run-time"> Duración:{props.duracion}     .     <span>MMPA: {props.mmpa} </span>    .     <span>Release: {props.fechaDeEstreno}</span></p>
        <p>Director: <a href="#">{props.director}</a></p>
        <p>Stars: <a href="#">{props.estrellas.join(", ")}</a></p>
      </div>
    </div>
  )
}