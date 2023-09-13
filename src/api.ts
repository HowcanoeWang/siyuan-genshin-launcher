// copied and edited from auth.html
export function exitApp () {
    try {
      const {ipcRenderer} = (window as any).require('electron')
      const {getCurrentWindow} = (window as any).require('@electron/remote')
      ipcRenderer.send('siyuan-quit', window.location.port)
    } catch (e) {
      if ((window.webkit && window.webkit.messageHandlers) || window.JSAndroid) {
        window.location.href = 'siyuan://api/system/exit'
      } else {
        window.location.reload()
      }
    }
  }
export function exitSiYuan () {
    try {
      fetch('/api/system/exit', {
        method: 'POST',
        body: JSON.stringify({force: false}),
      }).then((response) => {
        return response.json()
      }).then((response) => {
        if (response.code === 1) {
          document.querySelector('#message').classList.add('b3-snackbar--show')
          document.querySelector('#message').firstElementChild.textContent = response.msg
          const buttonElement = document.querySelector(`#message button`)
          if (buttonElement) {
            buttonElement.addEventListener('click', () => {
              fetch('/api/system/exit', {
                method: 'POST',
                body: JSON.stringify({force: true}),
              }).then((response) => {
                return response.json()
              }).then(() => {
                exitApp()
              })
            })
          }
        } else {
          exitApp()
        }
      }).catch(() => {
        exitApp()
      })
    } catch (e) {
      exitApp()
    }
  }