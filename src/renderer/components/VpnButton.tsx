import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

import "./components.css";

export default function VpnButton() {
  const [active, setActive] = useState(false);

  function handleButtonClick() {
    if (active) {
      setActive(false);
      document
        .querySelectorAll(".outer-layer-circle, .inner-layer-circle")
        .forEach((item) => {
          item.classList.remove("bg-blue");
        });
      document
        .querySelector(".middle-layer-circle")
        ?.classList.remove("bg-dark");
      document.querySelector(".vpn-status-dot")?.classList.remove("bg-green");
      document.querySelector(".vpn-status-dot")?.classList.add("bg-grey");
      document
        .querySelector(".button-vpn-connection")
        ?.classList.remove("button-bg");
    } else {
      setActive(true);
      document
        .querySelectorAll(".outer-layer-circle, .inner-layer-circle")
        .forEach((item) => {
          item.classList.add("bg-blue");
        });
      document.querySelector(".middle-layer-circle")?.classList.add("bg-dark");
      document.querySelector(".vpn-status-dot")?.classList.remove("bg-grey");
      document.querySelector(".vpn-status-dot")?.classList.add("bg-green");
      document
        .querySelector(".button-vpn-connection")
        ?.classList.add("button-bg");
    }
  }
  return (
    <div className="vpn-button-container">
      <div className="vpn-status-container">
        <p className="vpn-status-text">
          {active ? "Connected" : "Disconnected"}
        </p>
        <div className="vpn-status-dot" />
      </div>
      <div className="outer-layer-circle">
        <div className="middle-layer-circle">
          <div className="inner-layer-circle">
            <FontAwesomeIcon
              icon={active ? faCheck : faArrowRight}
              size="3x"
              color="#fff"
            />
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="button-vpn-connection" onClick={handleButtonClick}>
          {active ? "DISCONNECT" : "CONNECT NOW"}
        </button>
      </div>
    </div>
  );
}
