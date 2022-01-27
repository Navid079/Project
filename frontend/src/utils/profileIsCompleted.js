const profileIsCompleted = context => {
  if (context.name.first === '') return false;
  if (context.name.last === '') return false;
  if (context.shopAddress === '') return false;
  if (context.postalCode === '') return false;
  if (context.nationalCode === '') return false;
  if (context.idNumber === '') return false;
  return true;
};

export default profileIsCompleted;
