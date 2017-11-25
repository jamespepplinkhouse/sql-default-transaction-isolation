import config from './config'
import getTestQueries from './getTestQueries'
import configureAndResetDatabase from './database'
import sequentialExecutor from './sequentialExecutor'

const testRun = async (name: string, sequelizeConfig) => {
  console.log(`starting ${name} test`)
  const { sequelize, models } = await configureAndResetDatabase(sequelizeConfig)

  console.time(`${name} result`)

  const executions = 1000
  const queries = getTestQueries(models)
  await sequentialExecutor(executions, queries)

  console.timeEnd(`${name} result`)
}
;(async () => {
  try {
    await testRun('postgres', config.postgres)
    await testRun('mysql', config.mysql)
  } catch (error) {
    console.error(error)
  }

  process.exit(0)
})()
