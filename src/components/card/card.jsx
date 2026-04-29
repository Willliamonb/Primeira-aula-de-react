import './style.css'

export default function Card(props) {
  return (
    <div className="container">
        <img className="poster" src={props.poster} alt={props.title} />
        <div>
            <h2 className="title">{props.title}</h2>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum exercitationem nemo autem nisi non fugiat rem facere dignissimos adipisci debitis earum dolores architecto natus, iusto id provident dolore fuga.</p>
            <button className="button">Comprar agora</button>
        </div>
    </div>

  )
}
