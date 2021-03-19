if (document.URL.indexOf('twitter') != -1) {
  let checkExist = setInterval(() => {
    let draftRoot = document.getElementsByClassName("DraftEditor-root")[0]
    if (draftRoot) {
      draftRoot.style.overflow = 'visible'
      clearInterval(checkExist)
    }
  }, 1000);
}
