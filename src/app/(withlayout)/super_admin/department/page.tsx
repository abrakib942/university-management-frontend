import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const ManageDepartmentPage = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <h1>Department List</h1>
      <Link href="/admin/department/create">
        <Button type="primary">Create</Button>
      </Link>
    </div>
  );
};

export default ManageDepartmentPage;
