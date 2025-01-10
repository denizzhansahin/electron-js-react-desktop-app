const {contextBridge, ipcRenderer} = require('electron');
const os = require('os');


contextBridge.exposeInMainWorld('electron',{
    homedir: ()=> os.homedir(),
    osVersion: ()=> os.version(),
    arch:()=> os.arch(),
});

contextBridge.exposeInMainWorld('ipRenderer',{
    send: (channel,data)=> ipcRenderer.send(channel,data),
    on: (channel,func)=> ipcRenderer.on(channel,(channel,...args)=> func(...args)),
})