import CryptoList from "../components/CryptoList";
import useFetch from "../components/useFetch";

const Cryptos = () => {
    const { data: cryptos, isLoading, error } = useFetch("http://coincodex.com/api/coincodex/get_coin/XRP");
    return (
        <div className="home">
            { isLoading && <div> Loading...</div> }
            { error && <div>{ error }</div>}
            { cryptos && <CryptoList cryptos={ cryptos }/> }

        </div>
    );
}
 
export default Cryptos;