// Description:
//   :big-f-1::big-f-2:
//   :big-f-3::big-f-4:
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   big-f - Retorna :big-f-1::big-f-2:
//                   :big-f-3::big-f-4:
//
// Author:
//   @B1041CM4N

function bigf () {
  return ":big-f-1::big-f-2:\n:big-f-3::big-f-4:"
}

module.exports = function (robot) {
  robot.hear(/big-f/, function (res) {
    const msg = bigf()
    res.send(msg)
  })
}
