`use strict`;

const electron = require(`electron`);
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const nativeImage = electron.nativeImage;

let mainWindow = null;
let image = nativeImage.createFromPath(`img/dev-docs.png`);

app.on(`window-all-closed`, function() {
  if (process.platform != `darwin`) {
    app.quit();
  }
});

app.on(`ready`, function() {
  // set window dimensions
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    useContentSize: true,
    center: true,
    minWidth: 600,
    minHeight: 400,
    title: `DevDows`,
    icon: image,
    autoHideMenuBar: true
  });

  // load devdocs
  mainWindow.loadUrl(`http://devdocs.io/`);
});
