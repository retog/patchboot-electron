const ssb = require('ssb-client')
//require('patchboot/public/patch-boot.js')
    

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  const patchBoot = document.createElement('patch-boot')
  patchBoot.ssbConnect = () => new Promise((resolve, reject) => {
    ssb((err, sbot) => {
      if (err) {
        reject(err)
      } else {
        resolve(sbot)
      }
    });
  })
  document.body.appendChild(patchBoot)
})
