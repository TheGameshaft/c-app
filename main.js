const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Cree la fenetre du navigateur.
  win = new BrowserWindow({ autoHideMenuBar: true, backgroundColor: '#272c33'})
  // et charge le index.html de l'application.
  win.maximize()
  win.loadFile('index.html')
}

app.on('ready', createWindow)