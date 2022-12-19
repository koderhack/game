import StartScene from "/src/start.js";
import EndScene from "/src/end.js";
import Phaser from "phaser";

let config = {
  width: 360,
  height: 280,
  backgroundColor: "#0eb5e8",
  scene: [StartScene, EndScene],
  pixelArt: true,
  physics: {
    defaut: "arcade",
    arcade: {
      debug: false
    }
  }
};

new Phaser.Game(config);
