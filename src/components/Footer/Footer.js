import {React, Fragment} from "react"
import Card from "react-bootstrap/Card";
import './Footer.css';

function Footer() {
    return(
        <Fragment>
            <div className="footer-container">
                <p>Phone: 0 555 639 01 50</p>
                <p><a href="mailto:squadgamebypluto@gmail.com">musaihtiyar@gmail.com</a></p>
                <p>Istanbul / Turkey</p>
            </div>
        </Fragment>
    )
}

export default Footer