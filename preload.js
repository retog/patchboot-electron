const Connection = require('ssb-client')
const pull = require('pull-stream')
pull.paraMap = require('pull-paramap')

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  console.log('Connecting')

  Connection((err, server) => {
    if (err) {
      throw err
    }
    console.log('Connection established')

    server.whoami((err, keys) => {
      if (err) console.log('could not get keys, got err', err)
      else {
        replaceText('user-id', keys.id)
      }

      console.log('disconnecting from server')
      server.close()
    })
  })

})
