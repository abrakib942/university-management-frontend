"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageStudentPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />{" "}
      <h1>Manage Students</h1>
      <Link href="/admin/manage-student/create">
        <Button>Create</Button>
      </Link>
    </div>
  );
};

export default ManageStudentPage;
