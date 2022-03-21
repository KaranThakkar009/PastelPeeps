import "./App.css";

const App = () => {
  const handleClick = () => {
    const checkbox = document.getElementById("check") as HTMLInputElement;
    checkbox.checked = false;
  };

  return (
    <>
      <nav>
        <input type="checkbox" name="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>
        <img src="https://doodles.app/images/doodles_logo.png" alt="" />
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
            <a onClick={() => handleClick()} href="#">
              FAQs
            </a>
          </li>
          <li>
            <button className="connect-btn">Connect</button>
          </li>
        </ul>
      </nav>

      <div className="marquee">
        <div className="marquee-content">
          <img
            src="https://nft.tinyfac.es/static/media/character8.046243586899b36b2090.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character2.403babe869f3adee74b5.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character3.5902788d18338970e54c.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character4.d8a559ffdc66efd715a4.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character8.046243586899b36b2090.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character2.403babe869f3adee74b5.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character3.5902788d18338970e54c.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character4.d8a559ffdc66efd715a4.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character8.046243586899b36b2090.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character2.403babe869f3adee74b5.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character3.5902788d18338970e54c.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character8.046243586899b36b2090.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character1.e0a210e92ec4cbed8a2a.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character2.403babe869f3adee74b5.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character3.5902788d18338970e54c.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character4.d8a559ffdc66efd715a4.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default App;
