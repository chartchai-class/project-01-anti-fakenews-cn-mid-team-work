import { useMemo, useState } from 'react'
import { NEWS } from '../data/news'
import Filters from '../components/Filters'
import Pagination from '../components/Pagination'
import NewsCard from '../components/NewsCard'
import { getVoteAggregate } from '../utils/storage'

export default function Home(){
  const [filter, setFilter] = useState('all')
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)

  const enriched = useMemo(()=>NEWS.map(n=>({ ...n, agg: getVoteAggregate(n.id) })), [])
  const filtered = useMemo(()=>{
    if (filter === 'all') return enriched
    return enriched.filter(n => n.agg.status === filter)
  }, [enriched, filter])

  const total = filtered.length
  const start = (page-1)*pageSize
  const current = useMemo(()=>filtered.slice(start, start + pageSize), [filtered, start, pageSize])

  function handleFilterChange(v){
    setFilter(v)
    setPage(1)
  }

  function handlePageSizeChange(n){
    setPageSize(n)
    setPage(1)
  }

  return (
    <div className="stack">
      <div className="card">
        <div className="between">
          <h2 style={{margin:0}}>News</h2>
          <span className="meta">Browse and crowd-vote fake vs not fake</span>
        </div>
        <Filters filter={filter} pageSize={pageSize} onFilterChange={handleFilterChange} onPageSizeChange={handlePageSizeChange} />
      </div>
      <div className="grid">
        {current.map(item => <NewsCard key={item.id} item={item} />)}
      </div>
      <Pagination page={page} pageSize={pageSize} total={total} onPageChange={setPage} />
    </div>
  )
}


