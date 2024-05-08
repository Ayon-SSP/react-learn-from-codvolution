export const getImageUrl = (person, size = 's') => {
  console.log('Url', 'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg');
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
};


// export const getImageUrl = (person, size = 's') => {
//   return (
//     'https://www.abrilliants.com/wp-content/uploads/2023/05/1631110818-logo-react-js.png' +
//     person.imageId +
//     size +
//     '.jpg'
//   );
// };