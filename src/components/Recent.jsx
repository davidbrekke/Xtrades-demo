import { IoMdThumbsUp } from 'react-icons/io'
import { BsBookmarkFill } from 'react-icons/bs'
import { RiDiscussFill } from 'react-icons/ri'

import Sort from './Sort'
import '../styles/recent.css'
import tableDown from '../assets/table-down.svg'
import { tableData } from '../data.js'

const { headers, alerts } = tableData

const Recent = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <div className="recent">
      <RecentHeader />
      <RecentTable modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  )
}

const RecentTable = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <table className="recent-table">
      <TableHeader />
      <TableBody modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </table>
  )
}

const TableBody = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <tbody className="table-body">
      {alerts.map((a, i) => {
        return a.closed === false ? (
          <tr
            className="tr-open"
            key={i}
            onClick={() => {
              setModalIsOpen(!modalIsOpen)
            }}
          >
            <td className="trader t-trader">
              <div className="trader-avatar">
                <img src={a.trader.avatar} alt="" />
                <div className="trader-number">{a.trader.number}</div>
              </div>
              <div className="trader-info">
                <p className="trader-name">{a.trader.name}</p>
                <p className="trader-handle">@{a.trader.handle}</p>
              </div>
            </td>
            <td className="trade t-trade">
              <div className="trade-logo">
                <img src={a.trade.logo} alt="logo" />
              </div>
              <div className="trade-info">
                <p className="trade-title">{a.trade.title}</p>
                <p className="trade-amount">{a.trade.amount}</p>
              </div>
            </td>
            <td className="st t-strat">
              {a.strategyType.length > 2 && (
                <div className="strategy-type ">
                  <div className="strategy open">{a.strategyType[0]}</div>
                  <div className="strategy open">{a.strategyType[1]}</div>
                  <div className="strategies-left-open">
                    +{a.strategyType.length - 2}
                  </div>
                </div>
              )}
              {a.strategyType.length <= 2 &&
                a.strategyType.map((s, i) => (
                  <div key={i} className="strategy open">
                    {s}
                  </div>
                ))}
            </td>
            <td className="open-close t-oc">
              {a.closed ? (
                <>
                  <p className="opened">Opened {a.opened}</p>
                  <p className="closed">Closed {a.closed}</p>
                </>
              ) : (
                <p className="opened">Opened {a.opened}</p>
              )}
            </td>
            <td className="profit-loss t-pl">
              {a.profit[0] === 'Up' && (
                <div className="up">Up {a.profit[1]}</div>
              )}
              {a.profit[0] === 'Made' && (
                <div className="made">Made {a.profit[1]}</div>
              )}
              {a.profit[0] === 'Down' && (
                <div className="down">Down {a.profit[1]}</div>
              )}
              {a.profit[0] === 'Lost' && (
                <div className="lost">Lost {a.profit[1]}</div>
              )}
            </td>
            <td className="actions t-actions">
              <div className="likes center">
                <IoMdThumbsUp style={iconStyles} />
                {a.actions.likes}
              </div>
              <div className="bookmarks center">
                <BsBookmarkFill style={iconStyles} />
                {a.actions.bookmarks}
              </div>
              <div className="comments center">
                <RiDiscussFill style={iconStyles} />
                {a.actions.comments}
              </div>
            </td>
          </tr>
        ) : (
          <tr
            className="tr-closed"
            key={i}
            onClick={() => {
              setModalIsOpen(!modalIsOpen)
            }}
          >
            <td className="trader t-trader">
              <div className="trader-avatar">
                <img src={a.trader.avatar} alt="" />
                <div className="trader-number">{a.trader.number}</div>
              </div>
              <div className="trader-info">
                <p className="trader-name">{a.trader.name}</p>
                <p className="trader-handle">@{a.trader.handle}</p>
              </div>
            </td>
            <td className="trade t-trade">
              <div className="trade-logo">
                <img src={a.trade.logo} alt="logo" />
              </div>
              <div className="trade-info">
                <p className="trade-title">{a.trade.title}</p>
                <p className="trade-amount">{a.trade.amount}</p>
              </div>
            </td>
            <td className="st t-strat">
              {a.strategyType.length > 2 && (
                <div className="strategy-type">
                  <div className="strategy close">{a.strategyType[0]}</div>
                  <div className="strategy close">{a.strategyType[1]}</div>
                  <div className="strategies-left-close">
                    +{a.strategyType.length - 2}
                  </div>
                </div>
              )}
              {a.strategyType.length <= 2 &&
                a.strategyType.map((s, i) => (
                  <div key={i} className="strategy close">
                    {s}
                  </div>
                ))}
            </td>
            <td className="open-close t-oc">
              {a.closed ? (
                <>
                  <p className="opened">Opened {a.opened}</p>
                  <p className="closed">Closed {a.closed}</p>
                </>
              ) : (
                <p className="opened">Opened {a.opened}</p>
              )}
            </td>
            <td className="profit-loss t-pl">
              {a.profit[0] === 'Up' && (
                <div className="up">Up {a.profit[1]}</div>
              )}
              {a.profit[0] === 'Made' && (
                <div className="made">Made {a.profit[1]}</div>
              )}
              {a.profit[0] === 'Down' && (
                <div className="down">Down {a.profit[1]}</div>
              )}
              {a.profit[0] === 'Lost' && (
                <div className="lost">Lost {a.profit[1]}</div>
              )}
            </td>
            <td className="actions t-actions">
              <div className="likes center">
                <IoMdThumbsUp style={iconStylesBlue} />
                {a.actions.likes}
              </div>
              <div className="bookmarks center">
                <BsBookmarkFill style={iconStylesBlue} />
                {a.actions.bookmarks}
              </div>
              <div className="comments center">
                <RiDiscussFill style={iconStyles} />
                {a.actions.comments}
              </div>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

const iconStyles = { color: '#D2DAE2', fontSize: '20px' }
const iconStylesBlue = { color: '#00A5EA', fontSize: '20px' }

const TableHeader = () => {
  return (
    <thead className="table-header">
      <tr className="trh">
        <th className="th t-trader">
          Trader
          <img src={tableDown} alt="down arrow" />
        </th>
        <th className="th t-trade">
          Trade
          <img src={tableDown} alt="down arrow" />
        </th>
        <th className="th t-strat">Strategy type</th>
        <th className="th t-oc">
          Open / close
          <img src={tableDown} alt="down arrow" />
        </th>
        <th className="th t-pl">
          Profit / lose
          <img src={tableDown} alt="down arrow" />
        </th>
        <th className="th t-actions">
          Actions
          <img src={tableDown} alt="down arrow" />
        </th>
      </tr>
    </thead>
  )
}

const RecentHeader = () => {
  return (
    <div className="recent-header">
      <h2 className="recent-alerts">Recent alerts</h2>
      <div className="recent-header-bottom">
        <RecentCategory />
        <Sort label="All" />
      </div>
    </div>
  )
}

const RecentCategory = () => {
  return (
    <div className="recent-category">
      <div className="recent-all">All</div>
      <div className="divider"></div>
      <div className="recent-top">Top alerts</div>
      <div className="divider"></div>
      <div className="recent-following">Following</div>
    </div>
  )
}

export default Recent
