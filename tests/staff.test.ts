import { Sheet } from '../src'

it('should add staff', () => {

  let sheet = Sheet.empty()


  expect(sheet.bra).toBe('')


  sheet.add_staff('gclef')

  expect(sheet.bra).toBe('gclef')


  sheet.add_staff('gclef')


  expect(sheet.bra).toBe('gclef\n\ngclef')


  expect(Sheet.from_bra(sheet.bra).bra).toBe(sheet.bra)
})
