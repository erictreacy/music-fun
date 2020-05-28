import React, { Component } from 'react'
/*import './App.css'*/
import Album from './Album.js'

import months from './months.js'

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <h1>Top 10 Albums</h1>
        <p>The music that influenced my youth by <a href="//etreacy.me">Eric Treacy</a></p>
          <p>
            One of my friends, <a href="https://www.facebook.com/ianmwalling">Ian Walling</a>, gave me the task of choosing the top 10 albums that greatly 
            influenced my taste in music. One album a day, for 10 
            consecutive days. No explanations, no reviews, just covers. I decided to do my own version.
          </p>

          <p>
            Tap on a cover to stream it on Spotify, or {' '}
            <a href="//etreacy.me"> read more</a>
            {' '} about my youth's musical influence.
          </p>

          
          <br/>
          <br/>
        </div>
        {months.map(month => (
          <Album month={month.month} url={month.url} cover={month.cover} />
        ))}
      </div>
    )
  }
}

export default App