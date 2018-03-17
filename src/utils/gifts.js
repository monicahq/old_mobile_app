export const getLabel = gift => {
  if (gift.has_been_offered) {
    return 'offered';
  }
  if (gift.is_an_idea) {
    return 'idea';
  }
};
