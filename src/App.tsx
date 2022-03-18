import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./App.css";
import {
  AppBar,
  Button,
  Grid,
  Slider,
  Toolbar,
  IconButton,
  Snackbar,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Moralis } from "moralis";
import { useState } from "react";
import { ABI } from "./abi";
import logo from "./assets/logo.png"; // Tell Webpack this JS file uses this image
import wcIcon from "./assets/walletconnect.jpeg"; 
import mmIcon from "./assets/metamask.png"; 

// 0x5b228e392ba2F8ee133f98FE60E00526A52067EA
const CONTRACT_ADDRESS = "0x5b228e392ba2F8ee133f98FE60E00526A52067EA";
// const Moralis = require("moralis");
interface IBalance {
  address: string;
}

function mixedSendOptions(freeCount: number, paidCount: number, price: number) {
  var opt = {
    contractAddress: CONTRACT_ADDRESS,
    functionName: "mint",
    abi: ABI,
    params: {
      freeCount: freeCount,
      paidCount: paidCount,
    },
    msgValue: Moralis.Units.ETH(`${paidCount * price}`.slice(0, 7)),
  };
  return opt;
}

const readTotalSupply = {
  contractAddress: CONTRACT_ADDRESS,
  functionName: "totalSupply",
  abi: ABI,
};

const readIsMintingOn = {
  contractAddress: CONTRACT_ADDRESS,
  functionName: "isMintingOn",
  abi: ABI,
};

const readCanUserFreeMint = {
  contractAddress: CONTRACT_ADDRESS,
  functionName: "canUserFreeMint",
  abi: ABI,
};

