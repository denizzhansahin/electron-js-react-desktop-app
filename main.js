

const {app,BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

function createMainWindow(){//pencere oluşturma
    const mainWindow = new BrowserWindow({
        title: "Electron Denizhan",
        width:1000,
        height:600,
    })

    const startUrl = url.format({
        pathname: path.join(__dirname, "index.html"),//başlatma dosyası
        protocol: "file",
    })


    mainWindow.loadURL(startUrl);
}



app.whenReady().then(createMainWindow);