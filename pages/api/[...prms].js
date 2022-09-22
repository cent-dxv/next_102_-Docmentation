export default function handler(req, res) {
  const { prms } = req.query
  console.log(req.query)
  res.end(`Post: ${prms.join(', ')}`)
}
