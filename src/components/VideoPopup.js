import React from "react";
import "./VideoPopup.css";

function VideoPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <i class="far fa-times-circle"></i>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default VideoPopup;
