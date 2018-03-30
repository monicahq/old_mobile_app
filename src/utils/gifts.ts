import {I18n} from '@i18n';
import {IGift} from '@models';

export const getLabel = (gift: IGift) => {
  if (gift.has_been_offered) {
    return I18n.t('gifts:offered');
  }
  if (gift.is_an_idea) {
    return I18n.t('gifts:idea');
  }
};
