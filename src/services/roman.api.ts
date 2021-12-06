export abstract class RomanApi {
  abstract roman(name?: string): Promise<string>;
}
