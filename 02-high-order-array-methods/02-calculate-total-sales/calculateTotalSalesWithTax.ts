/**
 * Calculates and returns the total sales amount including tax from the input array of products and tax rate.
 * @param {Object[]} products - The array of product objects.
 * @param {string} products[].name - The name of the product.
 * @param {number} products[].price - The price of the product.
 * @param {number} products[].quantity - The quantity sold of the product.
 * @param {number} taxRate - The tax rate as a percentage.
 * @returns {number} - The total sales amount including tax.
 */
export default function calculateTotalSalesWithTax(
  products: { name: string; price: number; quantity: number }[],
  taxRate: number
): number {
  const totalPrice = products.reduce((total, item) => {
    total = total + item.price * item.quantity;
    return total;
  }, 0);

  const totalTax = totalPrice * (taxRate / 100);

  const totalPriceWithTax = totalPrice + totalTax;

  return totalPriceWithTax;
}
