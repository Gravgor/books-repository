import AuthorList from "../components/AuthorList";
import useBreadcrumbUpdate from "../hooks/useBreadcrumbUpdate";

export default function Authors() {
    useBreadcrumbUpdate();


    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4 ml-2">Author List</h1>
            <AuthorList />
        </div>
    );
}
