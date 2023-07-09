import Link from "next/link";
import SEO from "~/components/SEO";

export default function Custom404() {
    return (
        <div className="w-full max-w-md h-[65vh] flex flex-col justify-center items-baseline mx-auto space-y-5  ">
            <SEO title="Not Found Page" desc="Not Found Page" />
            <h1 className="uppercase text-start text-5xl md:text-4xl ">Page Not Found</h1>
            <div className="text-start text-2xl space-y-2 text-gray-500 md:text-xl ">
                <p >We looked everywhere for this page.</p>
                <p>Are you sure the website url is correct?</p>
                <p> Get in touch with site owner.</p>
            </div>
            <Link href="/" className="border w-full max-w-sm text-center p-4 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-500">Go Back</Link>
        </div>
    )
}