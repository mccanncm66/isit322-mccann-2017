const gistState = {
    getFoo: {
        foo: 'foo',
        file: 'api.js'
    },
    numbers: {
        nine: '0',
        eight: '0',
        seven: '0',
        six: '0',
        five: '0',
        four: '0',
        three: '0',
        two: '0',
        one: '0'
    }

};

const gistReducer = (state = gistState, action) => {
    switch (action.type) {
        case 'GETFOO':
            return Object.assign({}, state, {
                getFoo: action.getFoo
            });

        case 'NUMBER_NINE':
            return Object.assign({}, state, {
                numbers: {
                    nine: 9,
                    eight: state.numbers.eight,
                    seven: state.numbers.seven,
                    six: state.numbers.six,
                    five: state.numbers.five,
                    four: state.numbers.four,
                    three: state.numbers.three,
                    two: state.numbers.two,
                    one: state.numbers.one
                }
            });

        case 'NUMBER_EIGHT':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: 8,
                    seven: state.numbers.seven,
                    six: state.numbers.six,
                    five: state.numbers.five,
                    four: state.numbers.four,
                    three: state.numbers.three,
                    two: state.numbers.two,
                    one: state.numbers.one
                }
            });

        case 'NUMBER_SEVEN':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: state.numbers.eight,
                    seven: 7,
                    six: state.numbers.six,
                    five: state.numbers.five,
                    four: state.numbers.four,
                    three: state.numbers.three,
                    two: state.numbers.two,
                    one: state.numbers.one
                }
            });

        case 'NUMBER_SIX':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: state.numbers.eight,
                    seven: state.numbers.seven,
                    six: 6,
                    five: state.numbers.five,
                    four: state.numbers.four,
                    three: state.numbers.three,
                    two: state.numbers.two,
                    one: state.numbers.one
                }
            });

        case 'NUMBER_FIVE':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: state.numbers.eight,
                    seven: state.numbers.seven,
                    six: state.numbers.six,
                    five: 5,
                    four: state.numbers.four,
                    three: state.numbers.three,
                    two: state.numbers.two,
                    one: state.numbers.one
                }
            });

        case 'NUMBER_FOUR':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: state.numbers.eight,
                    seven: state.numbers.seven,
                    six: state.numbers.six,
                    five: state.numbers.five,
                    four: 4,
                    three: state.numbers.three,
                    two: state.numbers.two,
                    one: state.numbers.one
                }
            });

        case 'NUMBER_THREE':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: state.numbers.eight,
                    seven: state.numbers.seven,
                    six: state.numbers.six,
                    five: state.numbers.five,
                    four: state.numbers.four,
                    three: 3,
                    two: state.numbers.two,
                    one: state.numbers.one
                }
            });

        case 'NUMBER_TWO':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: state.numbers.eight,
                    seven: state.numbers.seven,
                    six: state.numbers.six,
                    five: state.numbers.five,
                    four: state.numbers.four,
                    three: state.numbers.three,
                    two: 2,
                    one: state.numbers.one
                }
            });

        case 'NUMBER_ONE':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: state.numbers.eight,
                    seven: state.numbers.seven,
                    six: state.numbers.six,
                    five: state.numbers.five,
                    four: state.numbers.four,
                    three: state.numbers.three,
                    two: state.numbers.two,
                    one: 1
                }
            });

        default:
            return state;
    }
};

export default gistReducer;