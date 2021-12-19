//todo to seal media query
/**
 * This is the isMobile function
 * @param windowWidth
 * @returns returns whether
 */
export const isMobile = (windowWidth: number | undefined) => {
  if (windowWidth != null && windowWidth < 1024) return true;
  else return false;
};
