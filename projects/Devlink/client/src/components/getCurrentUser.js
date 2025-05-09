export const getCurrentUser = async (session) => {
  const email = await session.user.email;

  return email;
};
