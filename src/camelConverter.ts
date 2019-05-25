class CamelConverter {
  static convert<T>(obj): T {
    return Object.keys(obj).reduce((acc, k) => {
      acc[this.toCamel(k)] = obj[k];
      return acc
    }, {} as T);
  };

  static toCamel(str: string): string {
    return str.replace(/_(\w)/g, (_capture, match: string) => {
      return match.toUpperCase()
    });
  };

}

export default CamelConverter
