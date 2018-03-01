import React, { Component } from 'react'
import './App.css'
import troubleshootingItems from '../constants/troubleshootingItems'
import ResultsContainer from './ResultsContainer/ResultsContainer'
import search from '../utils/search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: {
        value: ''
      },
      pastSearches: {},
      currentSearchList: [],
      canSearch: true,
      result: null
    }
  }

  commponentDidMount() {
    this.input.focus()
  }

  componentDidUpdate() {
    this.input.focus()
  }

  handleOnChange(e) {
    const { canSearch } = this.state
    const value = e.target.value.toLowerCase()

    if (canSearch && value.length > 2) {
      this.setState({ canSearch: false}, () => {
        setTimeout(() => {
          this.setState({ canSearch: true })
        }, 500)

        let results
        if (this.state.pastSearches[value]) {
          results = this.state.pastSearches[value]
        } else {
          results = search(value)
        }

        this.setState({
          currentSearchList: results
        }, () => {
          const { pastSearches } = this.state

          if (!pastSearches[value]) {
            this.setState({
              ...this.state,
              pastSearches: {
                ...this.state.pastSearches,
                [value]: results
              }
            })
          }
        })
      })
    }

    if (value.length < 2) {
      this.setState({
        currentSearchList: [],
        result: null
      })
    }
  }

  handleResultClick(e) {
    const { id:value } = e.target
    const { currentSearchList:results } = this.state

    const result = results.find(result => result.name = value)

    this.setState({ result })
  }

  render() {
    const { currentSearchList:results, result } = this.state
    return (
      <div className='container'>
        <header className='header'>
          <h1>Milk Bar Tech Resource</h1>
        </header>

        <div className='content'>
          <h2 className='title'>Enter your query below</h2>

          <input
            className='search-bar'
            type='text'
            onChange={e => this.handleOnChange(e)}
            ref={input => this.input = input}
          />

          { results.length > 0
          ? <ResultsContainer
            results={results}
            selectedResult={result}
            onClick={e => this.handleResultClick(e)}
          />
          : ''}
        </div>
        <div className='contributing-guide'>
          Can't find the item you're looking for? See the <a href='https://github.com/momofukumilkbar/tech-resource/blob/master/README.md'
          >
            contributing guide
          </a> to contribute to this repository.
        </div>
      </div>
    )
  }
}

export default App
