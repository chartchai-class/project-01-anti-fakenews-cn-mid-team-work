import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { NEWS } from '../data/news'
import { addComment } from '../utils/storage'

export default function Vote(){
  const { id } = useParams()
  const navigate = useNavigate()
  const item = NEWS.find(n => n.id === id)

  const [vote, setVote] = useState('fake')
  const [comment, setComment] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [author, setAuthor] = useState('')

  if (!item) {
    return (
      <div className="card">
        <p>News not found.</p>
        <Link className="button ghost" to="/">Back</Link>
      </div>
    )
  }

  function handleSubmit(e){
    e.preventDefault()
    addComment(id, { vote, comment, imageUrl, author: author || 'Anonymous' })
    navigate(`/news/${id}`)
  }

  return (
    <div className="stack">
      <div className="card">
        <h2 style={{marginTop:0}}>Vote on: {item.title}</h2>
        <form className="stack" onSubmit={handleSubmit}>
          <div className="row">
            <label className="col">Your name
              <input className="input" placeholder="Optional" value={author} onChange={e=>setAuthor(e.target.value)} />
            </label>
          </div>
          <div className="row">
            <label className="col">Your vote
              <select className="select" value={vote} onChange={e=>setVote(e.target.value)}>
                <option value="fake">Fake</option>
                <option value="not_fake">Not Fake</option>
              </select>
            </label>
          </div>
          <div className="row">
            <label className="col">Comment
              <textarea className="textarea" rows={4} placeholder="Why do you think so?" value={comment} onChange={e=>setComment(e.target.value)} />
            </label>
          </div>
          <div className="row">
            <label className="col">Evidence image URL
              <input className="input" placeholder="https://..." value={imageUrl} onChange={e=>setImageUrl(e.target.value)} />
            </label>
          </div>
          <div className="between">
            <Link className="button ghost" to={`/news/${id}`}>Cancel</Link>
            <button className="button" type="submit">Submit Vote</button>
          </div>
        </form>
      </div>
    </div>
  )
}


