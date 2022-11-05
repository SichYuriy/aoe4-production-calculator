export class Utils {
    public static sortDescByProperty<T>(propertyExtractor: (object: T) => number): (a: T, b: T) => number {
        return (a, b) => propertyExtractor(b) - propertyExtractor(a);
    }
}