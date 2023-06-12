import useBreadcrumbUpdate from "../hooks/useBreadcrumbUpdate"




export default function Home() {
    useBreadcrumbUpdate()
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}