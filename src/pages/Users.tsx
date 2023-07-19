import DataTable from "../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../data";
import { useState } from "react";
import Add from "../components/Add";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return (
                <img
                    src={params.row.img || "/noavatar.png"}
                    alt=""
                    className="h-12 w-12 rounded-full object-cover"
                />
            );
        },
    },
    {
        field: "firstName",
        type: "string",
        headerName: "First name",
        width: 120,
    },
    {
        field: "lastName",
        type: "string",
        headerName: "Last name",
        width: 120,
    },
    {
        field: "email",
        type: "string",
        headerName: "Email",
        width: 200,
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 120,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 120,
        type: "string",
    },
    {
        field: "verified",
        headerName: "Verified",
        width: 150,
        type: "boolean",
    },
];

const Users = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-2">
                <h1>Users</h1>
                <button
                    className=" rounded-md bg-white px-1 text-black"
                    onClick={() => setOpen(true)}
                >
                    Add new user
                </button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {open && <Add columns={columns} slug="users" setOpen={setOpen} />}
        </div>
    );
};

export default Users;
