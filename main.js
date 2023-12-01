const { app, BrowserWindow } = require('electron');


function createWindow() {
  const win = new BrowserWindow({
    height : 1000,
    width : 1000,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  
  win.loadURL("http://localhost:8005");
}

app.whenReady().then(createWindow);