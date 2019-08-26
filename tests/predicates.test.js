const test = require('tape');
const predicates = require('../src/predicates');
const { notBest, notWorst, betterThan, notAdjacent } = predicates;

test('not the best', t => {
    const arr = ['foo', 'bar'];
    t.true(notBest('bar')(arr), 'bar is not the best');
    t.false(notBest('foo')(arr), 'foo is the best');
    t.end();
});

test('not the worst', t => {
    const arr = ['foo', 'bar'];
    t.true(notWorst('foo')(arr), 'foo is not the worst');
    t.false(notWorst('bar')(arr), 'bar is the worst');
    t.end();
});

test('better than', t => {
    const arr = ['foo', 'bar', 'baz'];
    t.true(betterThan('foo', 'bar')(arr), 'foo is better than bar');
    t.true(betterThan('foo', 'baz')(arr), 'foo is better than baz');
    t.false(betterThan('bar', 'foo')(arr), 'bar is worse than foo');
    t.end();
});

test('not directly above', t => {
    const arr = ['foo', 'bar', 'baz'];
    t.true(notAdjacent('foo', 'baz')(arr), 'foo is not directly above baz');
    t.false(notAdjacent('foo', 'bar')(arr), 'foo is directly above bar');
    t.end();
});

test('not directly below', t => {
    const arr = ['foo', 'bar', 'baz'];
    t.true(notAdjacent('baz', 'foo')(arr), 'baz is not directly below foo');
    t.false(notAdjacent('bar', 'foo')(arr), 'bar is directly below foo');
    t.end();
});
