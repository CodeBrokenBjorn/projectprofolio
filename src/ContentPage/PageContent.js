import React, { useRef, useEffect } from "react";
import useScrollSnap from "react-use-scroll-snap";
import "../css/style.css";

function PageContent() {
  return (
    <div class="x mandatory-scroll-snapping always-stop">
      <div>
        <p>About Me</p>
      </div>
      <div>
        <p>About Me</p>
      </div>
      <div>
        <p>About Me</p>
      </div>
      <div>
        <p>About Me</p>
      </div>
    </div>
  );
}

export default PageContent;
