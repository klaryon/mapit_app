export function calculateDepreciation(purchaseValue, purchaseDate) {
  const purchaseYear = new Date(purchaseDate).getFullYear();
  const currentYear = new Date().getFullYear();
  const passedYears = currentYear - purchaseYear;

  return (purchaseValue * Math.pow(0.5, passedYears)).toFixed(2);
}
