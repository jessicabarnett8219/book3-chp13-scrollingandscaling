
const audrey = document.getElementById("audrey")

document.addEventListener("scroll", (event) => {
  let windowScrollY = window.scrollY
  let windowScrollWidth = windowScrollY / 3
  windowScrollWidth = windowScrollWidth.toString()
  windowScrollWidth = `${windowScrollWidth}px`

  audrey.style.width = windowScrollWidth
  audrey.style.minWidth = "50px"
  
  let windowScrollHeight = windowScrollY / 4
  windowScrollHeight = windowScrollHeight.toString()
  windowScrollHeight = `${windowScrollHeight}px`

  console.log(windowScrollHeight)

  audrey.style.height = windowScrollHeight
  audrey.style.minHeight = "100px"



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})

// console.log(audrey.width)