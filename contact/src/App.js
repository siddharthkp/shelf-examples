import React from 'react'
import shelf from 'shelf'

function App() {
  async function onSubmit(event) {
    event.preventDefault()

    const message = {
      name: event.target.name.value,
      email: event.target.email.value,
      body: event.target.body.value
    }

    await shelf.add('messages', message)

    setSubmitted(true)
  }

  const [submitted, setSubmitted] = React.useState(false)

  return (
    <>
      <main>
        <form onSubmit={onSubmit}>
          <h1>Let's talk!</h1>
          <label>Name</label>
          <input
            name="name"
            type="text"
            autoFocus
            placeholder="What's your name?"
            required
          />
          <br />
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Where can we get in touch with you?"
            required
          />
          <br />
          <label>Message</label>
          <textarea
            name="body"
            rows="4"
            placeholder="Let's talk about everything!"
            required
          />

          {submitted ? (
            <span className="message">Thanks! We'll be in touch soon</span>
          ) : (
            <button type="submit">Send message</button>
          )}
        </form>
      </main>
      <aside />
    </>
  )
}

export default App
