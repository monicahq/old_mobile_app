import moment from 'moment';

export const getAvatarUrl = contact => {
  const avatar = contact.information.avatar;
  if (avatar.source === 'internal') {
    // 'https://app.monicahq.com' + avatar.url
    return 'https://app.monicahq.com/storage/avatars/XvvtoX2D0Im3fVx2I7SsBoP8QwfuUvnsecNP1Y6B_110.jpeg';
  }

  if (avatar.source === 'external') {
    return avatar.url;
  }

  return 'https://app.monicahq.com/storage/avatars/XvvtoX2D0Im3fVx2I7SsBoP8QwfuUvnsecNP1Y6B_110.jpeg';
};

export const getLastUpdatedDate = contact => {
  return moment(contact.updated_at).format('L');
};
