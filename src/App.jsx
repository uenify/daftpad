import React, { Component, Fragment } from 'react';
import classNames from "classnames";
import gabenFace from "./gaben.png";
import daftPunk from "./daft.png"
import './App.css';
import "ion-sound";

let qwerty = [
  [
    { "letter": "q", "code": 81, sound: "WorkIt", label: "Work It", levels: [1, 2, 4, 5] },
    { "letter": "w", "code": 87, sound: "MakeIt", label: "Make It", levels: [1, 2, 4, 5] },
    { "letter": "e", "code": 69, sound: "DoIt", label: "Do it", levels: [1, 2, 4, 5] },
    { "letter": "r", "code": 82, sound: "MakesUs", label: "Makes Us", levels: [1, 2, 4, 5] },
    { "letter": "t", "code": 84 },
    { "letter": "y", "code": 89, sound: "MoreThan", label: "More Than", levels: [1, 2, 3, 4, 5, 6] },
    { "letter": "u", "code": 85, sound: "Hour", label: "Hour", levels: [1, 2, 3, 4, 5, 6] },
    { "letter": "i", "code": 73, sound: "Our", label: "Our", levels: [1, 2, 3, 4, 5, 6] },
    { "letter": "o", "code": 79, sound: "Never", label: "Never", levels: [1, 2, 3, 4, 5, 6] },
    { "letter": "p", "code": 80 }
  ],
  [
    { "letter": "a", "code": 65, sound: "Harder", label: "Harder", levels: [1, 2, 4, 5] },
    { "letter": "s", "code": 83, sound: "Better", label: "Better", levels: [1, 2, 4, 5] },
    { "letter": "d", "code": 68, sound: "Faster", label: "Faster", levels: [1, 2, 4, 5] },
    { "letter": "f", "code": 70, sound: "Stronger", label: "Stronger", levels: [1, 2, 4, 5] },
    { "letter": "g", "code": 71 },
    { "letter": "h", "code": 72, sound: "Ever", label: "Ever", levels: [1, 2, 3, 4, 5, 6] },
    { "letter": "j", "code": 74, sound: "After", label: "After", levels: [1, 2, 3, 4, 5, 6] },
    { "letter": "k", "code": 75, sound: "WorkIs", label: "Work Is", levels: [1, 2, 3, 4, 5, 6] },
    { "letter": "l", "code": 76, sound: "Over", label: "Over", levels: [1, 2, 3, 4, 5, 6] },
    { "letter": ";", "code": 186 }
  ],
  [
    { "letter": "z", "code": 90, level: 1, label: "Normal" },
    { "letter": "x", "code": 88, level: 2, label: "Chorus" },
    { "letter": "c", "code": 67, level: 4, label: "Normal", type: "Low" },
    { "letter": "v", "code": 86, level: 5, label: "Chorus", type: "Low" },
    { "letter": "b", "code": 66 },
    { "letter": "n", "code": 78, level: 3, label: "Low" },
    { "letter": "m", "code": 77, level: 6, label: "Lower" },
    { "letter": ",", "code": 188 }
  ],
  [
    { "letter": "", "code": 32, label: 'Instrumental' }]
]

