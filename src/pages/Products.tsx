import DataTable from "../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../data";
import { useState } from "react";
import Add from "../components/Add";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
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
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 100,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 120,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 120,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 120,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 120,
        type: "boolean",
    },
];

const Products = () => {
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
            <DataTable slug="products" columns={columns} rows={products} />
            {open && <Add columns={columns} slug="products" setOpen={setOpen} />}
        </div>
    );
};

export default Products;
