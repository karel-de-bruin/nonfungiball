exports.handler = async event => {
  const id = event.path.split("/").pop()
  const players = [
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000001",
        name: "Adrian",
        team: "Earth NW",
        position: "Coach",
        scill_score: 99,
        generation: 1,
        x_factor: 35,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000002",
        name: "Brett",
        team: "Earth NE",
        position: "QB",
        scill_score: 98,
        generation: 1,
        x_factor: 24,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000003",
        name: "Dieter",
        team: "Earth SW",
        position: "RB",
        scill_score: 97,
        generation: 1,
        x_factor: 25,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000004",
        name: "Ed",
        team: "Earth SE",
        position: "WR",
        scill_score: 96,
        generation: 1,
        x_factor: 87,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000005",
        name: "Frik",
        team: "Mars NW",
        position: "TE",
        scill_score: 95,
        generation: 1,
        x_factor: 89,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000006",
        name: "Graeme",
        team: "Mars NE",
        position: "O Line",
        scill_score: 94,
        generation: 1,
        x_factor: 40,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000007",
        name: "Hugh",
        team: "Mars SW",
        position: "D Line",
        scill_score: 93,
        generation: 1,
        x_factor: 47,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000008",
        name: "Karel",
        team: "Mars SE",
        position: "LB",
        scill_score: 92,
        generation: 1,
        x_factor: 97,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000009",
        name: "Seb",
        team: "Venus NW",
        position: "CB",
        scill_score: 91,
        generation: 1,
        x_factor: 44,
    },
    {
        id: "0x7880000000000653000000000000000000000000000000000000000000000010",
        name: "Tim",
        team: "Venus NE",
        position: "Safety",
        scill_score: 90,
        generation: 1,
        x_factor: 19,
    },
  ]
  
  let player = players.find(player => player.id == id)
  
  if (!player) {
    return {
      statusCode: 404,
      body: "Player not found"
    }
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(player)
  }
}
