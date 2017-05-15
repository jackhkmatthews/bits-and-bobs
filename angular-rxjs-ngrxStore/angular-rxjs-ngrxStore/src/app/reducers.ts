export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const ADVANCE = 'ADVANCE';

export const clock = (state = new Date(), {type, payload} = {type: '', payload}) => {
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
    time: clock()
  },
  {
    name: 'Vanda',
    time: clock()
  },
  {
    name: 'Chris',
    time: clock()
  },
];

export const people = (state = defaultPeople, {type, payload}) => {
  switch (type) {
    case ADVANCE:
      return state.map((person) => {
        if (payload === person) {
          return {
            name: person.name,
            time: clock(person.time, {type: HOUR, payload: 5})
          };
        }
        return person;
      });

    case SECOND:

    default:
      return state;
  }

};
