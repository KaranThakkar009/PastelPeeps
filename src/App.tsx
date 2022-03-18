import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <main className="app">
      <AppBar position="static" className="bar-background" style={{marginBottom:"5rem"}}>
        <Toolbar >
          <img src={""} className="logo-img" />


           PastelPeeps

          {/* <Button
            variant="contained"
            color="secondary"
            onClick={openDialog}
            endIcon={<AccountBalanceWalletIcon />}
       
            className="connect-btn"
          >
            {userAddress
              ? userAddress.slice(0, 5) + "..." + userAddress.slice(-5)
              : "Connect"}
          </Button>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          /> */}
        </Toolbar>
      </AppBar>
      <div className="marquee">
        <div className="marquee-content">
          <img
            src="https://nft.tinyfac.es/static/media/character1.757314c824d50099d4f4.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character5.bbee78a943e74e125ace.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character6.887b065876892a3bc33b.jpg"
            alt=""

          />
          <img
            src="https://nft.tinyfac.es/static/media/character7.5dc1143d6e41e775d01f.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character8.a09f097065b0483eec56.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character15.ab1f4b32469e93d54104.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character13.67344d9c9b864a39b6cb.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character10.6ccb548704fd7fd550b8.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character14.2f8d84acfeb4457336fa.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character9.fd1bed3c1f61bae6b000.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character4.d8a559ffdc66efd715a4.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character16.45b779caa2c5cd49533c.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character6.887b065876892a3bc33b.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character15.ab1f4b32469e93d54104.jpg"
            alt=""
          />
          {/* extra images below for scrolling effect to not break */}
          <img
            src="https://nft.tinyfac.es/static/media/character1.757314c824d50099d4f4.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character5.bbee78a943e74e125ace.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character6.887b065876892a3bc33b.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character7.5dc1143d6e41e775d01f.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character8.a09f097065b0483eec56.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character15.ab1f4b32469e93d54104.jpg"
            alt=""
          />
          <img
            src="https://nft.tinyfac.es/static/media/character13.67344d9c9b864a39b6cb.jpg"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default App;
