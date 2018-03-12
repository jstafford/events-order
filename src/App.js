// @flow
import React, { Component } from 'react';
import './App.css';

type OwnProps = {
  children?: React$Node,
  value: number,
}

class Wrapper extends Component<OwnProps> {
  el: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const {value} = this.props
    console.log(`simple react: ${value}`)
  }

  handleCapture = (e: MouseEvent): void => {
    const {value} = this.props
    console.log(`simple capture: ${value}`)
  }

  handleBubble = (e: MouseEvent): void => {
    const {value} = this.props
    console.log(`simple bubble: ${value}`)
  }

  componentDidMount() {
    if (this.el) {
      this.el.addEventListener('click', this.handleCapture, true)
    }
    if (this.el) {
      this.el.addEventListener('click', this.handleBubble, false)
    }
  }

  componentWillUnmount() {
    if (this.el) {
      this.el.removeEventListener('click', this.handleCapture)
    }
    if (this.el) {
      this.el.removeEventListener('click', this.handleBubble)
    }
  }

  render () {
    const {children, value} = this.props
    return (
      <div
        className='Wrapper'
        onClick={this.handleClick}
        ref={(element: ?HTMLDivElement): void => {this.el = element}}
      >{value} {children}</div>
    )
  }
}

class StopReactWrapper extends Component<OwnProps> {
  el: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const {value} = this.props
    console.log(`stopreact react: ${value}`)
    e.stopPropagation()
  }

  handleCapture = (e: MouseEvent): void => {
    const {value} = this.props
    console.log(`stopreact capture: ${value}`)
  }

  handleBubble = (e: MouseEvent): void => {
    const {value} = this.props
    console.log(`stopreact bubble: ${value}`)
  }

  componentDidMount() {
    if (this.el) {
      this.el.addEventListener('click', this.handleCapture, true)
    }
    if (this.el) {
      this.el.addEventListener('click', this.handleBubble, false)
    }
  }

  componentWillUnmount() {
    if (this.el) {
      this.el.removeEventListener('click', this.handleCapture)
    }
    if (this.el) {
      this.el.removeEventListener('click', this.handleBubble)
    }
  }

  render () {
    const {children, value} = this.props
    return (
      <div
        className='Wrapper'
        onClick={this.handleClick}
        ref={(element: ?HTMLDivElement): void => {this.el = element}}
      >{value} {children}</div>
    )
  }
}

class StopCaptureWrapper extends Component<OwnProps> {
  el: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const {value} = this.props
    console.log(`stopcapture react: ${value}`)
  }

  handleCapture = (e: MouseEvent): void => {
    const {value} = this.props
    console.log(`stopcapture capture: ${value}`)
    e.stopPropagation()
  }

  handleBubble = (e: MouseEvent): void => {
    const {value} = this.props
    console.log(`stopcapture bubble: ${value}`)
  }

  componentDidMount() {
    if (this.el) {
      this.el.addEventListener('click', this.handleCapture, true)
    }
    if (this.el) {
      this.el.addEventListener('click', this.handleBubble, false)
    }
  }

  componentWillUnmount() {
    if (this.el) {
      this.el.removeEventListener('click', this.handleCapture)
    }
    if (this.el) {
      this.el.removeEventListener('click', this.handleBubble)
    }
  }

  render () {
    const {children, value} = this.props
    return (
      <div
        className='Wrapper'
        onClick={this.handleClick}
        ref={(element: ?HTMLDivElement): void => {this.el = element}}
      >{value} {children}</div>
    )
  }
}

class StopBubbleWrapper extends Component<OwnProps> {
  el: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const {value} = this.props
    console.log(`stopbubble react: ${value}`)
  }

  handleCapture = (e: MouseEvent): void => {
    const {value} = this.props
    console.log(`stopbubble capture: ${value}`)
  }

  handleBubble = (e: MouseEvent): void => {
    const {value} = this.props
    console.log(`stopbubble bubble: ${value}`)
    e.stopPropagation()
  }

  componentDidMount() {
    if (this.el) {
      this.el.addEventListener('click', this.handleCapture, true)
    }
    if (this.el) {
      this.el.addEventListener('click', this.handleBubble, false)
    }
  }

  componentWillUnmount() {
    if (this.el) {
      this.el.removeEventListener('click', this.handleCapture)
    }
    if (this.el) {
      this.el.removeEventListener('click', this.handleBubble)
    }
  }

  render () {
    const {children, value} = this.props
    return (
      <div
        className='Wrapper'
        onClick={this.handleClick}
        ref={(element: ?HTMLDivElement): void => {this.el = element}}
      >{value} {children}</div>
    )
  }
}


