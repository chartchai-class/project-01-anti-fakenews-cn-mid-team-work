export default function Filters({ filter, pageSize, onFilterChange, onPageSizeChange }) {
  return (
    <div className="controls">
      <select className="select" value={filter} onChange={(e)=>onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="fake">Fake</option>
        <option value="not_fake">Not Fake</option>
      </select>
      <label className="meta">Per page</label>
      <select className="select" value={pageSize} onChange={(e)=>onPageSizeChange(Number(e.target.value))}>
        {[5,10,12,20].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
    </div>
  )
}


