import { Suspense } from "react";
import Todos from "../components/Todos";

export default function TodoPage() {
    return (
        <Suspense fallback={<p>Loading database...</p>}>
            <Todos />
        </Suspense>
    )
}