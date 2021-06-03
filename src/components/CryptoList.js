import { Link } from "react-router-dom";

const CryptoList = ({ cryptos }) => {
    return (
        <div className="crypto-list">
        {cryptos.map(crypto => (
          <div className="crypto-preview" key={crypto.symbol} >
            <Link to={`/cryptos/${ crypto.symbol }`}>
              <h2>{ crypto.coin_name }</h2>
              <p>{ crypto.symbol }: { crypto.last_price_usd }</p>
            </Link>
          </div>
        ))}
      </div>
    );
}
 
export default CryptoList;