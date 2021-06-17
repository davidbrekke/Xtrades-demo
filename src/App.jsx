import { useState } from 'react'
import { IoMdThumbsUp } from 'react-icons/io'
import { BsBookmarkFill } from 'react-icons/bs'
import { RiDiscussFill } from 'react-icons/ri'

import tradeDetailPath from './assets/trade-detail-path.svg'
import tradeDetailPathDull from './assets/trade-detail-path-dull.svg'
import tip from './assets/tip.svg'
import attach from './assets/attach.svg'
import smiley from './assets/smiley.svg'
import apple from './assets/apple.svg'
import comment from './assets/comment.png'
import spy from './assets/spy.png'
import tesla from './assets/tesla.svg'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Trending from 'components/Trending'
import Recent from 'components/Recent'
import close from './assets/close.svg'
import guru from './assets/guru.png'

import './styles/index.css'
import './styles/modal.css'

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <Sidebar />
      <Header />
      <Trending />
      <Recent modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <TradeModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  )
}

const TradeModal = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    modalIsOpen && (
      <div className="tradeModal">
        <div className="modal-content">
          <div
            className="close-modal-btn"
            onClick={() => setModalIsOpen(!modalIsOpen)}
          >
            <img src={close} alt="x" />
          </div>
          <div className="traderInfo">
            <div className="trader-modal">
              <div className="trader-avatar">
                <img src={guru} alt="avatar" />
                <div className="trader-number">88</div>
              </div>
              <div className="trader-info">
                <p className="trader-name">Xtrades Options Guru</p>
                <p className="trader-handle">@Xtrades8905</p>
              </div>
            </div>
            <div className="follow">Follow</div>
          </div>
          <div className="traderStats">
            <p className="trader-stats-title">Trader's stats</p>
            <div className="stats">
              <div className="stat">
                <p className="stat-number">74</p>
                <p className="stat-title">Rank</p>
              </div>
              <div className="stat">
                <p className="stat-number">88%</p>
                <p className="stat-title">Win Rate</p>
              </div>
              <div className="stat">
                <p className="stat-number">9 %</p>
                <p className="stat-title">Avg. gain</p>
              </div>
              <div className="stat">
                <p className="stat-number">18 min</p>
                <p className="stat-title">Avg. trade time</p>
              </div>
            </div>
          </div>
          <div className="traderStyle">
            <div className="trader-style-title">Trader's style</div>
            <div className="styles">
              <div className="style-tag">Swing</div>
              <div className="style-tag">Lotto</div>
              <div className="style-tag">Risky</div>
              <div className="style-tag">Day</div>
              <div className="style-tag">Penny Stocks</div>
              <div className="style-tag">Technicals</div>
              <div className="style-tag">Buy & hold</div>
              <div className="style-tag">Momentum</div>
            </div>
          </div>
          <div className="traderAlerts">
            <div className="trader-alerts-title">Trader's other alerts</div>
            <div className="trader-alerts">
              <div className="trade-alert">
                <div className="trade-logo logo-margin">
                  <img src={apple} alt="logo" />
                </div>
                <div className="trade-info">
                  <p className="trade-title">Bought AAPL shares</p>
                  <p className="trade-amount">@ $210.22</p>
                </div>
                <p className="trade-date-time">Today, 6:53 PM</p>
              </div>
              <div className="trade-alert">
                <div className="trade-logo logo-margin">
                  <img src={spy} alt="logo" />
                </div>
                <div className="trade-info">
                  <p className="trade-title">Sold SPY put 08/18/21</p>
                  <p className="trade-amount">@ $210.22</p>
                </div>
                <p className="trade-date-time">Yesterday, 6:53 PM</p>
              </div>
              <div className="trade-alert">
                <div className="trade-logo logo-margin">
                  <img src={tesla} alt="logo" />
                </div>
                <div className="trade-info">
                  <p className="trade-title">Bought TSLA call 08/18/21</p>
                  <p className="trade-amount">@ $210.22</p>
                </div>
                <p className="trade-date-time">Today, 6:53 PM</p>
              </div>
            </div>
          </div>
          <div className="tradeInfo">
            <div className="trade-logo logo-margin">
              <img src={spy} alt="logo" />
            </div>
            <div className="trade-info">
              <p className="trade-title">Sold SPY put 08/18/21</p>
              <p className="trade-amount">@ $210.22</p>
            </div>
            <p className="trade-time">6:53 PM</p>
            <div className="trade-result">Up 4%</div>
            <div className="actions">
              <div className="likes center">
                <IoMdThumbsUp style={iconStyles} />
                24
              </div>
              <div className="bookmarks center">
                <BsBookmarkFill style={iconStyles} />7
              </div>
              <div className="comments center">
                <RiDiscussFill style={iconStyles} />
                37
              </div>
            </div>
            <div className="tip-btn">
              <img src={tip} alt="tip" />
              Give a tip
            </div>
          </div>
          <div className="tradeDetails">
            <div className="trade-details-title">SPY entry at old support</div>
            <div className="trade-details-tags">
              <div className="trade-details-tag">Momentum</div>
              <div className="trade-details-tag">Lotto</div>
              <div className="trade-details-tag">Technicals</div>
            </div>
            <div className="trade-details-text">
              More of the same. Thursdays. Look at how we've been doing on
              Thursdays lately (chart below). We get a pullback then a rise. The
              one hour chart always gets to a bottom point and we rise from
              there. Let's see how the day goes from here. This SPY 417.6ish
              line is old support and resistance, showing us how unstable we are
              at this point. <br />
              <br />
              On a possible rise we need to keep an eye on is EOG. 86.6 is the
              breakout point. However 85.5 is where it's currently struggling.
              It was upgraded this morning and increased PT. <br />
              <br />
              Please don't look at meme plays where they could have doubled your
              accounts if you'd only played them larger. They can also destroy
              your account in a flash. Play wisely. Know your limits. Trading is
              NOT a tool to make you rich overnight. It's a process. A mind set.
            </div>
            <div className="new-comment">
              <img src={comment} alt="avatar" className="comment-avatar" />
              <input
                type="text"
                className="write-comment"
                placeholder="Write your message..."
              />
              <div className="send-message">Send</div>
              <div className="message-extras">
                <img src={smiley} alt="smiley" className="pointer" />
                <img src={attach} alt="attach" className="pointer" />
              </div>
            </div>
            <div className="trade-path">
              <img
                src={tradeDetailPath}
                alt="trade path"
                className="trade-detail-path"
              />
              <img
                src={tradeDetailPathDull}
                alt="trade path"
                className="trade-detail-path-dull"
              />
            </div>
          </div>
        </div>
      </div>
    )
  )
}
const iconStyles = { color: '#D2DAE2', fontSize: '20px' }

export default App
