import withAuth from "./middlewares/withAuth";
import { NextResponse, NextRequest } from "next/server";

export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, ["/dashboard", "/profile"]);
