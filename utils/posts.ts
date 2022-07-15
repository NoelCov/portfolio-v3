import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// This is creates the path for the blogs folder
// Process.cwd() returns the current working directory
const postsDirectory = path.join(process.cwd(), "blogs");

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames: string[] = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        // /blogs/firstblog.md
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        // This returns and obj with a data section and a content section
        // More info https://github.com/jonschlinkert/gray-matter
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as {
                date: string;
                title: string;
                summary: string;
            }),
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export const getAllPostsIds = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
};

export const getPostData = async (id: string) => {
    // Get the path for a specific post
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert md into HTML string
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();


    return {
        id,
        contentHtml,
        ...(matterResult.data as {
            date: string;
            title: string;
            summary: string;
        }),
    };
};
