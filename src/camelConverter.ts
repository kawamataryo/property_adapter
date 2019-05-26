class CamelConverter {
  static convert<T, K>(obj): K {
    return Object.keys(obj).reduce((acc, k) => {
      if(typeof obj[k] === 'number') {
        acc[this.toCamel(k)] = obj[k] || 0;
        return acc
      }
      if(typeof obj[k] === 'string') {
        acc[this.toCamel(k)] = obj[k] || '';
        return acc
      }
      if(Object.prototype.toString.call(obj[k]) === 'object') {
        acc[this.toCamel(k)] = this.convert(obj[k]);
        return acc
      }
      acc[this.toCamel(k)] = obj[k];
      return acc
    }, {} as K);
  };

  static toCamel(str: string): string {
    return str.replace(/_(\w)/g, (_capture, match: string) => {
      return match.toUpperCase()
    });
  };
}

export default CamelConverter
