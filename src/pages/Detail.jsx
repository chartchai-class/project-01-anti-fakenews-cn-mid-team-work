import { Link, useParams } from 'react-router-dom'
import { NEWS } from '../data/news'
import VoteSummary from '../components/VoteSummary'
import CommentList from '../components/CommentList'
import { getComments } from '../utils/storage'

function formatDate(iso){
  try { return new Date(iso).toLocaleString() } catch { return iso }
}

export default function Detail(){
  const { id } = useParams()
  const item = NEWS.find(n => n.id === id)
  const comments = getComments(id)

  if (!item) {
    return (
      <div className="card">
        <p>News not found.</p>
        <Link className="button ghost" to="/">Back</Link>
      </div>
    )
  }

  return (
    <div className="stack">
      <div className="card">
        <div className="between">
          <h2 style={{margin:0}}>{item.title}</h2>
          <Link className="button" to={`/news/${id}/vote`}>Vote on this</Link>
        </div>
        <p className="meta">By {item.reporter} • {formatDate(item.reportedAt)}</p>
        <div className="spacer"></div>
        <img src={item.imageUrl} alt="Event" style={{width:'100%',borderRadius:8}} />
        <div className="spacer"></div>
        <p>{item.content}</p>
      </div>

      <VoteSummary newsId={id} />
      <CommentList comments={comments} pageSize={5} />
      <div className="between">
        <Link className="button ghost" to="/">Back to list</Link>
        <Link className="button" to={`/news/${id}/vote`}>Add your vote</Link>
      </div>
    </div>
  )
}


