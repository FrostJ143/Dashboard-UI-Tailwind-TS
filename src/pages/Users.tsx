import DataTable from "../components/dataTable/DataTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../data";
import { useState } from "react";
import Add from "../components/Add";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "avatar",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => (
            <img
                src={params.row.img || "/noavatar.png"}
                alt=""
                className="h-8 w-8 rounded-full object-cover"
            />
        ),
    },
    {
        field: "firstName",
        headerName: "First name",
        width: 150,
        editable: true,
    },
    {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        editable: true,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 90,
        editable: true,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
        field: "status",
        headerName: "Status",
        width: 100,
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
