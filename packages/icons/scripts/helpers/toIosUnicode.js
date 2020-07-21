const toIosUnicode = (unicode) => `${unicode.replace("%u", "\\u{")}}`;

module.exports = toIosUnicode;
