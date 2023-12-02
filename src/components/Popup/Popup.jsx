import React from "react";
const Popup = ({ children, isOpened, onClose }) => {
  return (
    <div className={"popup" + (isOpened ? " active" : "")}>
      <div className="popup__body">
        {children}
        <button className="popup__close" onClick={onClose}></button>
      </div>
      <div className="popup__overlay" onClick={onClose}></div>
    </div>
  );
};

export default Popup;
