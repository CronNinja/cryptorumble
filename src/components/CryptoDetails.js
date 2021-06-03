import { useParams } from "react-router";
import CryptoDetailsInfo from "./CryptoDetailsInfo";
import useFetch from "./useFetch";

const CryptoDetails = () => {
    const { symbol } = useParams();
    const { data: crypto, isLoading, error } = useFetch("https://coincodex.com/api/coincodex/get_coin/" + symbol.toUpperCase());
    return (
        <div className="crypto-details">
            { isLoading && <div> Loading...</div> }
            { error && <div>{ error }</div> }
            { crypto && <CryptoDetailsInfo crypto={crypto[0]} />}
        </div>
    );
}
 
export default CryptoDetails;