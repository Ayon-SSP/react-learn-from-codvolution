import React from 'react'

const ListView = (props) => {

  function ListItem(number) {
    // Correct! There is no need to specify the key here:
    return <li>{number.value}</li>;
  }
  
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  );

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default ListView