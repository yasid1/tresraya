let board; // global
let turno = true;

function createBoard(numRows, numCols) {
    const rows = []

    for (let i = 0; i < numRows; i++) {
        const casillas = []

        // crear casillas &#x274C(x) &#x2B55(o)
        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                jugo: false,
                turno: false,
                emoji1 : "&#x274C;",
                emoji2 : "&#x2B55;"
            })
        }

        rows.push(casillas)
    }

    return rows
}

function printBoard(board) {
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function setValue(board, row, col, value) {
    board[row][col] = value
}

//function getValue(board, row, col) {
const getValue = (board, row, col) => {
    return board[row][col]
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`) // string interpolation
            if (casillas[j].seMuestra) {
                if (casillas[j].turno==true && casillas[j].jugo==false) {
                    butCasilla.innerHTML = casillas[j].emoji1
                }
                if (casillas[j].turno==false && casillas[j].jugo==false) {
                    butCasilla.innerHTML = casillas[j].emoji2
                }
            }else {
                butCasilla.innerHTML = ""
            }
            
        }
    }
}

const casillaOnClick = (row, col) => {
    const casilla = getValue(board, row, col)
    casilla.seMuestra = true
    casilla.turno = turno
    renderizarBoard(board)
    casilla.jugo = true
    if (turno) {
        turno=false
    }else{
        turno=true
    }
    document.getElementById(`${row}_${col}`).className += " disabled" ;
        
}

const main = () => {
    board = createBoard(3, 3) 
}

main()