import React from "react";
import "./LoginT.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import StoreIcon from "@mui/icons-material/Store";

function LoginT() {
  return (
    <div className="logint">
      <div className="logint__in">
        <h2> New Customer?</h2>
        <div className="logint__in">
          <h3>Signup</h3>
        </div>
      </div>
      <hr />

      <div className="logint__in">
        <AccountCircleIcon />
        <p>My profile</p>
      </div>
      <hr />

      <div className="logint__in">
        <StoreIcon />
        <p>Orders</p>
      </div>
      <hr />

      <div className="logint__in">
        <FavoriteIcon />
        <p>wishlist</p>
      </div>
      <hr />

      <div className="logint__in">
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <hr />

      <div className="logint__in">
        <CardGiftcardIcon />
        <p>Giftcards</p>
      </div>
      <hr />
    </div>
  );
}

export default LoginT;
