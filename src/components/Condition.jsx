import React from 'react'


const Item = ({ name, isPacked}) => {
  return (
    <li className='item'>
      {name} {isPacked ? '✅' : '❌'}
    </li>
  )
}


const Condition = () => {
  return (
    <section>
      <h1>Just a name </h1>
      <ul>
        <Item name='Tomato' isPacked={true} />
        <Item name='Potato' isPacked={false} />
        <Item name='Onion' isPacked={true} />
      </ul>
    </section>
  )
}

export default Condition