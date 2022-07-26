const { BrowserWindow, ipcMain } = require("electron");
const electron = require("electron")
const { app } = electron


let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:false
        }
    })

    mainWindow.removeMenu()

    mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`);
    //mainWindow.loadURL("http://localhost:3000")
})

ipcMain.on("message", (event, value) => {
    console.log(value)
})