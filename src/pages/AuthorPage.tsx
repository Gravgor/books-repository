import { useParams } from "react-router"
import useBreadcrumbUpdate from "../hooks/useBreadcrumbUpdate"
import AuthorCard from "../components/AuthorCard"


export default function AuthorPage() {
    const {name} = useParams()
    useBreadcrumbUpdate()
    if(!name) return null
    return <AuthorCard name={name} />
}