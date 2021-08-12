// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function  handler(req, res) {
  if (req.method == 'POST') {
    const teste = req.body;
    console.log(teste);
  }
  res.status(200).json({ name: 'Postback' })
}
