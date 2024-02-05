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
  type: string;
}

export default function PaginationBar({
  username,
  pageNumber,
  repos,
  type,
}: PaginationBarProps) {
  const router = useRouter();

  const fetchNewRepos = (pageNumber: number) => {
    if (type === "search") {
      router.push(`/search?username=${username}&page=${pageNumber}&perPage=10`);
    } else if (type === "repos") {
      router.push(
        `/profile/${username}/repos?numberOfRepos=${repos}&page=${pageNumber}&perPage=10`
      );
    } else {
      router.push("/");
    }
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
