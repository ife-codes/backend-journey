import React from 'react'

const Aside = () => {
    const date = new Date()
    const time = date.getFullYear()
  return (
    <aside>
        <h2>Dev Link</h2>
        <ul>
            <li><a href="/" className='link'>dashboard</a></li>
            <li><a href="/create" className='link'>create</a></li>
            <li><a href="/links" className='link'>links</a></li>
            <li><a href="/profile" className='link'>profile</a></li>
        </ul>
        <footer>
            &copy; {time} devlink
        </footer>
    </aside>
  )
}

export default Aside