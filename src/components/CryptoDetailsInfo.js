const CryptoDetailsInfo = ({ crypto }) => {
    return (
        <div>
            { crypto && 
                <article>
                    <h2>{ crypto.coin_name } ( { crypto.symbol })</h2>
                    <h3>{ crypto.last_price_usd }</h3>
                    <ul>
                        { crypto.social.explorer && <li><a href={crypto.social.explorer} target="_blank" rel="noreferrer">Explorer</a></li> }
                        { crypto.social.twitter && <li><a href={crypto.social.twitter} target="_blank" rel="noreferrer">Twitter</a></li> }
                    </ul>
                </article>
            }
        </div>
       
    );
}
 
export default CryptoDetailsInfo;