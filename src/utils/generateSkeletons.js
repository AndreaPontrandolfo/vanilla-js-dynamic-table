import { join, times } from "ramda";
import { getSkeletonWithRandomWidth } from "../utils/getSkeletonWithRandomWidth";

export const generateSkeletons = () => {
  const skeletons = times(getSkeletonWithRandomWidth, 10);

  return join("")(skeletons);
};
