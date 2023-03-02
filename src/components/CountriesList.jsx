import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


function CountriesList({ data }) {


    return (

        <div className="col-5" >
            <div className="list-group" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                {data.map(elem => {
                    return (

                        <ul key={elem.alpha3Code}>
                            <li className="list-group-item list-group-item-action"><img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt={elem.alpha2Code} /><span><Link to={elem.alpha3Code}>{elem.name.common}</Link></span></li>
                        </ul>
                    )
                })}
            </div>
        </div>


    )
}

export default CountriesList;