export default function App() {
  var interval: any;
  const [open, setOpen] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [canUserFreeMint, setCanUserFreeMint] = React.useState(false);
  const [mintingOn, setMintingOn] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [mintCount, setMintCount] = React.useState(7);
  const [transaction, setTransaction] =
    React.useState<Moralis.ExecuteFunctionResult>();

  const [totalAvailableSupply, setTotalAvailableSupply] =
    React.useState("????");
  const [user, setUser] = useState<any>();
  const [selectedValue, setSelectedValue] = React.useState<
    "MetaMask" | "WalletConnect"
  >("MetaMask");

  const handleClose = (value: "MetaMask" | "WalletConnect") => {
    setOpen(false);
    login(value);
  };

  var userAddress = user?.account as string;
  const options: IBalance = {
    address: "",
  };

  async function openDialog() {
    if (loggedIn) {
      cleanUp();
      setLoggedIn(false);
    } else {
      setOpen(true);
    }
  }

  const handleSnackbarClick = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <>
      <IconButton size="small" aria-label="close" onClick={handleSnackbarClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const styles = {
    media: {
      height: "100%",
      width: "100%",
    },
    card: {
      position: "relative" as "relative",
    },
    overlay: {
      position: "absolute" as "absolute",
      padding: "10% 12%",
      color: "black",
    },
  };

  // add from here down
  async function login(type: "MetaMask" | "WalletConnect") {
    clearInterval(interval);
    if (type == "MetaMask") {
      await Moralis.Web3.enableWeb3({ chainId: 1 });
      setLoggedIn(Moralis.Web3.isWeb3Enabled());
     
      const _canUserFreeMint = (await Moralis.Web3.executeFunction(
        readCanUserFreeMint
      )) as unknown as boolean;
      setCanUserFreeMint(_canUserFreeMint);
     
      interval = setInterval(function () {
        totalRemainingSupply();
      }, 2000);
      
      const web3ChainId = Moralis.Web3.getChainId();
      console.log("chain id :" + web3ChainId);
    } else {
      await Moralis.Web3.enableWeb3({
        chainId: 1,
        provider: "walletconnect",
      });
      const _canUserFreeMint = (await Moralis.Web3.executeFunction(
        readCanUserFreeMint
      )) as unknown as boolean;
      setCanUserFreeMint(_canUserFreeMint);
      setLoggedIn(true);
      interval = setInterval(function () {
        totalRemainingSupply();
      }, 2000);
      // --> "0x39af55979f5b690fdce14eb23f91dfb0357cb1a27f387656e197636e597b5b7c"
      // Wait until the transaction is confirmed
    }
    // setNfts(await (Moralis.Web3API.account as any).getNFTs(options));
  }

  const onWeb3Enabled = Moralis.Web3.onWeb3Enabled((result) => {
    setUser(result);
  });

  const onWeb3Disabled = Moralis.Web3.onWeb3Deactivated((result) => {
    setUser(null);
  });

  const onSliderChange = (event: any, value: any) => setMintCount(value);

  return (
    <div className="bg">
      <AppBar position="static" className="bar-background">
        <Toolbar>
          <img src={logo} className="logo-img" />

          <Typography
            variant="h5"
            component="div"
            color={"rgb(94,190,215)"}
            sx={{ flexGrow: 1 }}
          >
            &nbsp;
          </Typography>
          <Button
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
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className="data">
        <Grid container>
          <Grid
            item
            xs={0}
            sm={3}
            md={4}
            lg={4}
            justifyItems={"center"}
            justifyContent={"center"}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            alignContent={"center"}
            alignSelf="center"
            alignItems="center"
          >
            <Box className="bubble">
              <div
                className="logo-lg"
                style={{ padding: "20% 20% 0 20%", marginTop: -20 }}
              ></div>
              <div style={{ padding: "5% 20% 0 20%", marginTop: -20 }}>
                <span className="mint-btn"> Price : <b>FREE</b></span>
               <br/> <span className="mint-btn-sm">7 mints cost ~ 2.5x gas of 1</span>
              {/* {canUserFreeMint ? (
                  <span className="mint-btn">
                    {" & "}1 <b>FREE</b> mint{" "}
                  </span>
                ) : (
                  ""
                )} */}
                <br />
                <Typography gutterBottom>
                  <span className="syne-tactile">Select Quantity : </span>
                </Typography>
                <Slider
                  aria-label="Mints"
                  defaultValue={7}
                  // getAriaValueText={valuetext}
                  onChange={onSliderChange}
                  valueLabelDisplay="on"
                  step={1}
                  marks
                  min={1}
                  max={7}
                />

                <Grid container>
                  <Grid item xs={0} sm={0} md={5} lg={5}>
                    <Button
                      size="large"
                      variant="contained"
                      disabled={!loggedIn}
                    >
                      <span className="syne-tactile-lg" onClick={mixedMint}>
                        Mint
                      </span>
                    </Button>
                  </Grid>
                  <Grid item xs={7} sm={7} md={7} lg={7}>
                    <Typography gutterBottom>
                      <span
                        className="syne-tactile"
                        style={{ textAlign: "right" }}
                      >
                      {totalAvailableSupply} left
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={8000}
        onClose={handleSnackbarClose}
        message={
          <>
            {mintingOn ? (
              <>
                <b> Etherscan:</b>
                <a
                  target={"_blank"}
                  href={"https://etherscan.io/tx/" + transaction?.hash}
                >
                  {" " +
                    transaction?.hash?.slice(0, 7) +
                    "..." +
                    transaction?.hash?.slice(-7)}
                </a>
              </>
            ) : (
              <span>MINTING NOT STARTED YET</span>
            )}
          </>
        }
        action={action}
      />
    </div>
  );

  async function mixedMint() {
    const _isMintingOn = (await Moralis.Web3.executeFunction(
      readIsMintingOn
    )) as unknown as boolean;
    setMintingOn(_isMintingOn);
    if (_isMintingOn) {
      const _canUserFreeMint = (await Moralis.Web3.executeFunction(
        readCanUserFreeMint
      )) as unknown as boolean;
      setCanUserFreeMint(_canUserFreeMint);
      var freeMint = 0;
      var paidMint = mintCount;

      try {
        const _x = mixedSendOptions(freeMint, paidMint, 0.0);
        const x = await Moralis.Web3.executeFunction(_x);
        setTransaction(x);
        console.log(transaction?.hash);
        handleSnackbarClick();
      } catch (err: any) {
        if (err["code"] === 4001) {
          alert("USER REJECTED TRANSACTION");
        } else if (err["code"] === "INSUFFICIENT_FUNDS") {
          alert("WALLET DOES NOT HAVE REQUIRED BALANCE");
        } else {
          alert(JSON.stringify(err));
        }
      }
    } else {
      alert("Minting not yet started");
    }
  }

  async function cleanUp() {
    await Moralis.Web3.cleanup();
    await Moralis.Web3.deactivateWeb3();
  }
  async function totalRemainingSupply() {
    const _count = await Moralis.Web3.executeFunction(readTotalSupply);
    setTotalAvailableSupply((4222 - (_count as unknown as number)).toString());
  }
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: "MetaMask" | "WalletConnect";
  onClose: (value: "MetaMask" | "WalletConnect") => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: "MetaMask" | "WalletConnect") => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{ textAlign: "center" }}>Connect Via</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem
          button
          onClick={() => handleListItemClick("MetaMask")}
          key={"MetaMask"}
        >
          <ListItemAvatar>
          <Avatar src={mmIcon}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Metamask"} />
        </ListItem>

        <ListItem
          button
          onClick={() => handleListItemClick("WalletConnect")}
          key={"WalletConnect"}
        >
          <ListItemAvatar>
            <Avatar src={wcIcon}>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Wallet Connect"} />
        </ListItem>
      </List>
    </Dialog>
  );
}
