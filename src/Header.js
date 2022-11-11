import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import MoreT from "./MoreT";
import LoginT from "./LoginT";

function Header() {
  return (
    <div className="header">
      <div className="header_first">
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
        <div className="header_first1">
          <span
            style={{ fontSize: "11px", color: "white", fontStyle: "italic" }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#f9e107",
              fontsize: "11px",
              fontStyle: "italic",
            }}
          >
            plus
          </span>
          <span>
            <img
              width="10"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="header_second">
        <input placeholder="Searchfor Products and more" type="text" />
        <SearchIcon className="search" />
      </div>
      <div className="header_third">
        <Tippy
          theme="light"
          interactive={true}
          offset={[5, 18]}
          content={<LoginT />}
        >
          <button>Login</button>
        </Tippy>
      </div>
      <div className="header_fourth">
        <span>Became a seller</span>
      </div>
      <div className="header_fifth">
        <Tippy
          theme="light"
          interactive={true}
          offset={[5, 18]}
          content={<MoreT />}
        >
          <span>More</span>
        </Tippy>

        <ExpandMoreIcon />
      </div>
      <div className="header_sixth">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Header;
