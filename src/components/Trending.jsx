import Sort from './Sort'
import downArrow from '../assets/downArrow.svg'
import dots from '../assets/3-dots.svg'
import { trendingTickers } from '../data.js'
import '../styles/trending.css'

const Trending = () => {
  return (
    <div className="trending">
      <TrendingHeader />
      <TrendingBody />
      <div className="shadow"></div>
    </div>
  )
}

const TrendingBody = () => {
  return (
    <div className="trending-body">
      {trendingTickers.map((t, i) => (
        <Card
          key={i}
          logo={t.logo}
          ticker={t.ticker}
          name={t.name}
          graph={t.graph}
          graphDull={t.graphDull}
          alerts={t.alerts}
          percentage={t.percentage}
          bullish={t.bullish}
        />
      ))}
    </div>
  )
}

const Card = ({
  logo,
  ticker,
  name,
  graph,
  graphDull,
  alerts,
  percentage,
  bullish,
}) => {
  return (
    <div className="card">
      <div className="card-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="card-ticker">{ticker}</div>
      <div className="card-name">{name}</div>
      <img src={dots} alt="dots" className="card-dots" />
      <div className="card-graph">
        <img src={graph} alt="graph" />
      </div>
      <div className="card-graph-dull">
        <img src={graphDull} alt="graph" />
      </div>
      <div className="card-alerts">{alerts} alerts</div>
      <div className="card-percent">
        {bullish ? (
          <>
            <div className="card-percentage-bull">{percentage}%</div>
            <div className="card-bullish">bullish </div>
          </>
        ) : (
          <>
            <div className="card-percentage-bear">{percentage}%</div>
            <div className="card-bullish">bearish </div>
          </>
        )}
      </div>
    </div>
  )
}

const TrendingHeader = () => {
  return (
    <div className="trending-header">
      <div className="trending-tickers">
        <p>Trending tickers</p>
        <img src={downArrow} alt="down arrow" />
      </div>
      <Sort label="This week" />
    </div>
  )
}

export default Trending
