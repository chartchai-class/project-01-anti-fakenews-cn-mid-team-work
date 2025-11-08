import { Link } from 'react-router-dom'
import { getVoteAggregate } from '../utils/storage'

function formatDate(iso){
  try { return new Date(iso).toLocaleString() } catch { return iso }
}

export default function NewsCard({ item }){
  const agg = getVoteAggregate(item.id)
  const status = agg.status === 'unknown' ? 'Unknown' : (agg.status === 'fake' ? 'Fake' : 'Not Fake')
  return (
    <div className="card card-vertical">
      {item.imageThumbUrl && (
        <div className="card-media">
          <img src={item.imageThumbUrl} alt={item.title} />
        </div>
      )}
      <div className="card-body">
        <div className="between">
          <h3 className="card-title line-clamp-2">{item.title}</h3>
          <span className={`badge ${agg.status === 'fake' ? 'bad':'good'}`}>{status}</span>
        </div>
        <p className="meta">By {item.reporter} • {formatDate(item.reportedAt)}</p>
        <p className="line-clamp-3">{item.summary}</p>
      </div>
      <div className="card-footer between">
        <span className="meta">Votes: Fake {agg.fake} / Not Fake {agg.notFake}</span>
        <div className="row">
          <Link className="button ghost" to={`/news/${item.id}`}>Details</Link>
          <Link className="button" to={`/news/${item.id}/vote`}>Vote</Link>
        </div>
      </div>
    </div>
  )
}


