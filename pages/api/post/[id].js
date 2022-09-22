export default async function handler(req, res, next) {
  if (req.method === "GET") {
    const { id } = req.query;
    const responce = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const in_data = await responce.json();
    console.log(in_data);
    console.log(id);
    res.status(200).json(in_data);
  } else if (req.method === "DELETE") {
    const commnet = req.body.text;
    const new_comment = {
      id: Date.now(),
      text: commnet,
    };
    // data.push(new_comment);
    res.status(201).json({ status: "are you sure" });
  }
}
