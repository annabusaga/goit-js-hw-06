


const categoriesRef = document.querySelector('[id = "categories"]')
const categoryItemsRef = categoriesRef.querySelectorAll('.item')

console.log(`Number of categories: ${categoryItemsRef.length}`)


for (const item of categoryItemsRef) {
    const titleRef = item.querySelector('h2')
    console.log(`Category: ${titleRef.textContent}`)
    const itemsRef = item.querySelectorAll('li')
    console.log(`Elements: ${itemsRef.length}`)

}

