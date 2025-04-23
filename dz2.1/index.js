import { catalog } from './catalog.js';

const century = 20;
const search = 'История';

console.log(catalog);

function allLanguages() {
    let Languages = []
    for (let i = 0; i < catalog.length; i++) {
        if (Languages.includes(catalog[i].language) === false) {
            Languages.push(catalog[i].language)
        }
    }
    return Languages
}

function BooksByCentury(century) {
    let Books = []
    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].year >= (century - 1) * 100 + 1 && catalog[i].year <= century * 100) {
            Books.push(catalog[i].title)
        }
    }
    return Books
}

function AuthorOrTitle(search) {
    let result = []
    const searchLower = search.toLowerCase()
    for (let i = 0; i < catalog.length; i++) {
        const author = catalog[i].author.toLowerCase()
        const title = catalog[i].title.toLowerCase()
        if (author.includes(searchLower) || title.includes(searchLower)) {
            result.push(`${catalog[i].author} - ${catalog[i].title}`)
        }
    }
    return result
}

console.log(allLanguages())
console.log(BooksByCentury(century))
console.log(AuthorOrTitle(search))