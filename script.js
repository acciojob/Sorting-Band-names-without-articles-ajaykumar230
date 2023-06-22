//your code here

let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Nirvana'];

// Remove articles from the band names
const removeArticles = (name) => {
  return name.replace(/^(a |an |the )/i, '');
};

// Sort the band names in lexicographic order without articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});

// Get the <ul> element with the id 'band'
const bandList = document.querySelector('#band');

// Create <li> elements for each band name and append them to the <ul> element
bandNames.forEach((name) => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});