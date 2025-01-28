import "./services-cards.css"

function ServicesCards({cardTitle ,cardAlt, cardImg}) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img className="card-img-services" src={cardImg} alt="" />
                    <h6 className="card-title">{cardTitle}</h6>
                    {/* <a href="#" className="btn btn-primary">Reserva tu cita</a>  */}
                </div>
            </div>
        </div>
    )
}

export default ServicesCards