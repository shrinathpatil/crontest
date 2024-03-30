"use server";

import { getConnected } from "./connection";
import { Count } from "./models";

export const getCount = async () => {
  try {
    getConnected();
    const count = await Count.findById("6607f37b924e03531219422e");
    if (!count) {
      console.log("count is not found!");
      return;
    }
    return count;
  } catch (err) {
    console.log(err);
  }
};
