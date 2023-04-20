export function capitalizeFirstLetter(value: string | undefined | null) {
  if (!value || typeof value !== 'string') {
    return '';
  }

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}
