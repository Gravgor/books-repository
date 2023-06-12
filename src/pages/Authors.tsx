import AuthorList from "../components/AuthorList";
import useBreadcrumbUpdate from "../hooks/useBreadcrumbUpdate"


export default function Authors() {
    useBreadcrumbUpdate()
    return (
        <>
        <h1 className="text-2xl font-bold mb-4 ml-2">Author List</h1>
        <div className="flex flex-col gap-2">
            <AuthorList />
        </div>
        </>
    )
}