export default async (
  numberOfExecutions: number,
  funcs: (() => Promise<any>)[]
) => {
  console.log('funcs.length', funcs.length)
  console.log('numberOfExecutions', numberOfExecutions)
  try {
    let x = 0
    while (x < numberOfExecutions) {
      // console.log('x', x)
      for (const fn of funcs) {
        await fn()
      }
      // await Promise.all(funcs)
      x++
    }
  } catch (error) {
    console.error(error)
  }
}
