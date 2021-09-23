export const normalizeNumberByDevice = (number, { isMobile, isTablet }) => {
  const normalizedNumber = isMobile ? number / 4 : isTablet ? number / 2 : number;
  return normalizedNumber;
};
