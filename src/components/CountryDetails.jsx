import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function CountryDetails({ data }) {
    const { countryId } = useParams();

    const currentCountry = data.find(elem => elem.alpha3Code === countryId)

    return (
        <div class="col-7">
            <h1>{currentCountry.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{currentCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {currentCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {currentCountry.borders.map((elem, k) => {
                                const borderCountry = data.find(res => res.alpha3Code === elem)
                                return (
                                    <ul key={k}>
                                        <li><Link to={`/${elem}`}>{borderCountry.name.common}</Link></li>

                                    </ul>
                                )
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default CountryDetails;