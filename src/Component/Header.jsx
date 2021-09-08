import React from "react";
import Logo from "./Logo";
import "./header.css";
import InputComponent from "./InputComponent";
import CheckoutBadge from "./CheckoutBadge";
import RightLogo from "./RightLogo";

export default function Header({
  removeCart,
  showModal,
  setShowModal,
  handleSearch,
}) {
  return (
    <div className='header-main'>
      <div className="logo-header-container">
        <div style={{ display: "flex" }}>
          <Logo />
          <div style={{ paddingLeft: "15px" }}>
            <p style={{ margin: "4px" }}>
              <span style={{ fontWeight: "bold" }}>Quidax Books </span> <br />{" "}
              <span
                className='header-sub-title-text'
              >
                A flimsy book company{" "}
              </span>
            </p>
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <InputComponent handleSearch={handleSearch} />
        </div>
        <div style={{ display: "flex" }}>
          <RightLogo />
          <div style={{ paddingTop: "10px" }}>
            {!removeCart && (
              <CheckoutBadge
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
