class CamelConverter {
  static convert<K>(obj): K {
    return Object.keys(obj).reduce((acc, k) => {
      if(Object.prototype.toString.call(obj[k]) === 'object') {
        acc[this.snakeToCamel(k)] = this.convert(obj[k]);
        return acc
      }
      acc[this.snakeToCamel(k)] = obj[k];
      return acc
    }, {} as K);
  };

  static snakeToCamel(str: string): string {
    return str.replace(/_(\w)/g, (_capture, match: string) => {
      return match.toUpperCase()
    });
  };
}

export default CamelConverter
