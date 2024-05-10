import React, { useEffect } from 'react'

const HooksDocs = () => {
  // const [state, setState] = useState(initialState)
  // useEffect(() => {
  //   // code to run on component mount
  //   return () => {
  //     // code to run on component unmount
  //   }
  // }, [dependencies])

  const [counter, setCounter] = React.useState(0)
  const [name, setName] = React.useState('')

  useEffect(() => {
    document.title = `You clicked ${counter} times`
    console.log('useEffect - Updating document title')
  // }) // This will run on every render
  }, [counter])

  return (
    <>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <div>HooksDocs</div>
        <button className='btn btn-primary mt-3' onClick={() => setCounter(prevCounter => prevCounter + 1)}>Click: {counter}</button>

    </>
  )
}

export default HooksDocs