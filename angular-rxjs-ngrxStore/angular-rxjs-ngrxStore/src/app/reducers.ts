export const HOUR = 'HOUR';
export const SECOND = 'SECOND';

export const clock = (state = new Date(), {type, payload}) => {
  const date = new Date(state.getTime());

  switch (type) {
    case HOUR:
      date.setHours(date.getHours() + payload);
      return date;
    case SECOND:
      date.setSeconds(date.getSeconds() + payload);
      return date;
    default:
      return state;
  }

};

const defaultPeople = [
  {
    name: 'Jack',
    time: ''
  },
  {
    name: 'Vanda',
    time: ''
  },
  {
    name: 'Chris',
    time: ''
  },
];

export const people = (state = defaultPeople, {type, payload}) => {
  switch (type) {
    case HOUR:

    case SECOND:

    default:
      return state;
  }

};
