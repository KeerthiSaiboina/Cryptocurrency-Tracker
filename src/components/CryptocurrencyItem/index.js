// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euro} = cryptocurrencyDetails
  return (
    <li>
      <div>
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-logo"
        />
        <p>{currencyName}</p>
        <div>
          <p>{usdValue}</p>
          <p>{euro}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
