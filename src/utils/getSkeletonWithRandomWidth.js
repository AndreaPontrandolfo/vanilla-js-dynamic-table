import { SkeletonsRow } from "../components";
import { detectDevice } from "../utils/detectDevice";
import { normalizeNumberByDevice } from "../utils/normalizeNumberByDevice";
import { getRandomNumberByRange } from "../utils/getRandomNumberByRange";

export const getSkeletonWithRandomWidth = () => {
  const device = detectDevice();
  const minNumber = normalizeNumberByDevice(100, device);
  const maxNumber = normalizeNumberByDevice(300, device);
  const randomNumber1 = getRandomNumberByRange(minNumber, maxNumber);
  const randomNumber2 = getRandomNumberByRange(minNumber, maxNumber);

  return SkeletonsRow(randomNumber1, randomNumber2);
};
