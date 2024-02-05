"use client";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface PaginationBarProps {
  username: string;
  pageNumber: number;
  repos: number;
}

export default function PaginationBar({
  username,
  pageNumber,
  repos,
}: PaginationBarProps) {
  const router = useRouter();

  const fetchNewRepos = (pageNumber: number) => {
    router.push(
      `/profile/${username}/repos?numberOfRepos=17&page=${pageNumber}&perPage=10`
    );
  };

  return (
    <Pagination
      size="lg"
      total={Math.ceil(repos / 10)}
      initialPage={pageNumber}
      className="w-min m-auto"
      onChange={fetchNewRepos}
    />
  );
}
