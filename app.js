document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const width = 8
  const squares = []

  const candyColors = ['red', 'yellow', 'orange', 'purple', 'green', 'blue']
  // Create board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      square.setAttribute('draggable', true)
      square.setAttribute('id', i)

      let randomColor = Math.floor(Math.random() * candyColors.length)
      square.style.backgroundColor = candyColors[randomColor]
      grid.appendChild(square)
      squares.push(square)
    }
  }
  createBoard()

  let colorBeingDragged
  let colorBeingReplaced
  let squareIdBeingDragged
  let squareIdBeingReplaced

  // Drag the Candy

  squares.forEach((square) => square.addEventListener('dragstart', dragStart))
  squares.forEach((square) => square.addEventListener('dragend', dragEnd))
  squares.forEach((square) => square.addEventListener('dragover', dragOver))
  squares.forEach((square) => square.addEventListener('dragenter', dragEnter))
  squares.forEach((square) => square.addEventListener('dragleave', dragLeave))
  squares.forEach((square) => square.addEventListener('drop', dragDrop))

  function dragStart() {
    colorBeingDragged = this.style.backgroundColor // pickes up color being dragged
    squareIdBeingDragged = parseInt(this.id)
    console.log('start', squareIdBeingDragged)
  }

  function dragEnd() {
      let validMoves = [
          squareIdBeingDragged -1, 
          squareIdBeingDragged - width, 
          squareIdBeingDragged +1, 
          squareIdBeingDragged + width
        ]

          let validMove = validMoves.includes(squareIdBeingReplaced)

          if(squareIdBeingReplaced && validMove){
              squareIdBeingReplaced = null
          } else if (squareIdBeingReplaced && !validMove){
              squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced
              squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
          } else squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
  }

  function dragOver(e) {
    e.preventDefault()
  }

  function dragEnter(e) {
    e.preventDefault()
  }


  function dragLeave() {}

  function dragDrop() {
    colorBeingReplaced = this.style.backgroundColor
    console.log('color', colorBeingReplaced)
    console.log('id', squareIdBeingDragged)
    squareIdBeingReplaced = parseInt(this.id)
    this.style.backgroundColor = colorBeingDragged
    squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
  }


  //Checking for matches
  function checkRowForThree(){
      for(i = 0; i < 61; i++){
          let rowOfThree = [i, i+1, i+2]
          let decidedColor = squares[i].style.backgroundColor
          const isBlank = squares[i].style.backgroundColor === ''
      }


      if(rowOfThree.every(index => squares[index].style.backgroundColor === decidedColor))
  }
})
