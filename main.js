

const {app,BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

function createMainWindow(){//pencere oluşturma
    const mainWindow = new BrowserWindow({
        title: "Electron Denizhan",
        width:1000,
        height:600,
        webPreferences:{
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, "./preload.js")
        }
    })

    const startUrl = url.format({
        pathname: path.join(__dirname, "./app/dist/index.html"),//başlatma dosyası
        protocol: "file",
    })


    //mainWindow.loadURL(startUrl);
    mainWindow.loadURL("http://localhost:5173");
}



app.whenReady().then(createMainWindow);