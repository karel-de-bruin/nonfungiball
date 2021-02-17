exports.handler = async event => {
  const id = event.path.split("/").pop()
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Hello World", id: id})
  }
}
