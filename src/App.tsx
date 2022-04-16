import "./App.css";
import { data } from "./assets/data/faq-data-list";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import logo from "./assets/TWT_HEADER_9.jpg";
import logo from "./assets/LOGO.png";
import twitterLogo from "./assets/twitter2.png";
import discordLogo from "./assets/discord2.png";
import notionLogo from "./assets/notion8.png";
import {
  imagesDetails,
  imagesDetails2,
} from "./assets/scroll-animations/imagesDetails";
import { roadmapList } from "./assets/data/roadmap-list";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "500px",
  maxWidth: "100%",
  height: "300px",
  overflowY: "scroll",
};

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <label className="checkbox-label" htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>
        <div className="logo">
          <a href="https://pastelpeeps.netlify.app/">
            <img className="logo-img" src={logo} alt="logo" />
          </a>
        </div>
        <ul className="links-ul">
          <li className="">
            <a onClick={() => handleClick()} href="#prelude">
              Prelude
            </a>
          </li>
          <li className="">
            <a onClick={() => handleClick()} href="#roadmap">
              Roadmap
            </a>
          </li>
          <li className="">
            <a onClick={() => handleClick()} href="#faq">
              FAQs
            </a>
          </li>
          <li className="">
            <a onClick={() => handleClick()} href="#team">
              Team
            </a>
          </li>
        </ul>
        <ul className="social-media-ul">
          <li className="">
            <a
              onClick={() => handleClick()}
              href="http://discord.gg/PastelPeeps"
              target="_blank"
            >
              <img
                className="discord discord-logo"
                src={discordLogo}
                alt="Discord Logo"
              />
            </a>
          </li>
          <li className="menu-items social-media-icons">
            <a
              onClick={() => handleClick()}
              href="https://twitter.com/PastelPeepsNFT"
              target="_blank"
            >
              <img
                className="twitter-logo"
                src={twitterLogo}
                alt="Twitter Logo"
              />
            </a>
          </li>
          <li className="menu-items social-media-icons">
            <a
              onClick={() => handleClick()}
              href="https://pastelpeeps.notion.site/pastelpeeps/PastelPeepsNFT-f9293f8efcc24d6ea863c2f8ee10c5d3"
              target="_blank"
            >
              <img
                className="notion notion-logo"
                src={notionLogo}
                alt="Notion Logo"
              />
            </a>
          </li>
        </ul>
      </nav>
      {/* content section */}
      {/* <div className="marquee">
        {imagesDetails.map((item, idx) => (
          <div className="marquee-content">
            <div className="inner-content-img">
              <img src={item.imageSrc} alt="" />
            </div>
            <div className="inner-content-text">
              <span>{item.name}</span>
              <span>#{item.price}</span>
            </div>
            <div className="inner-content-rating">
              <div className="rating">
                <FaEthereum />
                {item.price}
              </div>
              <div className="likes">
                <BiHeart />
                {item.likes}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="marquee">
        {imagesDetails2.map((item, idx) => (
          <div className="marquee-content2">
            <div className="inner-content-img">
              <img src={item.imageSrc} alt="" />
            </div>
            <div className="inner-content-text">
              <span>{item.name}</span>
              <span>#{item.price}</span>
            </div>
            <div className="inner-content-rating">
              <div className="rating">
                <FaEthereum />
                {item.price}
              </div>
              <div className="likes">
                <BiHeart />
                {item.likes}
              </div>
            </div>
          </div>
        ))}
      </div> */}
      {/* Prelude */}
      <section className="prelude" id="prelude">
        <div className="prelude-title">Prelude</div>
        <div className="staking">
          {/* <div className="staking-title">Staking</div> */}
          <div className="staking-content">
            <img className="prelude-img" src="prelude.png" alt="" />
          </div>
        </div>
      </section>
      {/* Prelude ends */}
      {/* Roadmap */}
      <div className="prelude" id="roadmap">
        <div className="prelude-title">Roadmap</div>
        <div className="staking">
          {/* <div className="staking-title">Staking</div> */}
          <div className="staking-content">
            <img className="prelude-img" src="roadmap.jpg" alt="" />
            <button className="read-more" onClick={handleOpen}>
              Read more...
            </button>
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modal-text">
            {roadmapList.map((item, idx) => {
              return (
                <div key={idx}>
                  <div style={{ fontWeight: "600" }}>{item.title}</div>
                  <div>{item.description}</div>
                  <br />
                </div>
              );
            })}
          </Box>
        </Modal>
      </div>
      {/* Roadmap ends */}
      {/* FAQs section */}
      <div className="wrapper" id="faq">
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

      {/* Team card */}
      <div className="teams" id="team">
        <div className="prelude-title">TEAM</div>
        <div className="card">
          <Card className="single-card" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={imagesDetails[0].imageSrc}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cryptozor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Come for the art, stay for the community
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Discord</Button>
              <Button size="small">Twitter</Button>
            </CardActions>
          </Card>

          <Card className="single-card" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={imagesDetails[1].imageSrc}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cryptozor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Come for the art, stay for the community
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Discord</Button>
              <Button size="small">Twitter</Button>
            </CardActions>
          </Card>

          <Card className="single-card" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={imagesDetails[2].imageSrc}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cryptozor
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Come for the art, stay for the community
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Discord</Button>
              <Button size="small">Twitter</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
