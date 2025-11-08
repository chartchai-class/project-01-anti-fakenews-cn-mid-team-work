const KEY = 'safs_votes_v1'

function safeRead() {
  try {
    const raw = sessionStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function safeWrite(obj) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(obj))
  } catch {
    // ignore
  }
}

export function getComments(newsId) {
  const db = safeRead()
  return Array.isArray(db[newsId]) ? db[newsId] : []
}

export function addComment(newsId, entry) {
  const db = safeRead()
  const list = Array.isArray(db[newsId]) ? db[newsId] : []
  const record = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2,8)}`,
    author: entry.author || 'Anonymous',
    vote: entry.vote, // 'fake' | 'not_fake'
    comment: entry.comment || '',
    imageUrl: entry.imageUrl || '',
    ts: new Date().toISOString()
  }
  list.unshift(record)
  db[newsId] = list
  safeWrite(db)
  return record
}

export function getVoteAggregate(newsId) {
  const list = getComments(newsId)
  let fake = 0
  let notFake = 0
  for (const r of list) {
    if (r.vote === 'fake') fake++
    else if (r.vote === 'not_fake') notFake++
  }
  const total = fake + notFake
  const status = total === 0 ? 'unknown' : (fake >= notFake ? 'fake' : 'not_fake')
  return { fake, notFake, total, status }
}


