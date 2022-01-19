const {format_date, format_plural, format_url} = require('../utils/helpers');

test('Format date() returns a new string', () => {
    const date = new Date('2022-1-19 16:12:03');

    expect(format_date(date)).toBe('1/19/2022');
});

test('format_plural should return words if there is more than 1', () => {
    const word1 = format_plural('tiger', 1);
    const word2 = format_plural('lion', 2);

    expect(word1).toBe('tiger');
    expect(word2).toBe('lions');
});

test('format_url() should return a simplified url sting', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
})