import React from "react";
import "../Scss/_HomePage.css";
import Hls from "hls.js";

class HomePage extends React.Component {
    componentDidMount() {
        if (Hls.isSupported()) {
            var video = this.player;
            var hls = new Hls();
            // bind them together
            hls.attachMedia(video);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
              console.log("video and hls.js are now bound together !");
              hls.loadSource("http://d3rpmkia6uhh0i.cloudfront.net/f9f8ac9a-2220-40b3-b318-f9633f996684/hls/20200518_214550.m3u8");
              hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                console.log("manifest loaded, found " + data.levels.length + " quality level");
              });
            });
          }
      }
      render() {
        return (
            <div>
                <p>Video 1</p>
              <video id="video"
                preload="none"
                className="videoCanvas"
                ref={(player) => (this.player = player)}
                controls
                autoPlay={false}
              />
            </div>
          );
      }
}
export default HomePage