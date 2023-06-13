import BookList from "../components/BookList"
import useBreadcrumbUpdate from "../hooks/useBreadcrumbUpdate"



export default function Books() {
    useBreadcrumbUpdate()
    return (
        <>
            <h1 className="text-2xl font-bold mb-4 ml-2">Book List</h1>
            <div className="flex flex-col gap-2">
                <BookList />
            </div>
        </>
    )
}