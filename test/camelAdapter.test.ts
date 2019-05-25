import CamelConverter from '../src/camelConverter'

type SnakeCase = {
  id: number
  property_string: string
  property_int: number
  property_boolean: boolean
}

type CamelCase = {
  id: number
  propertyString: string
  propertyInt: number
  propertyBoolean: boolean
}

describe('CamelConverter', () => {

  describe('#convert', () => {
    test('プロパティをキャメルケースに変換する', () => {
      const snakeCase: SnakeCase = {
        id: 1,
        property_string: 'string',
        property_int: 1,
        property_boolean: false,
      };
      expect(CamelConverter.convert<CamelCase>(snakeCase)).toStrictEqual({
        id: 1,
        propertyString: 'string',
        propertyInt: 1,
        propertyBoolean: false,
      })
    });
  })

  describe('#toCamel', () => {
    test('camelCaseに変換される', () => {
      expect(CamelConverter.toCamel('snake_case')).toBe('snakeCase')
      expect(CamelConverter.toCamel('snake_case_daze')).toBe('snakeCaseDaze')
    })
  })


})
