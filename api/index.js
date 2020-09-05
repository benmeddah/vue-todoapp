export default function (req, rep, next) {
  // eslint-disable-next-line no-console
  console.log(req._parsedUrl.path)
  rep.end('aaa')
}
