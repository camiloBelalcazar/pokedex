import React from "react";
import dark from "../../assets/dark.png";
import ligth from "../../assets/ligth.png";
function Ligthmode({ switchStyle, value }) {

  return (
    <div className="styleBackground">
      <button onClick={switchStyle}>
        {value === true ? (
          <img src={ligth} alt="" />
        ) : (
          <img src={dark} alt="" />
        )}
      </button>
    </div>
  );
}
export default Ligthmode;