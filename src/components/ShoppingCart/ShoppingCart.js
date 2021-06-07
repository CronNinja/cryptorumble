import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShoppingCartBody from './ShoppingCartBody';
import { useHistory } from 'react-router-dom';

const ShoppingCart = ({handleShowClose, showCart, cart, setCart, inventory }) => {
  const history = useHistory();
  const clearCart = () => {
    setCart([]);
    handleShowClose();
  }

  const checkOut = (e) => {
    e.preventDefault();
    cart.map((item) => {
        fetch("http://159.89.224.58/inventories/" + item.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: (inventory[item.id].quantity - item.quantity)
            })
        }).then(() => {
            //setCart([]);
            history.push("/inventory");
        });
        return (console.log("Updated: "));
      });
  }
  return (
    <>
      <Modal show={ showCart } onHide={handleShowClose} animation={false}>
        <Modal.Header>
          <Modal.Title>Shopping Cart</Modal.Title>
          <button type="button" className="btn-close" aria-label="Close" onClick={handleShowClose}></button>
        </Modal.Header>
        <Modal.Body><ShoppingCartBody cart={ cart }/></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={clearCart}>Clear Cart</Button>
          <Button variant="primary" onClick={checkOut}>Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 
export default ShoppingCart;