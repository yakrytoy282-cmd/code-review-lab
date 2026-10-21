const TIER_HIGH = 10000;
const TIER_MID = 5000;

function getDiscount(user, amount) {
  if (amount < 0) throw new Error('Сумма заказа не может быть отрицательной');
  if (amount >= TIER_HIGH) return amount * 0.15;
  if (amount >= TIER_MID) return amount * 0.10;
  return amount * 0.05;
}
function isDiscountTierHigh(amount) {
  return amount >= TIER_HIGH;
}
