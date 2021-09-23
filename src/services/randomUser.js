import Swal from "sweetalert2";
import axios from "axios";
import { setSwalOptions } from "../utils/configs/swalConfigs";

export const randomUser = {
  async fetchUsersBatch() {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      return response;
    } catch (error) {
      const { toast } = setSwalOptions("toast", error);
      Swal.fire(toast);
    }
  },
};
