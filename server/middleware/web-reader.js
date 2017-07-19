const read = require('node-readability');
const sanitizer = require('sanitizer');

// Module that reads a web page and takes its text out using both modules above
// output is sent to note creating route
module.exports = (url, next) => {
	read(url, (err, article, meta) => {
		if (err) return next(err, false);

		const scrapedArticle = {
			url: url,
			title: article.title.trim(),
			content: stripHTML(article.content || '')
		};

		article.close();
		next(null, scrapedArticle);
	});
};

function stripHTML(html) {
	let clean = sanitizer.sanitize(html, str => {
		return str;
	});
	// Remove remaining HTML tags.
	clean = clean.replace(/<(?:.|\n)*?>/gm, '');

	clean = clean.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/ig, '\n');

	// Return the resulting text trimming whitespace.
	return clean.trim();
}
