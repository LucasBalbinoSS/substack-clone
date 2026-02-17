export const formatSocialNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace('.', ',') + ' mi';
  }
  
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace('.', ',').replace(',0', '') + 'k';
  }

  return num.toString();
};