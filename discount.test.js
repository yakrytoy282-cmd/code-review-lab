test('5% для суммы ниже 5000', () => {
  expect(getDiscount({}, 4000)).toBe(200);
});
test('10% для суммы от 5000 до 9999', () => {
  expect(getDiscount({}, 6000)).toBe(600);
});
test('15% для суммы от 10000', () => {
  expect(getDiscount({}, 12000)).toBe(1800);
});
test('граница 5000 — уже 10%', () => {
  expect(getDiscount({}, 5000)).toBe(500);
});
test('граница 10000 — уже 15%', () => {
  expect(getDiscount({}, 10000)).toBe(1500);
});
