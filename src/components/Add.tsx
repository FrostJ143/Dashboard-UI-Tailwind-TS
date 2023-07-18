import { GridColDef } from "@mui/x-data-grid";

interface AddProps {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = ({ slug, columns, setOpen }: AddProps) => {
    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        // const res = await axios.post(`/api/{slug}`, data);
        e.preventDefault();
    };

    return (
        <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative  gap-4 rounded-xl bg-main px-8 py-8">
                <span
                    onClick={() => setOpen(false)}
                    className="absolute right-3 top-1 cursor-pointer px-1 py-1 text-sm"
                >
                    X
                </span>
                <h2 className="mb-4 text-xl font-semibold text-soft">Add new user</h2>
                <form
                    action=" "
                    className="flex max-w-[500px] flex-wrap gap-2"
                    onSubmit={handleSumbit}
                >
                    {columns
                        .filter((col) => col.field !== "id" && col.field !== "avatar")
                        .map((col) => (
                            <div className="mb-4 flex w-[32%] flex-col gap-2">
                                <label htmlFor="" className="text-md">
                                    {col.headerName}
                                </label>
                                <input
                                    type={col.type}
                                    placeholder={col.field}
                                    className="rounded-sm border bg-transparent px-2.5 py-2.5 text-white outline-none"
                                />
                            </div>
                        ))}
                    <label
                        htmlFor="file"
                        className="mb-4 flex cursor-pointer items-center gap-2 self-center text-sm"
                    >
                        Upload a New Image
                        <img src="/img.svg" alt="" />
                    </label>
                    <input type="file" id="file" className="hidden" />
                    <button className=" w-full rounded-sm bg-white py-2 text-black" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add;
