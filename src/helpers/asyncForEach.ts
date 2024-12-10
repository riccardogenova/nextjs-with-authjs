import Bluebird from "bluebird";

export const asyncForEach = async <T>(array: T[], callback: (params: T) => Promise<void>) => {
  await Bluebird.map(array, callback, { concurrency: Infinity });
};
