export default async (
  numberOfExecutions: number,
  funcs: (() => Promise<any>)[]
) => {
  let resultCount = 0

  let x = 0
  while (x < numberOfExecutions) {
    for (const fn of funcs) {
      // Execute the functions in a tight loop and do not wait before running the next one
      fn()
        .then(result => {
          resultCount++
        })
        .catch(error => {
          console.error(error)
          resultCount++
        })
    }
    x++
  }

  // Check every 100ms and resolve when we have the correct number of query results returned
  return new Promise(res => {
    const target = numberOfExecutions * funcs.length

    const interval = setInterval(() => {
      if (resultCount >= target) {
        clearInterval(interval)
        res()
      }
    }, 100)
  })
}
