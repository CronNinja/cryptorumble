import UseFetch from "../components/UseFetch";
import InventoryList from "../components/Inventory/InventoryList";
import {useState} from "react";

const Inventory = () => {
    const [inventory, setInventory] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const [error, setError] = useState("");

    const updateInventory = () => {
        const { data, isLoading, error } = UseFetch("http://strapi.gaybear.capital/inventories/");
        setInventory(data);
        setIsLoading(isLoading);
        setError(error);
    }
    return (
        <div className="home" onLoad={updateInventory}>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { inventory && <InventoryList inventory={inventory.sort((a, b) => (a.type > b.type) ? 1 : -1)} /> }

        </div>
    );
}
 
export default Inventory;