import { TableHead } from "../Table/TableHead";
import { generateSkeletons } from "../../utils/generateSkeletons";

export const SkeletonsRows = () => {
  const template = `
    <table id="table">
      ${TableHead()}
      ${generateSkeletons()}
    </table>
`;

  return template;
};
