import { useParams } from "react-router"
import useBreadcrumbUpdate from "../hooks/useBreadcrumbUpdate"
import BookCard from "../components/BookCard"


export default function BookPage() {
    const { name } = useParams()
    useBreadcrumbUpdate()
    if (!name) return null
    return <BookCard name={name} />
}