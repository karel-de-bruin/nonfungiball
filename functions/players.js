exports.handler = async event => {
  return {
    statusCode: 200,
    body: {
      path: event.path,
      other: "test"
    }
  }
}