class OverlappingSiblings extends Component<{}> {
  cyan: ?HTMLDivElement = null
  orange: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const id = e.currentTarget.id
    console.log(`simple react: ${id}`)
  }

  handleCapture = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple capture: ${id}`)
  }

  handleBubble = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple bubble: ${id}`)
  }

  addListeners = (el: HTMLDivElement): void => {
    el.addEventListener('click', this.handleCapture, true)
    el.addEventListener('click', this.handleBubble, false)
  }

  componentDidMount() {
    if (this.cyan) {
      this.addListeners(this.cyan)
    }
    if (this.orange) {
      this.addListeners(this.orange)
    }
  }

  removeListeners = (el: HTMLDivElement): void => {
    el.removeEventListener('click', this.handleCapture, true)
    el.removeEventListener('click', this.handleBubble, false)
  }

  componentWillUnmount() {
    if (this.cyan) {
      this.removeListeners(this.cyan)
    }
    if (this.orange) {
      this.removeListeners(this.orange)
    }
  }

  render () {
    return (
      <div>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.cyan = element}}
          id='cyan'
          style={{
            backgroundColor: 'cyan',
            height: '50px',
            width: '50px',
          }}
        >cyan</div>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.orange = element}}
          id='orange'
          style={{
            backgroundColor: 'orange',
            height: '50px',
            width: '50px',
            position: 'relative',
            top: '-25px',
            left: '25px',
          }}
        >orange</div>
      </div>
    )
  }
}

class OverlappingSiblingsFirstOnTop extends Component<{}> {
  cyan: ?HTMLDivElement = null
  orange: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const id = e.currentTarget.id
    console.log(`simple react: ${id}`)
  }

  handleCapture = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple capture: ${id}`)
  }

  handleBubble = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple bubble: ${id}`)
  }

  addListeners = (el: HTMLDivElement): void => {
    el.addEventListener('click', this.handleCapture, true)
    el.addEventListener('click', this.handleBubble, false)
  }

  componentDidMount() {
    if (this.cyan) {
      this.addListeners(this.cyan)
    }
    if (this.orange) {
      this.addListeners(this.orange)
    }
  }

  removeListeners = (el: HTMLDivElement): void => {
    el.removeEventListener('click', this.handleCapture, true)
    el.removeEventListener('click', this.handleBubble, false)
  }

  componentWillUnmount() {
    if (this.cyan) {
      this.removeListeners(this.cyan)
    }
    if (this.orange) {
      this.removeListeners(this.orange)
    }
  }

  render () {
    return (
      <div>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.cyan = element}}
          id='cyan'
          style={{
            backgroundColor: 'cyan',
            height: '50px',
            width: '50px',
            position: 'relative',
            top: '25px',
            left: '-25px',
          }}
        >cyan</div>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.orange = element}}
          id='orange'
          style={{
            backgroundColor: 'orange',
            height: '50px',
            width: '50px',
          }}
        >orange</div>
      </div>
    )
  }
}

class OverlappingSiblingsZIndex extends Component<{}> {
  cyan: ?HTMLDivElement = null
  orange: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const id = e.currentTarget.id
    console.log(`simple react: ${id}`)
  }

  handleCapture = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple capture: ${id}`)
  }

  handleBubble = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple bubble: ${id}`)
  }

  addListeners = (el: HTMLDivElement): void => {
    el.addEventListener('click', this.handleCapture, true)
    el.addEventListener('click', this.handleBubble, false)
  }

  componentDidMount() {
    if (this.cyan) {
      this.addListeners(this.cyan)
    }
    if (this.orange) {
      this.addListeners(this.orange)
    }
  }

  removeListeners = (el: HTMLDivElement): void => {
    el.removeEventListener('click', this.handleCapture, true)
    el.removeEventListener('click', this.handleBubble, false)
  }

  componentWillUnmount() {
    if (this.cyan) {
      this.removeListeners(this.cyan)
    }
    if (this.orange) {
      this.removeListeners(this.orange)
    }
  }

  render () {
    return (
      <div style={{
        }}>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.cyan = element}}
          id='cyan'
          style={{
            backgroundColor: 'cyan',
            height: '50px',
            width: '50px',
            zIndex: 1000,
          }}
        >cyan</div>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.orange = element}}
          id='orange'
          style={{
            backgroundColor: 'orange',
            height: '50px',
            width: '50px',
            position: 'relative',
            top: '-25px',
            left: '25px',
            zIndex: 1,
          }}
        >orange</div>
      </div>
    )
  }
}

class OverlappingSiblingsNegativeZIndex extends Component<{}> {
  cyan: ?HTMLDivElement = null
  orange: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const id = e.currentTarget.id
    console.log(`simple react: ${id}`)
  }

  handleCapture = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple capture: ${id}`)
  }

  handleBubble = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple bubble: ${id}`)
  }

  addListeners = (el: HTMLDivElement): void => {
    el.addEventListener('click', this.handleCapture, true)
    el.addEventListener('click', this.handleBubble, false)
  }

  componentDidMount() {
    if (this.cyan) {
      this.addListeners(this.cyan)
    }
    if (this.orange) {
      this.addListeners(this.orange)
    }
  }

  removeListeners = (el: HTMLDivElement): void => {
    el.removeEventListener('click', this.handleCapture, true)
    el.removeEventListener('click', this.handleBubble, false)
  }

  componentWillUnmount() {
    if (this.cyan) {
      this.removeListeners(this.cyan)
    }
    if (this.orange) {
      this.removeListeners(this.orange)
    }
  }

  render () {
    return (
      <div style={{
        }}>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.cyan = element}}
          id='cyan'
          style={{
            backgroundColor: 'cyan',
            height: '50px',
            width: '50px',
            zIndex: 1000,
          }}
        >cyan</div>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.orange = element}}
          id='orange'
          style={{
            backgroundColor: 'orange',
            height: '50px',
            width: '50px',
            position: 'relative',
            top: '-25px',
            left: '25px',
            zIndex: -1000,
          }}
        >orange</div>
      </div>
    )
  }
}

