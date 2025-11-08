// Mock dataset to drive pagination and filters
// id, title, summary, content, reporter, reportedAt ISO, imageUrl

const reporters = [
  'Alice Tan', 'Bob Lee', 'Chai Noppadol', 'Dara Singh', 'Eka Putri', 'Fern Santos', 'Gao Lin', 'Hana Kim'
]

const topics = [
  { title: 'Forest Fire Near National Park', seed: 'forest-fire' },
  { title: 'City Flood Downtown District', seed: 'city-flood' },
  { title: 'Unexpected Snow in Spring', seed: 'spring-snow' },
  { title: 'Celebrity Charity Concert', seed: 'charity-concert' },
  { title: 'New Bridge Opening Ceremony', seed: 'bridge-opening' },
  { title: 'Rare Aurora Visible Tonight', seed: 'rare-aurora' },
  { title: 'Local Farmers Market Expansion', seed: 'farmers-market' },
  { title: 'Technology Expo Draws Crowds', seed: 'tech-expo' },
  { title: 'School Science Fair Winners', seed: 'science-fair' },
  { title: 'Community Beach Cleanup', seed: 'beach-cleanup' },
  { title: 'Mountain Trail Reopens', seed: 'trail-reopen' },
  { title: 'Art Festival Weekend', seed: 'art-festival' }
]

function randomDateWithin(days) {
  const now = Date.now()
  const past = now - Math.floor(Math.random() * days * 24 * 60 * 60 * 1000)
  return new Date(past).toISOString()
}

function makeItem(i) {
  const id = String(i + 1)
  const topic = topics[i % topics.length]
  const title = topic.title
  const summary = `Report: ${topic.title}. Key facts are being verified by the community.`
  const content = `${topic.title} — full details reported by witnesses. This is a placeholder narrative to demonstrate pagination and detail view. Users are encouraged to vote Fake or Not Fake and attach credible evidence links.`
  const reporter = reporters[i % reporters.length]
  const reportedAt = randomDateWithin(60)
  const seed = `${topic.seed}-${id}`
  const imageUrl = `https://picsum.photos/seed/${seed}/800/400`
  const imageThumbUrl = `https://picsum.photos/seed/${seed}/400/220`
  return { id, title, summary, content, reporter, reportedAt, imageUrl, imageThumbUrl }
}

export const NEWS = Array.from({ length: 42 }, (_, i) => makeItem(i))


