const user = {
  lastActivityTime: null,
  posts: [],
};

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date().toLocaleTimeString();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.posts.length > 0) {
        const deletedPost = user.posts.pop();
        resolve(deletedPost);
      } else {
        reject("No posts to delete");
      }
    }, 1000);
  });
}

// Example usage:
createPost("Post 1")
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("All posts:", user.posts);
    console.log("Last Activity Time:", user.lastActivityTime);
    return deleteLastPost();
  })
  .then((deletedPost) => {
    console.log("Deleted Post:", deletedPost);
    console.log("Updated Posts:", user.posts);
  })
  .catch((error) => {
    console.error(error);
  });
