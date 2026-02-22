import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return response.data;
};

const logThreePosts = (): void => {
  fetchPosts().then((posts) =>
    posts.forEach((post, index) => {
      if (index <= 2) {
        console.log(`Title: ${post.title}\nText: ${post.body}`);
      }
    }),
  );
};

logThreePosts();

// interface searchedPost {
//   title: string;
//   text: string;
// }

// const logThreePosts = () => {
//   const threePosts: searchedPost[] = [];
//   fetchPosts().then((posts) =>
//     posts.forEach((post, index) => {
//       if (index <= 2) {
//         threePosts.push({ title: post.title, text: post.body });
//       }
//     }),
//   );
//   return threePosts;
// };

// console.log(logThreePosts());
