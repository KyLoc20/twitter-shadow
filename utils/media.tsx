 //todo to seal media query
 export const isMobile = (windowWidth: number | undefined) => {
  if (windowWidth != null && windowWidth < 1024) return true;
  else return false;
};