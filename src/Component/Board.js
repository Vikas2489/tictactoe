import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: Array(9).fill(null),
      isXturn: true,
      history: [
        {
          squares: Array(9).fill(null),
        },
        {
          squares: Array(9).fill(null),
        },
        {
          squares: Array(9).fill(null),
        },
        {
          squares: Array(9).fill(null),
        },
        {
          squares: Array(9).fill(null),
        },
        {
          squares: Array(9).fill(null),
        },
        {
          squares: Array(9).fill(null),
        },
        {
          squares: Array(9).fill(null),
        },
        {
          squares: Array(9).fill(null),
        },
      ],
      stepCount: 0,
    };
  }

  checkWinner = () => {
    let winnerLogic = [
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // diagonally
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        this.state.array[a] &&
        this.state.array[a] == this.state.array[b] &&
        this.state.array[a] == this.state.array[c]
      ) {
        return this.state.array[a];
      }
    }
    return false;
  };

  handleClick = (index) => {
    const copyArray = [...this.state.array];
    const copyHistory = [...this.state.history];
    if (!copyArray[index]) {
      copyArray[index] = this.state.isXturn ? 'X' : 'O';
      copyHistory[this.state.stepCount].squares = copyArray;
      this.setState({
        array: copyArray,
        isXturn: !this.state.isXturn,
        history: copyHistory,
        stepCount: this.state.stepCount + 1,
      });
    }
  };

  handleClickOnStep = (index) => {
    this.setState({
      array: this.state.history[index].squares,
    });
  };

  render() {
    let winner = this.checkWinner();
    return winner ? (
      <>
        <h1>{winner} Won</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              array: Array(9).fill(null),
              history: [
                {
                  squares: Array(9).fill(null),
                },
                {
                  squares: Array(9).fill(null),
                },
                {
                  squares: Array(9).fill(null),
                },
                {
                  squares: Array(9).fill(null),
                },
                {
                  squares: Array(9).fill(null),
                },
                {
                  squares: Array(9).fill(null),
                },
                {
                  squares: Array(9).fill(null),
                },
                {
                  squares: Array(9).fill(null),
                },
                {
                  squares: Array(9).fill(null),
                },
              ],
              stepCount: 0,
            });
          }}
        >
          Play button
        </button>
      </>
    ) : (
      <div className="board-container">
        <h2>Player {this.state.isXturn ? 'X' : 'O'} Turn :-</h2>
        <div>
          <div className="board-row">
            <Square
              handleClick={() => this.handleClick(0)}
              value={this.state.array[0]}
            />
            <Square
              handleClick={() => this.handleClick(1)}
              value={this.state.array[1]}
            />
            <Square
              handleClick={() => this.handleClick(2)}
              value={this.state.array[2]}
            />
          </div>
          <div className="board-row">
            <Square
              handleClick={() => this.handleClick(3)}
              value={this.state.array[3]}
            />
            <Square
              handleClick={() => this.handleClick(4)}
              value={this.state.array[4]}
            />
            <Square
              handleClick={() => this.handleClick(5)}
              value={this.state.array[5]}
            />
          </div>
          <div className="board-row">
            <Square
              handleClick={() => this.handleClick(6)}
              value={this.state.array[6]}
            />
            <Square
              handleClick={() => this.handleClick(7)}
              value={this.state.array[7]}
            />
            <Square
              handleClick={() => this.handleClick(8)}
              value={this.state.array[8]}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {this.state.history[0].squares.includes('X') ||
          this.state.history[0].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(0)}>
              go to step 1{' '}
            </button>
          ) : (
            ''
          )}
          {this.state.history[1].squares.includes('X') ||
          this.state.history[1].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(1)}>
              go to step 2{' '}
            </button>
          ) : (
            ''
          )}
          {this.state.history[2].squares.includes('X') ||
          this.state.history[2].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(2)}>
              go to step 3{' '}
            </button>
          ) : (
            ''
          )}
          {this.state.history[3].squares.includes('X') ||
          this.state.history[3].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(3)}>
              go to step 4{' '}
            </button>
          ) : (
            ''
          )}
          {this.state.history[4].squares.includes('X') ||
          this.state.history[4].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(4)}>
              go to step 5{' '}
            </button>
          ) : (
            ''
          )}
          {this.state.history[5].squares.includes('X') ||
          this.state.history[5].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(5)}>
              go to step 6{' '}
            </button>
          ) : (
            ''
          )}
          {this.state.history[6].squares.includes('X') ||
          this.state.history[6].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(6)}>
              go to step 7{' '}
            </button>
          ) : (
            ''
          )}
          {this.state.history[7].squares.includes('X') ||
          this.state.history[7].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(7)}>
              go to step 8{' '}
            </button>
          ) : (
            ''
          )}
          {this.state.history[8].squares.includes('X') ||
          this.state.history[8].squares.includes('O') ? (
            <button onClick={() => this.handleClickOnStep(8)}>
              go to step 9{' '}
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default Board;
