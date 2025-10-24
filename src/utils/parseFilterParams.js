const parseContactType = (type) => {
  const allowedTypes = ['work', 'home', 'personal'];
  return allowedTypes.includes(type) ? type : undefined;
};

const parseIsFavourite = (value) => {
  if (typeof value !== 'string') return undefined;

  if (value.toLowerCase() === 'true') return true;
  if (value.toLowerCase() === 'false') return false;

  return undefined;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseContactType(type);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
