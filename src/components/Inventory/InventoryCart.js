import { useState } from "react";
import { Button, Col } from "react-bootstrap";

const InventoryCart = ({ inv, cart, setCart }) => {
    const [qty, setQty] = useState(0);
    const [error, setError] = useState("");

    const updateCart = () => {
        let q = Number(qty);
        const fCart = cart.filter((i) => {
            if(i.id === inv.id){
                q += Number(i.quantity);
                return false;
            };
            return true;
        });
        setCart([...fCart, {
            name: inv.name,
            quantity: q,
            id: inv.id
            }
        ]);
    }
    const validate = (q) => {
        if(q > inv.quantity){
            setError("Please try not to buy more than " + inv.quantity);
            document.getElementById('addToCartButton').disabled = true;
        } else {
            setError("");
            document.getElementById('addToCartButton').disabled = false;
            setQty(q);
        }
    }
    return ( 
        <form >
            <Col>
                <input
                    type="number"
                    value={ qty }
                    placeholder="1"
                    min="0"
                    max={ inv.quantity }
                    onChange={(e) => validate(e.target.value)}
                />
            </Col>
            {
                error && <div className="error-text">
                    { error }
                </div>
            }
            <Col>
                <Button id="addToCartButton" onClick={() => updateCart(qty)}>Add to Cart</Button>
            </Col>
        </form>
    );
}
 
export default InventoryCart;