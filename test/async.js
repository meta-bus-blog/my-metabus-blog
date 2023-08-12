async function main() {
    function first() {
        console.log('dfkhsdlkfhsdkl')
    }
    function printFunc(){
        console.log('print')
        return 1
    }

    console.log('코드')
    setTimeout(first, 1000)
    console.log('실행')
    new Promise((res, rej)=>{
        res('dd')
    })
  const prom = new Promise((res, rej)=>{
    setTimeout(()=>{
        res('success')
    },1000)
  })
  prom.then((res)=>{
    console.log(res)
  }).catch((err)=>{console.log(err)})
  console.log('!')

  function test(){
    return Promise.resolve('test')
  }
  async function test2(){
    const result = await 'test!'
    console.log(result)
    return result
  }
  const a = test2()
  console.log(a)
}

main()