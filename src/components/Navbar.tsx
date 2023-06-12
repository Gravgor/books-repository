import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { BreadcrumbItem } from '../store/types/breadcrumbTypes';
import { useNavigate } from 'react-router';
import { AiOutlineHome } from 'react-icons/ai';

export default function Navbar() {
    const breadcrumbs = useSelector<RootState, BreadcrumbItem[]>((state) => state.breadcrumb.breadcrumbs);
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
        e.preventDefault();
        navigate(url);
    };

    const homeBreadcrumb: BreadcrumbItem = {
        label: 'Home',
        url: '/',
    };
    return (
        <nav className="flex flex-col gap-2 shadow-lg h-auto w-full my-2 p-2 text-black">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold ml-2">Bookify</h1>
            </div>
            <ol className="flex items-center">
                <li className="flex items-center">
                    <AiOutlineHome className="w-4 h-4 mx-2 text-gray-500 hover:text-gray-700" />
                    <a href={homeBreadcrumb.url} className="text-gray-500 hover:text-gray-700" onClick={(e) => {
                        handleClick(e, homeBreadcrumb.url);
                    }}>
                        {homeBreadcrumb.label}
                    </a>
                    {breadcrumbs.length > 0 && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 mx-2 text-gray-500"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    )}
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index} className="flex items-center">
                        <a href={breadcrumb.url} className="text-gray-500 hover:text-gray-700" onClick={(e) => {
                            handleClick(e, breadcrumb.url);
                        }}>
                            {breadcrumb.label}
                        </a>
                        {index < breadcrumbs.length - 1 && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="w-4 h-4 mx-2 text-gray-500"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

