export const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("ru-RU"); 
};