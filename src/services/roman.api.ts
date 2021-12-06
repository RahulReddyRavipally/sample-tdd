export abstract class RomanApi {
  abstract roman(number?: number): Promise<string>;
}
