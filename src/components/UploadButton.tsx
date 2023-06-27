import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "~/server/uploadthing";


export default function UploadButtonPage({ setThumbnail, setUploadError, setImages }: { setThumbnail: string | any, setUploadError: string | any, setImages: [] | any }) {

    return (
        <main className="flex  w-full max-w-xl">
            <UploadButton<OurFileRouter>
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    if (res) {
                        setThumbnail(res[0]?.fileUrl)
                        setImages(res.map(image => image.fileUrl))
                        setUploadError('')
                    }
                }}
                onUploadError={(error: Error) => {
                    setUploadError(error.message)
                }}
            />

        </main>
    );
}