class OverlappingSiblingsZIndexRelative extends Component<{}> {
  cyan: ?HTMLDivElement = null
  orange: ?HTMLDivElement = null

  handleClick = (e:SyntheticMouseEvent<HTMLDivElement>): void => {
    const id = e.currentTarget.id
    console.log(`simple react: ${id}`)
  }

  handleCapture = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple capture: ${id}`)
  }

  handleBubble = (e: MouseEvent): void => {
    const id = e.currentTarget instanceof HTMLDivElement ? e.currentTarget.id : ''
    console.log(`simple bubble: ${id}`)
  }

  addListeners = (el: HTMLDivElement): void => {
    el.addEventListener('click', this.handleCapture, true)
    el.addEventListener('click', this.handleBubble, false)
  }

  componentDidMount() {
    if (this.cyan) {
      this.addListeners(this.cyan)
    }
    if (this.orange) {
      this.addListeners(this.orange)
    }
  }

  removeListeners = (el: HTMLDivElement): void => {
    el.removeEventListener('click', this.handleCapture, true)
    el.removeEventListener('click', this.handleBubble, false)
  }

  componentWillUnmount() {
    if (this.cyan) {
      this.removeListeners(this.cyan)
    }
    if (this.orange) {
      this.removeListeners(this.orange)
    }
  }

  render () {
    return (
      <div style={{
        }}>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.cyan = element}}
          id='cyan'
          style={{
            backgroundColor: 'cyan',
            height: '50px',
            left: 0,
            position: 'relative',
            top: 0,
            width: '50px',
            zIndex: 1000,
          }}
        >cyan</div>
        <div
          onClick={this.handleClick}
          ref={(element: ?HTMLDivElement): void => {this.orange = element}}
          id='orange'
          style={{
            backgroundColor: 'orange',
            height: '50px',
            width: '50px',
            position: 'relative',
            top: '-25px',
            left: '25px',
            zIndex: 1,
          }}
        >orange</div>
      </div>
    )
  }
}


class App extends Component<{}> {
  render() {
    return (
      <div>
        <p>Open the console to see the log of events when you click.</p>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <div>
            <p>basic</p>
            <Wrapper value={1}>
              <Wrapper value={2}>
                <Wrapper value={3}>
                  <Wrapper value={4}>
                    <Wrapper value={5}>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </div>
          <div>
            <p>stopPropagation react</p>
            <StopReactWrapper value={1}>
              <StopReactWrapper value={2}>
                <StopReactWrapper value={3}>
                  <StopReactWrapper value={4}>
                    <StopReactWrapper value={5}>
                    </StopReactWrapper>
                  </StopReactWrapper>
                </StopReactWrapper>
              </StopReactWrapper>
            </StopReactWrapper>
          </div>
          <div>
            <p>stopPropagation dom capture</p>
            <StopCaptureWrapper value={1}>
              <StopCaptureWrapper value={2}>
                <StopCaptureWrapper value={3}>
                  <StopCaptureWrapper value={4}>
                    <StopCaptureWrapper value={5}>
                    </StopCaptureWrapper>
                  </StopCaptureWrapper>
                </StopCaptureWrapper>
              </StopCaptureWrapper>
            </StopCaptureWrapper>
          </div>
          <div>
            <p>stopPropagation dom bubble</p>
            <StopBubbleWrapper value={1}>
              <StopBubbleWrapper value={2}>
                <StopBubbleWrapper value={3}>
                  <StopBubbleWrapper value={4}>
                    <StopBubbleWrapper value={5}>
                    </StopBubbleWrapper>
                  </StopBubbleWrapper>
                </StopBubbleWrapper>
              </StopBubbleWrapper>
            </StopBubbleWrapper>
          </div>
          <div>
            <p>overlapping siblings</p>
            <OverlappingSiblings />
          </div>
          <div>
            <p>overlapping siblings first on top</p>
            <OverlappingSiblingsFirstOnTop />
          </div>
          <div>
            <p>overlapping siblings z index</p>
            <OverlappingSiblingsZIndex />
          </div>
          <div>
            <p>overlapping siblings negative z index</p>
            <OverlappingSiblingsNegativeZIndex />
          </div>
          <div>
            <p>overlapping siblings z index, both relative position</p>
            <OverlappingSiblingsZIndexRelative />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
