/** server/uploadthing.ts */
import type { NextApiRequest, NextApiResponse } from "next";

import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing();

const auth = () => ({ id: "fakeId" }); // Fake auth function

export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
        // Set permissions and file types for this FileRoute
        .middleware(async () => {
            const user = await auth();
            if (!user) throw new Error("Unauthorized");
            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            const uesr = await metadata.userId;
            console.log("Upload complete for userId:", metadata.userId);
            console.log("file url", file.url);
            console.log("userId:", uesr);

        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;