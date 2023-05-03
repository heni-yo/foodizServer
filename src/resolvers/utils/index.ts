export function nullRemover<T extends Record<string, any>>(data: T): T {
  for (let i in data) {
    if (data[i] === null) {
      delete data[i];
    }
  }
  return data;
}