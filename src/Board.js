import {h, Component} from 'preact'

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {squareSize: 40}
    this.handleResize = this.handleResize.bind(this)

    this.squares = []
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isLight = (row + col) % 2 === 0
        this.squares.push(
          h('div', {
            key: `${row}-${col}`,
            className: isLight ? 'square light' : 'square dark'
          })
        )
      }
    }
  }

  render() {
    const {squareSize} = this.state
    const boardSize = 8 * squareSize
    
    const boardStyle = {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: `${squareSize}px`,
      paddingBottom: `${squareSize}px`,
      boxSizing: 'border-box'
    }

    return h('div', { style: boardStyle },
              h('div', {
                className: 'board',
                style: {
                  '--square-size': `${squareSize}px`,
                  width: `${boardSize}px`,
                  height: `${boardSize}px`
                }
              }, this.squares)
            )
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    const size = Math.min(window.innerWidth, window.innerHeight) / 10
    this.setState({ squareSize: size })
  }
}