let gaben = [
  [
    { "letter": "q", "code": 81, sound: "WorkItGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "w", "code": 87, sound: "MakeItGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "e", "code": 69, sound: "DoItGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "r", "code": 82, sound: "MakesUsGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "t", "code": 84 },
    { "letter": "y", "code": 89, sound: "MoreThanGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "u", "code": 85, sound: "HourGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "i", "code": 73, sound: "OurGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "o", "code": 79, sound: "NeverGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "p", "code": 80 }
  ],
  [
    { "letter": "a", "code": 65, sound: "HarderGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "s", "code": 83, sound: "BetterGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "d", "code": 68, sound: "FasterGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "f", "code": 70, sound: "StrongerGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "g", "code": 71 },
    { "letter": "h", "code": 72, sound: "EverGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "j", "code": 74, sound: "AfterGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "k", "code": 75, sound: "WorkIsGaben", label: "Gaben", levels: [1, 2] },
    { "letter": "l", "code": 76, sound: "OverGaben", label: "Gaben", levels: [1, 2] },
    { "letter": ";", "code": 186 }
  ],
  [
    { "letter": "z", "code": 90, level: 1, label: "Normal" },
    { "letter": "x", "code": 88, level: 2, label: "High" },
    { "letter": "c", "code": 67 },
    { "letter": "v", "code": 86 },
    { "letter": "b", "code": 66 },
    { "letter": "n", "code": 78 },
    { "letter": "m", "code": 77 },
    { "letter": ",", "code": 188 }
  ],
  [
    { "letter": "", "code": 32, label: 'Instrumental' }]
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      keyboard: qwerty,
      level: 1,
      gaben: false,
      isCollapsed: window.innerWidth < 720,
      src: "classic.mp3",
      beat: false,
      beatBar: 0,
      keys: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0]]
    }
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.path = '/sound/'
  }
  componentWillMount() {
    window.addEventListener("resize", () => {
      this.setState({
        isCollapsed: window.innerWidth < 720
      })
    })
    this.beat = new Audio('/sound/' + this.state.src)
    this.beat.addEventListener('timeupdate', () => {
      this.setState({
        beatBar: 100 * this.beat.currentTime / this.beat.duration
      })
    });
    window.ion.sound({
      sounds: [
        {
          name: 'WorkIt1'
        }, {
          name: 'MakeIt1'
        }, {
          name: 'DoIt1'
        }, {
          name: 'MakesUs1'
        }, {
          name: 'Harder1'
        }, {
          name: 'Better1'
        }, {
          name: 'Faster1'
        }, {
          name: 'Stronger1'
        }, {
          name: 'MoreThan1'
        }, {
          name: 'Hour1'
        }, {
          name: 'Our1'
        }, {
          name: 'Never1'
        }, {
          name: 'Ever1'
        }, {
          name: 'After1'
        }, {
          name: 'WorkIs1'
        }, {
          name: 'Over1'
        }, {
          name: 'WorkIt2'
        }, {
          name: 'MakeIt2'
        }, {
          name: 'DoIt2'
        }, {
          name: 'MakesUs2'
        }, {
          name: 'Harder2'
        }, {
          name: 'Better2'
        }, {
          name: 'Faster2'
        }, {
          name: 'Stronger2'
        }, {
          name: 'MoreThan2'
        }, {
          name: 'Hour2'
        }, {
          name: 'Our2'
        }, {
          name: 'Never2'
        }, {
          name: 'Ever2'
        }, {
          name: 'After2'
        }, {
          name: 'WorkIs2'
        }, {
          name: 'Over2'
        }, {
          name: 'MoreThan3'
        }, {
          name: 'Hour3'
        }, {
          name: 'Our3'
        }, {
          name: 'Never3'
        }, {
          name: 'Ever3'
        }, {
          name: 'After3'
        }, {
          name: 'WorkIs3'
        }, {
          name: 'Over3'
        }, {
          name: 'WorkItGaben1'
        }, {
          name: 'MakeItGaben1'
        }, {
          name: 'DoItGaben1'
        }, {
          name: 'MakesUsGaben1'
        }, {
          name: 'HarderGaben1'
        }, {
          name: 'BetterGaben1'
        }, {
          name: 'FasterGaben1'
        }, {
          name: 'StrongerGaben1'
        }, {
          name: 'MoreThanGaben1'
        }, {
          name: 'HourGaben1'
        }, {
          name: 'OurGaben1'
        }, {
          name: 'NeverGaben1'
        }, {
          name: 'EverGaben1'
        }, {
          name: 'AfterGaben1'
        }, {
          name: 'WorkIsGaben1'
        }, {
          name: 'OverGaben1'
        }, {
          name: 'WorkItGaben2'
        }, {
          name: 'MakeItGaben2'
        }, {
          name: 'DoItGaben2'
        }, {
          name: 'MakesUsGaben2'
        }, {
          name: 'HarderGaben2'
        }, {
          name: 'BetterGaben2'
        }, {
          name: 'FasterGaben2'
        }, {
          name: 'StrongerGaben2'
        }, {
          name: 'MoreThanGaben2'
        }, {
          name: 'HourGaben2'
        }, {
          name: 'OurGaben2'
        }, {
          name: 'NeverGaben2'
        }, {
          name: 'EverGaben2'
        }, {
          name: 'AfterGaben2'
        }, {
          name: 'WorkIsGaben2'
        }, {
          name: 'OverGaben2'
        }, {
          name: 'WorkIt4'
        }, {
          name: 'MakeIt4'
        }, {
          name: 'DoIt4'
        }, {
          name: 'MakesUs4'
        }, {
          name: 'Harder4'
        }, {
          name: 'Better4'
        }, {
          name: 'Faster4'
        }, {
          name: 'Stronger4'
        }, {
          name: 'MoreThan4'
        }, {
          name: 'Hour4'
        }, {
          name: 'Our4'
        }, {
          name: 'Never4'
        }, {
          name: 'Ever4'
        }, {
          name: 'After4'
        }, {
          name: 'WorkIs4'
        }, {
          name: 'Over4'
        }, {
          name: 'WorkIt5'
        }, {
          name: 'MakeIt5'
        }, {
          name: 'DoIt5'
        }, {
          name: 'MakesUs5'
        }, {
          name: 'Harder5'
        }, {
          name: 'Better5'
        }, {
          name: 'Faster5'
        }, {
          name: 'Stronger5'
        }, {
          name: 'MoreThan5'
        }, {
          name: 'Hour5'
        }, {
          name: 'Our5'
        }, {
          name: 'Never5'
        }, {
          name: 'Ever5'
        }, {
          name: 'After5'
        }, {
          name: 'WorkIs5'
        }, {
          name: 'Over5'
        }, {
          name: 'MoreThan6'
        }, {
          name: 'Hour6'
        }, {
          name: 'Our6'
        }, {
          name: 'Never6'
        }, {
          name: 'Ever6'
        }, {
          name: 'After6'
        }, {
          name: 'WorkIs6'
        }, {
          name: 'Over6'
        }
      ],
      path: this.path,
      preload: true
    });
    document.addEventListener('keydown', (e) => {
      let key = e.keyCode || e.which
      this.onKeyDown(key)
    })
    document.addEventListener('keyup', (e) => {
      let key = e.keyCode || e.which
      this.onKeyUp(key)
    })
  }
  onKeyDown(key) {
    let { keys } = this.state
    for (let i in this.state.keyboard) {
      for (let j in this.state.keyboard[i]) {
        if (this.state.keyboard[i][j].code === key) {
          keys[i][j] = true
          if (this.state.keyboard[i][j].sound) {
            window.ion.sound.play(this.state.keyboard[i][j].sound + this.state.level)
          } else if (this.state.keyboard[i][j].level) {
            this.setState({
              level: this.state.keyboard[i][j].level
            })
          }
          if (key === 32) {
            if (!this.state.beat) {
              this.beat.play()
            } else {
              this.beat.pause()
              this.beat.currentTime = 0
            }
            this.setState({
              beat: !this.state.beat
            })

          }
        }
      }
    }
    this.setState({
      keys
    })
  }
  onKeyUp(key) {
    let { keys } = this.state
    for (let i in this.state.keyboard) {
      for (let j in this.state.keyboard[i]) {
        if (this.state.keyboard[i][j].code === key) {
          keys[i][j] = false
        }
      }
    }
    this.setState({
      keys
    })
  }
  render() {
    return (
      <div className="App">
        <div className={classNames({
          gaben: true,
          active: this.state.gaben
        })} onClick={() => {
          this.setState({
            keyboard: this.state.gaben ? qwerty : gaben,
            gaben: !this.state.gaben,
            level: 1
          })
        }}>
          <img alt={this.state.gaben ? "Gaben photo" : "DaftPunk"} src={this.state.gaben ? gabenFace : daftPunk} />
        </div>
        <div className={classNames({
          keyboard: true,
          isCollapsed: this.state.isCollapsed,
          level1: this.state.level === 1,
          level2: this.state.level === 2,
          level3: this.state.level === 3,
          level4: this.state.level === 4,
          level5: this.state.level === 5,
          level6: this.state.level === 6
        })}>
          {this.state.isCollapsed ?
            <Fragment>
              {
                this.state.keyboard.map((row, i) =>
                  row.map((key, j) => {
                    return j < 4 ? <div onClick={() => {
                      this.onKeyDown(key.code)
                      setTimeout(() => this.onKeyUp(key.code), 100)
                    }} key={j} className={`key ${key.code === 32 ? 'space' : key.letter} ${key.level ? "level-key" : (key.levels && key.levels.indexOf(this.state.level) >= 0 ? 'active' : 'disabled')}${this.state.keys[i][j] ? ' is-active' : ''}`}>
                      <span className="letter">{key.letter}</span>
                      {key.type ? <span className="type">{key.type}</span> : null}
                      {key.code === 32 ? <div style={{
                        width: this.state.beatBar + '%'
                      }} className="bar"></div> : null}
                      <span className="label">{key.label}</span>
                    </div> : null
                  })
                )
              }
              {
                this.state.keyboard.map((row, i) =>
                  row.map((key, j) => {
                    return j > 3 ? <div onClick={() => {
                      this.onKeyDown(key.code)
                      setTimeout(() => this.onKeyUp(key.code), 100)
                    }} key={j} className={`key ${key.letter === ';' ? 'semicolon' : (key.letter === ',' ? "comma" : key.letter)} ${key.level ? "level-key" : (key.levels && key.levels.indexOf(this.state.level) >= 0 ? 'active' : 'disabled')}${this.state.keys[i][j] ? ' is-active' : ''}`}>
                      <span className="letter">{key.letter}</span>
                      {key.type ? <span className="type">{key.type}</span> : null}
                      {key.code === 32 ? <div style={{
                        width: this.state.beatBar + '%'
                      }} className="bar"></div> : null}
                      <span className="label">{key.label}</span>
                    </div> : null
                  })
                )
              }
            </Fragment>
            :
            this.state.keyboard.map((row, i) => (
              <div key={i} className={`row row-${i + 1}`}>
                {row.map((key, j) => (
                  <div onClick={() => {
                    this.onKeyDown(key.code)
                    setTimeout(() => this.onKeyUp(key.code), 100)
                  }} key={j} className={`key ${key.code === 32 ? 'space' : key.letter} ${key.level ? "level-key" : (key.levels && key.levels.indexOf(this.state.level) >= 0 ? 'active' : 'disabled')}${this.state.keys[i][j] ? ' is-active' : ''}`}>
                    <span className="letter">{key.letter}</span>
                    {key.code === 32 ? <div style={{
                      width: this.state.beatBar + '%'
                    }} className="bar"></div> : null}
                    {key.type ? <span className="type">{key.type}</span> : null}
                    <span className="label">{key.label}</span>
                  </div>
                ))}
              </div>
            ))
          }
          <div className={`src-select ${this.state.src.split('.')[0]}`}>
            <div onClick={() => {
              if (this.state.src !== 'classic.mp3') {
                this.setState({
                  src: 'classic.mp3',
                  beatBar: 0,
                  level: 1
                })
                this.beat.pause()
                this.currentTime = 0
                this.beat.src = this.path + 'classic.mp3'
              }
            }} className="src classic">Classic</div>
            <div className="separator">-</div>
            <div onClick={() => {
              if (this.state.src !== 'kanye.mp3') {
                this.setState({
                  src: 'kanye.mp3',
                  beatBar: 0,
                  level: 4
                })
                this.beat.pause()
                this.currentTime = 0
                this.beat.src = this.path + 'kanye.mp3'
              }
            }} className="src kanye">Kanye</div>
          </div>
        </div>
        <div className="footer">
          <p>Inspired by <a href="https://github.com/KOWLOR/">Kowlor</a>'s #DaftPunKonsole</p>
          <p>Made by <a href="https://github.com/uenify">uenify</a></p>
        </div>
      </div>
    );
  }
}

export default App;
