import config from './config'
import getTestQueries from './getTestQueries'
import configureAndResetDatabase from './database'
import evilQueryExecutor from './evilQueryExecutor'

const testRun = async (name: string, sequelizeConfig) => {
  console.log(`starting ${name} test`)
  const { sequelize, models } = await configureAndResetDatabase(sequelizeConfig)

  console.time(`${name} result`)

  const executions = 100
  const queries = getTestQueries(sequelize, models)
  await evilQueryExecutor(executions, queries)

  console.timeEnd(`${name} result`)
}
;(async () => {
  try {
    await testRun('postgres', config.postgres)
    // await testRun('mysql', config.mysql)
  } catch (error) {
    console.error(error)
  }

  process.exit(0)
})()
