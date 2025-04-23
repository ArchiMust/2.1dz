import { catalog } from './catalog.js';

const century = 20;
const search = 'История';

console.log(catalog);

function getUniqueLanguages() {
    const languages = [...new Set(catalog.map(book => book.language))];
    console.log("Уникальные языки:");
    languages.forEach(lang => console.log("•", lang));
}

function getBooksByCentury(century) {
    const startYear = (century - 1) * 100;
    const endYear = century * 100;
    const books = catalog.filter(book => book.year > startYear && book.year <= endYear);
    console.log(`Книги ${century} века:`);
    books.forEach(book => console.log(`• ${book.title} (${book.year}) — ${book.author}`));
}

function searchBooks(query) {
    const lowerQuery = query.toLowerCase();
    const results = catalog.filter(book =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
    console.log(`Результаты поиска по запросу "${query}":`);
    results.forEach(book => console.log(`• "${book.title}" — ${book.author}`));
}

getUniqueLanguages();
getBooksByCentury(century);
searchBooks(search);