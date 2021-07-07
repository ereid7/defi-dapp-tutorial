const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(callback) {
  let tokenFarm = await TokenFarm.deployed()
  console.log("Issuing Tokens..")
  let test = await tokenFarm.issueTokens()
                        .catch((error) => {
                            console.log(error)
                        })
  console.log(test)

  console.log("Tokens issued!")
  callback()
}