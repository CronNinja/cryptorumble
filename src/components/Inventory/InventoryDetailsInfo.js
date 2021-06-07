import { Col, Row } from "react-bootstrap";
import InventoryCart from './InventoryCart'

const InventoryDetailsInfo = ({ inv, cart, setCart }) => {
    return (
        <div className="crypto-details">
            { inv && 
                <article>
                    <Row><h2>{ inv.name }</h2></Row>
                    <Row><h3>{ inv.description }</h3></Row>
                    <Row>
                        <Col>${ inv.price } | QTY: { inv.quantity }</Col>
                    </Row>
                    <Row>
                        <InventoryCart inv={ inv } cart={ cart } setCart={ setCart }/>
                    </Row>
                </article>
            }
        </div>
       
    );
}
 
export default InventoryDetailsInfo;