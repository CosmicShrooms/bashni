import {h, render, Component} from 'preact'
import Board from './Board'

class App extends Component {
  render() {
    return h(Board)
  }
}

render(h(App), document.body)
