export function openMenu() {

    let menu = document.querySelector("#menu")
    let buttonMenu=document.querySelector("#buttonMenu")

    buttonMenu.addEventListener('click', () => menu.classList.remove("hidden"))

  }
  