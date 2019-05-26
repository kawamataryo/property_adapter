import CamelConverter from '../src/camelConverter'

type SnakeCase = {
  id: number
  property_string: string
  property_int: number
  property_boolean: boolean
  property_object: {
    inner_property_string: string,
    inner_property_int: number,
    inner_property_boolean: boolean,
  }
}

type CamelCase = {
  id: number
  propertyString: string
  propertyInt: number
  propertyBoolean: boolean
  propertyObject: {
    innerPropertyString: string,
    innerPropertyInt: number,
    innerPropertyBoolean: boolean,
  }
}

describe('CamelConverter', () => {

  describe('#convert', () => {
    test('プロパティをキャメルケースに変換する', () => {
      const snakeCase: SnakeCase = {
        id: 1,
        property_string: 'string',
        property_int: 1,
        property_boolean: false,
        property_object: {
          inner_property_string: 'string',
          inner_property_int: 1,
          inner_property_boolean: false,
        }
      };
      expect(CamelConverter.convert(snakeCase)).toStrictEqual({
        id: 1,
        propertyString: 'string',
        propertyInt: 1,
        propertyBoolean: false,
        propertyObject: {
          innerPropertyString: 'string',
          innerPropertyInt: 1,
          innerPropertyBoolean: false,
        }
      })
    });

    test('string型の値がnullの場合空文字で初期化する', () => {
      const snakeCase = {
        property_string: 'string',
        property_string_null: null,
      };
      expect(CamelConverter.convert(snakeCase)).toStrictEqual({
        propertyString: 'string',
        propertyStringNull: null,
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
