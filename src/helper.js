export function getYearDifference(year) {
  return new Date().getFullYear() - year
}

export function calculateBrand(brand) {
  let i

  switch (brand) {
    case 'european':
      i = 1.3
      break
    case 'american':
      i = 1.15
      break
    case 'asian':
      i = 1.05
      break

    default:
      break
  }

  return i
}

export function getPlan(plan) {
  return plan === 'basic' ? 1.2 : 1.5
}

export function firstCapital(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
