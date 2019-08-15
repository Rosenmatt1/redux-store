import React from 'react';
// import ReactDOM from 'react-dom';
import { injectIntl, IntlProvider, FormattedRelative } from 'react-intl';

const DateIntl = injectIntl(({ date, intl }) => (

  return (
  <span title={intl.formatDate(date)}>
    <FormattedRelative value={date} />
  </span>
))
  )








export default DateIntl