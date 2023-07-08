import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function User() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return (
            <div className="bg-black w-16 h-10 rounded-full" />

        )
    }

    if (status === "unauthenticated") {
        return <button onClick={() => signIn()} className="btn  btn-primary">Login</button>
    }

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Image src={session?.user.image as string} width={500} height={500} priority alt={session?.user.name as string} />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <h2>{session?.user.name}</h2>
                </li>
                <li><Link href="/dashboard/products">Dashboard</Link></li>
                <li><button onClick={() => signOut()}>Logout</button></li>
            </ul>
        </div>
    )
}