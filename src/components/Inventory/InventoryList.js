import { Link } from "react-router-dom";

const InventoryList = ({ inventory }) => {
    return (
        <div className="crypto-list">
        {inventory.map(i => (
          <div className="crypto-preview" key={i.name} >
            <Link to={`/inventory/${ i.id }`}>
              <h2>{ i.name }</h2>
              <p>{ i.description }: { i.price }</p>
              <p>Quantity: { i.quantity }</p>
            </Link>
          </div>
        ))}
      </div>
    );
}
 
export default InventoryList;