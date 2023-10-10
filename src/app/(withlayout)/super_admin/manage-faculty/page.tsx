import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageFacultyPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
        ]}
      />{" "}
      <h1>Manage Students</h1>
      <Link href="/super_admin/manage-faculty/create">
        <Button type="primary">Create</Button>
      </Link>
    </div>
  );
};

export default ManageFacultyPage;
