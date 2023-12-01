const { app, BrowserWindow } = require('electron');


function createWindow() {
  const win = new BrowserWindow({
    // maxWidth: 700,
    height : 600,
    width : 600,
    // minWidth : 450,
    // minHeight : 450,
    // maxHeight: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  
  win.loadURL("http://localhost:8000");
}

app.whenReady().then(createWindow);