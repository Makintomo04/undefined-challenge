
export const getUniqueTags = (data) => {
  const uniqueTags: string[] = [];
  uniqueTags.push('All');
  data.forEach((item) => {
    item?.fields?.tags.forEach((tag) => {
     
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    })
  })
  return uniqueTags

}