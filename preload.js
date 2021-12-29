const { contextBridge, ipcRenderer} = require("electron")
const fs = require('fs')
/**
contextBridge.exposeInMainWorld(
  "reuires", {
    Highcharts: require('highcharts'),
    ipcRenderer : ipcRenderer,//ipcRendererも渡せるのでやり取りできる
    getSetting :  () => {// fsも読み込める。レンダリングプロセスにそのまま渡さず、functionにしてできることを制限したほうがセキュリアそう。。。
      const setting_path = 'c:/appSetting.json5';
      return fs.existsSync(setting_path) ? fs.readFileSync(setting_path, 'utf8') : '{}'
    }
  }
);
**/
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })