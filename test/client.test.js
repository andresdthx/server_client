const { isEmpty, isNumber } = require('../src/services/client');

describe('Business logic tests', () => {

    it('SUCESS - Validate empty value', () => {
        const res = isEmpty('');
        expect(res).toEqual(true);
    });

    it('UNSUCESS - Validate empty value', () => {
        const res = isEmpty(123);
        expect(res).toEqual(false);
    });

    it('SUCESS - Validate type value', () => {
        const res = isNumber(25);
        expect(res).toEqual(true);
    });

    it('UNSUCESS - Validate type value', () => {
        const res = isNumber("abcde");
        expect(res).toEqual(false);
    });
});