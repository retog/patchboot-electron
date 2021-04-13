const ssb = require('ssb-client')
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('localSsbConnect', () => new Promise((resolve, reject) => {
  ssb((err, sbot) => {
    if (err) {
      reject(err)
    } else {
      resolve(sbot)
    }
  });
}))
