import { Dispatch, FC, SetStateAction } from 'react'
import "@uploadthing/react/styles.css";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "~/server/uploadthing";



interface UploadButtonProps {
    setThumbnail: Dispatch<SetStateAction<string | undefined>>
    setUploadError: Dispatch<SetStateAction<string | undefined>>
    setImages: Dispatch<SetStateAction<string[] | undefined>>
}

const UploadBtn: FC<UploadButtonProps> = ({ setThumbnail, setUploadError, setImages }) => {
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
    )
}

export default UploadBtn
