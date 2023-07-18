import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.css";
import { Link } from "react-router-dom";

interface DataTableProps {
    columns: GridColDef[];
    rows: object[];
    slug: string;
}

const DataTable = ({ columns, rows, slug }: DataTableProps) => {
    const handleDelete = (id: number) => {
        console.log(id);
    };

    const actions: GridColDef = {
        field: "actions",
        headerName: "Actions",
        width: 100,
        renderCell(params) {
            return (
                <div className="flex w-full items-center gap-3">
                    <Link to={`/${slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" className="cursor-pointer" />
                    </Link>
                    <img
                        src="/delete.svg"
                        alt=""
                        className="cursor-pointer"
                        onClick={() => handleDelete(params.row.id)}
                    />
                </div>
            );
        },
    };

    columns = [...columns, actions];

    return (
        <div>
            <DataGrid
                className="bg-white px-5 py-5"
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 8,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[8]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnMenu
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
};

export default DataTable;
