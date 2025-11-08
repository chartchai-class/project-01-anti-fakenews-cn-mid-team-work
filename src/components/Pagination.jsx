export default function Pagination({ page, pageSize, total, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const canPrev = page > 1
  const canNext = page < totalPages
  const go = (p) => onPageChange(Math.min(totalPages, Math.max(1, p)))
  return (
    <div className="pagination">
      <button className="button ghost" disabled={!canPrev} onClick={() => go(1)}>First</button>
      <button className="button ghost" disabled={!canPrev} onClick={() => go(page - 1)}>Prev</button>
      <span className="meta">Page {page} / {totalPages} ({total} items)</span>
      <button className="button ghost" disabled={!canNext} onClick={() => go(page + 1)}>Next</button>
      <button className="button ghost" disabled={!canNext} onClick={() => go(totalPages)}>Last</button>
    </div>
  )
}


