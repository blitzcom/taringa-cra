import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

export const esFormatter = buildFormatter({
  prefixAgo: 'hace',
  prefixFromNow: 'dentro de',
  suffixAgo: '',
  suffixFromNow: 'justo ahora',
  seconds: '%d segundos',
  minute: '1 minuto',
  minutes: '%d minutos',
  hour: '1 hora',
  hours: '%d horas',
  day: '1 día',
  days: '%d días',
  month: '1 mes',
  months: '%d meses',
  year: '1 año',
  years: '%d años',
})

export const shortESFormatter = buildFormatter({
  prefixAgo: '\u2219',
  prefixFromNow: '',
  suffixAgo: '',
  suffixFromNow: '',
  seconds: '%d s',
  minute: '1 m',
  minutes: '%d m',
  hour: '1 h',
  hours: '%d h',
  day: '1 d',
  days: '%d d',
  month: '1 m',
  months: '%d m',
  year: '1 a',
  years: '%d a',
})
