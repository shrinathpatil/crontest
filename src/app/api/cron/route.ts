import { getConnected } from "@/database/connection";
import { Count } from "@/database/models";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const GET = async () => {
  try {
    getConnected();
    const count = await Count.findByIdAndUpdate(
      "6607f37b924e03531219422e",
      { $inc: { count: 1 } },
      { upsert: true, new: true }
    );

    revalidatePath("/");
    return NextResponse.json({
      message: "ok",
      data: count,
    });
  } catch (error) {
    return NextResponse.json({
      message: "error",
      data: error,
    });
  }
};
