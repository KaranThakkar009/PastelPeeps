import "./App.css";
import { data } from "./assets/data/faq-data-list";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const handleClick = () => {
    const checkbox = document.getElementById("check") as HTMLInputElement;
    checkbox.checked = false;
  };

  return (
    <div className="main">
      {/* navbar section */}
      <nav>
        <input type="checkbox" name="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>
        <div className="logo">
          <a href="/home">
            <img src="https://doodles.app/images/doodles_logo.png" alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a onClick={() => handleClick()} href="#">
              Prelude
            </a>
          </li>
          <li>
            <a onClick={() => handleClick()} href="#">
              Metaverse Mall
            </a>
          </li>
          <li className="menu-items">
            <a onClick={() => handleClick()} href="#question1">
              FAQs
            </a>
          </li>
          <li>
            <button className="connect-btn">Mint</button>
          </li>
        </ul>
      </nav>
      {/* content section */}
      <div className="marquee">
        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character8.046243586899b36b2090.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character2.403babe869f3adee74b5.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character3.5902788d18338970e54c.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character4.d8a559ffdc66efd715a4.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character8.046243586899b36b2090.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character2.403babe869f3adee74b5.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character3.5902788d18338970e54c.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character4.d8a559ffdc66efd715a4.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character8.046243586899b36b2090.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character4.d8a559ffdc66efd715a4.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character8.046243586899b36b2090.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character2.403babe869f3adee74b5.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>

        <div className="marquee-content">
          <div className="inner-content-img">
            <img
              src="https://nft.tinyfac.es/static/media/character3.5902788d18338970e54c.jpg"
              alt=""
            />
          </div>
          <div className="inner-content-text">
            <span>alien frame</span>
            <span>#32423</span>
          </div>
          <div className="inner-content-rating">
            <div className="rating">2.3</div>
            <div className="likes">15</div>
          </div>
        </div>
      </div>
      {/* Prelude */}
      <div className="prelude">
        <div className="prelude-title">Prelude</div>
        <div className="staking">
          <div className="staking-title">Staking</div>
          <div className="staking-content">
            <q>
              The History we wrote, filled with colours and joy has been stolen,
              it is up to the peeps to reclaim it
            </q>
            -Master Peep In a world where colour once filled every nook and
            cranny, and the peeps lived happily A group of nefarious peeps have
            devised a way to steal the colours of the peeps. This not only made
            them dismal and bleaker, but made the nefarious peeps stronger. This
            was when the resistance was formed: To fight against the tyranny of
            the nefarious peeps and to reclaim the colours they had once lost.
            As time passed the resistance of 50 had grown into the thousands.
            The peeps were now fed up of their colours being stolen. Soon word
            spread to the nefarious ones, “Nonsense! The peeps will never come
            back for their colors. We have made them too weak to do so!” A
            nefarious peep said with a smirk. However, in due time, the peeps
            will prove otherwise and fight towards bringing back their colour
            and bringing back the original sense of community that was once
            loved by all. PastelPeeps is the resistance
          </div>
        </div>
      </div>
      {/* Prelude ends */}

      {/* FAQs section */}
      <div className="wrapper" id="question1">
        <div className="container">
          <h3 className="faq-title">FAQs</h3>
          <div className="accordion">
            {data.map((item, idx) => (
              <div className="item">
                <div className="title" onClick={() => toggle(idx)}>
                  <h2>{item.question}</h2>
                  <span className="accordion-icon">
                    {selected === idx ? "-" : "+"}
                  </span>
                </div>
                <div className={selected === idx ? "content show" : "content"}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQs ends */}
    </div>
  );
};

export default App;
