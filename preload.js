const ssb = require('ssb-client')

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  const pachBoot = window.patchBoot
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
