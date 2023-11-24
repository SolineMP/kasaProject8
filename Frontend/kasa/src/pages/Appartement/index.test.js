import { equipmentsLists } from './'

describe('The equipmentsLists function', () => {
    it('should add a list of equipments', () => {
        const expectedState = '<li></>'
        expect(equipmentsLists('<li></>')).toEqual(expectedState)
    })
})