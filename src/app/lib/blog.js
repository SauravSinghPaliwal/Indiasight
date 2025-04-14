// import matter from "gray-matter";

// // Manually import markdown files
// import post1 from '../../posts/llm-tutorial.mdx?raw';

// // You must use `?raw` to import the file as a string
// const allPosts = [
//   { slug: "post1", content: post1 },
// ];

// export function getSortedPostsData() {
//   return allPosts.map(({ slug, content }) => {
//     const { data } = matter(content);
//     return {
//       slug,
//       ...data,
//     };
//   }).sort((a, b) => new Date(b.date) - new Date(a.date));
// }

// export function getPostBySlug(slug) {
//   const post = allPosts.find((p) => p.slug === slug);
//   const { data, content } = matter(post.content);
//   return {
//     slug,
//     ...data,
//     content,
//   };
// }
