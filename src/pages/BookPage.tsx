import { useParams } from "react-router"
import BookCard from "../components/BookCard"


export default function BookPage() {
    const { id } = useParams()
    if (!id) return null
    return <BookCard id={id} />
}