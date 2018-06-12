import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            On March 1st, 2018, 9000 CryptoKitties players were chosen at
            random to receive an airdrop of 100m AVO tokens each. The
            reasoning for this was because CK players were recognized as
            creative, innovative, and positive users of crypto. This action
            has been dubbed the world's first reverse-ICO, bringing people
            together for the purpose of community and collaboration.
          </p>
          <p>
            Around the time of March 18th the original creator of AVO token
            suddenly disappeared and took all projects and social media
            platforms related to AVO with them. They also burned their own
            supply of the tokens, reducing the number from 100 trillion to
            900 billion that are now in circulation.
          </p>
          <p>
            The community assembled here thus far had to ask: what do we do
            with our AVO? It would seem that the creator of this token,
            whoever they are, has left it up to us to decide.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Current Goals</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <ul>
            <li>
              <p>
                As of April 2018, we are still trying to reach many original
                hodlers of AVO, while simultaneously trying to bring new and
                interested users on board. A longer-term goal of 500-1000
                users is desired.
              </p>
            </li>
            <li>
              <p>
                We need a viable use case for AVO. The original project
                included a clicker-type dapp and a possible partnership with
                an ETH-based game/dapp. Other ideas include possibly
                partnering with local grocery chains/farmer's markets.
                Charity is also a viable option.
              </p>
            </li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Bounties</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            AVO bounties will be placed on various tasks here. Please donate
            AVO tokens for bounties to the Avocado Bounty Pool address here:
            0x7d0ebffc56429c818f34d0b46e239436fbe0fa5f Small amounts of ETH
            are also very welcome for transaction fees.
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/AvocadoToken" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/AVOToken/" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/avo_avocado_token/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/AvocadoNetwork" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/user/hodlandfodl/comments/896zqm/cryptokitties_and_the_avo_token_connection/?st=jfs09en1&sh=b1a6c472" className="icon fa-reddit">
                <span className="label">Reddit</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main