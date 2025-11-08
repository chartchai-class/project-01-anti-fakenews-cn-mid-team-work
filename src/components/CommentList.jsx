import { useMemo, useState } from 'react'

function formatDate(iso){
  try { return new Date(iso).toLocaleString() } catch { return iso }
}

export default function CommentList({ comments, pageSize = 5 }){
  const [page, setPage] = useState(1)
  const total = comments.length
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const start = (page - 1) * pageSize
  const current = useMemo(()=>comments.slice(start, start + pageSize), [comments, start, pageSize])
  return (
    <div className="card">
      <div className="between">
        <strong>Comments</strong>
        <span className="meta">{total} total</span>
      </div>
      <div className="spacer"></div>
      {current.length === 0 && <p className="meta">No comments yet. Be the first to vote and comment.</p>}
      {current.map(c => (
        <div className="comment" key={c.id}>
          <div className="between">
            <span className="author">{c.author}</span>
            <span className="ts">{formatDate(c.ts)}</span>
          </div>
          <div className="meta vote">Voted: {c.vote === 'fake' ? 'Fake' : 'Not Fake'}</div>
          {c.comment && <p>{c.comment}</p>}
          {c.imageUrl && <p><a className="link" href={c.imageUrl} target="_blank" rel="noreferrer">Evidence image</a></p>}
        </div>
      ))}
      <div className="pagination">
        <button className="button ghost" disabled={page===1} onClick={()=>setPage(1)}>First</button>
        <button className="button ghost" disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))}>Prev</button>
        <span className="meta">Page {page} / {totalPages}</span>
        <button className="button ghost" disabled={page===totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Next</button>
        <button className="button ghost" disabled={page===totalPages} onClick={()=>setPage(totalPages)}>Last</button>
      </div>
    </div>
  )
}


