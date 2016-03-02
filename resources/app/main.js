"use strict";

"use strict";

var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var nativeImage = electron.nativeImage;

var mainWindow = null;
var image = nativeImage.createFromPath("img/dev-docs.png");

app.on("window-all-closed", function () {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("ready", function () {
  // set window dimensions
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    useContentSize: true,
    center: true,
    minWidth: 600,
    minHeight: 400,
    title: "DevDows",
    icon: image,
    autoHideMenuBar: true
  });

  // load devdocs
  mainWindow.loadUrl("http://devdocs.io/");
});
//# sourceMappingURL=C:\Users\taylo\Desktop\DevDows\main.js.map