"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
        Dashboard
      </h1>
    </div>
  );
};

export default DashboardPage;
