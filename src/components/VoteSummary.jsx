import { getVoteAggregate } from '../utils/storage'

export default function VoteSummary({ newsId }){
  const agg = getVoteAggregate(newsId)
  const status = agg.status === 'unknown' ? 'Unknown' : (agg.status === 'fake' ? 'Fake' : 'Not Fake')
  return (
    <div className="card">
      <div className="between">
        <strong>Community Verdict</strong>
        <span className={`badge ${agg.status === 'fake' ? 'bad':'good'}`}>{status}</span>
      </div>
      <div className="row" style={{marginTop:8}}>
        <div className="col"><div className="badge bad">Fake: {agg.fake}</div></div>
        <div className="col"><div className="badge good">Not Fake: {agg.notFake}</div></div>
        <div className="col"><span className="meta">Total: {agg.total}</span></div>
      </div>
    </div>
  )
}


