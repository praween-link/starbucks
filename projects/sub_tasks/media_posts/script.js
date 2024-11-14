// Define the post1 object with the given details.
// let post1 = {
//     id: 1,
//     author: 'John',
//     content: 'My first Post!',
//     likes: 10,
//     comments: ['Great post!', 'Nice photo!'],
//     image: 'https://files.codingninjas.in/image2-28694.jpg'
// };

// let likedPost = false;


// function renderPosts(post1) {
//     const postsContainer = document.getElementById("posts");
//     // postsContainer.innerHTML = "";

//     // Iterate over each item in the postsData array using a forEach loop with a parameter
//     // Inside the loop, use the parameter to create and populate elements for each post
//     // Replace 'post1' with the parameter name to access each post's properties like author, content etc. 

//     const postElement = document.createElement("div");
//     postElement.classList.add("post");

//     const authorElement = document.createElement("h3");
//     authorElement.textContent = post1.author;

//     const contentElement = document.createElement("p");
//     contentElement.textContent = post1.content;

//     const imageElement = document.createElement("img");
//     imageElement.src = post1.image;
//     imageElement.alt = "Post Image";

//     const likeButton = document.createElement("button");
//     likeButton.textContent = `Like`;
//     likeButton.classList.add("like-button");
//     likeButton.addEventListener("click", () => {
//         if (!likedPost) {
//             post1.likes++;
//             likedPost = true;
//             likeButton.disabled = true;
//             likeButton.style.backgroundColor = 'red';
//             postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
//         }
//     });

//     const commentInput = document.createElement("input");
//     commentInput.type = "text";
//     commentInput.placeholder = "Write a comment...";

//     const commentButton = document.createElement("button");
//     commentButton.textContent = "Comment";
//     commentButton.classList.add("comment-button");
//     commentButton.addEventListener(
//         "click",
//         () => {
//             post1.comments.push(commentInput.value);
//             const commentElement = document.createElement("p");
//             commentElement.textContent = commentInput.value;
//             commentsContainer.appendChild(commentElement);

//             commentInput.value = "";
//             postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
//         },
//         { once: true }
//     );

//     const postFooter = document.createElement("div");
//     postFooter.classList.add("post-footer");
//     postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;

//     const commentsContainer = document.createElement("div");
//     commentsContainer.classList.add("comments-container");
//     commentsContainer.style.display = "none";

//     post1.comments.forEach((comment) => {
//         const commentElement = document.createElement("p");
//         commentElement.textContent = comment;
//         commentsContainer.appendChild(commentElement);
//     });

//     postElement.appendChild(authorElement);

//     postElement.appendChild(imageElement);
//     postElement.appendChild(contentElement);
//     postElement.appendChild(likeButton);
//     postElement.appendChild(commentInput);
//     postElement.appendChild(commentButton);
//     postElement.appendChild(postFooter);
//     postElement.appendChild(commentsContainer);

//     postFooter.addEventListener("click", () => {
//         if (commentsContainer.style.display === "none") {
//             commentsContainer.style.display = "block";
//         } else {
//             commentsContainer.style.display = "none";
//         }
//     });

//     postsContainer.appendChild(postElement);
// }

// renderPosts(post1);

// const { id, author, content, likes, comments, image } = post1;

// let likedByMe = false;

// // Function to render the post1 object on the screen.
// function renderPosts() {
//     // Get the container where the post will be added.
//     const newElePost = document.createElement('div');

//     // Clear any existing content in the posts container.
//     const elePosts = document.getElementById("posts");

//     // Create a new div element for the post and set its class.
//     newElePost.className = "post";

//     // Create an h3 element for the author's name and set its text content.
//     const newEleAuthorName = document.createElement('h3');
//     newEleAuthorName.textContent = author;
//     newElePost.appendChild(newEleAuthorName);

//     // Create an img element for the post's image and set its source and alt text.
//     const newEleImage = document.createElement('img');
//     newEleImage.src = image;
//     newElePost.appendChild(newEleImage);

//     // Create a p element for the post's content and set its text content.
//     const newEleContext = document.createElement('p');
//     newEleContext.textContent = content;
//     newElePost.appendChild(newEleContext);

//     // Create a button element for "Like" and set its text content.
//     const newEleLikeBtn = document.createElement('button');
//     newEleLikeBtn.textContent = "Like 👍";
//     newElePost.appendChild(newEleLikeBtn);

//     // Create an input element for writing comments and set its type and placeholder.
//     const newEleCommentInput = document.createElement('input');
//     newEleCommentInput.placeholder = "Write a comment";
//     newElePost.appendChild(newEleCommentInput);

//     // Create a button element for "Comment" and set its text content.
//     const newEleCommentBtn = document.createElement('button');
//     newEleCommentBtn.textContent = "Comment";
//     newElePost.appendChild(newEleCommentBtn);

//     // Create a div element for the post footer and set its class and text content.
//     const newEleFooter = document.createElement('div');
//     newEleFooter.className = 'post-footer';

//     const newEleLikesCount = document.createElement('span');
//     const newEleCommentsCount = document.createElement('span');

//     newEleLikesCount.textContent = `Likes: ${likes}`;
//     newEleCommentsCount.textContent = `Comments: ${comments.length}`;
//     newEleCommentsCount.style.marginLeft = '8px';

//     newEleFooter.appendChild(newEleLikesCount);
//     newEleFooter.appendChild(newEleCommentsCount);
//     newElePost.appendChild(newEleFooter);

//     // Create a div element for the comments container and set its class.
//     const newEleComments = document.createElement('div');
//     newEleComments.className = 'comments-container';
//     newElePost.appendChild(newEleComments);
//     // Initially, set its display style to 'none' to hide it.
//     newEleComments.style.display = 'none';

//     newEleCommentsCount.style.cursor = "pointer";
//     newEleCommentsCount.addEventListener('click', function () {
//         console.log("comment hide and show");
//         if (newEleComments.style.display == 'none') {
//             newEleComments.style.display = 'inline-block';
//         } else {
//             newEleComments.style.display = 'none';
//         }
//     });

//     // Likes increment
//     newEleLikeBtn.addEventListener('click', function () {
//         likedByMe = !likedByMe;

//         post1.likes = likedByMe ? (post1.likes + 1) : (post1.likes - 1);
//         // newEleLikeBtn.style.backgroundColor = likedByMe ? 'blue' : 'white';
//         newEleLikeBtn.style.color = likedByMe ? 'blue' : 'black';
//         newEleLikesCount.textContent = `Likes: ${post1.likes}`;
//     });

//     // Add comments
//     newEleCommentBtn.addEventListener('click', function () {
//         if (newEleCommentInput.value.trim()) {
//             post1.comments.push(newEleCommentInput.value);
//             refreshComments(post1.comments);
//             newEleCommentsCount.textContent = `Comments: ${post1.comments.length}`;
//             newEleCommentInput.value = "";
//         }
//     }, { once: true });

//     // For each comment in the comments array, create a p element and append it to the comments container.
//     function refreshComments(comments) {
//         newEleComments.innerHTML = "";
//         if (comments.length == 0) {
//             const newEleComment = document.createElement('p');
//             newEleComment.textContent = "no comments";
//             newEleComments.appendChild(newEleComment);
//         } else {
//             comments.forEach((text) => {
//                 const newEleComment = document.createElement('p');
//                 newEleComment.textContent = text;
//                 newEleComments.appendChild(newEleComment);
//             });
//         }
//     }
//     refreshComments(comments);

//     // Append all created elements to the post container.


//     // Add a click event listener to toggle the visibility of commentsContainer.


//     // Append the post element to the posts container.
//     elePosts.appendChild(newElePost);
// }

// // Call the renderPosts function to display the post on the screen.
// renderPosts();

/*
// The code given below is for one object refactor the code it for using the JSON Data.
let postsData = [
    {
        id: 1,
        author: "John",
        content: "Hello, Instagram!",
        likes: 10,
        comments: ["Great post!", "Nice photo!"],
        image: "https://files.codingninjas.in/image2-28694.jpg",
    },
    {
        id: 2,
        author: "Jane",
        content: "This is a great post!",
        likes: 15,
        comments: [],
        image: "https://files.codingninjas.in/oip-28704.jpg",
    },
    {
        id: 3,
        author: "Alice",
        content: "Another post",
        likes: 8,
        comments: [],
        image: "https://files.codingninjas.in/th-2-28706.jpg",
    },
    {
        id: 4,
        author: "Bob",
        content: "Check out this photo!",
        likes: 20,
        comments: [],
        image: "https://files.codingninjas.in/image1-28708.jpg",
    },
];

// Create a new Set and store it in a varibale name "likedPosts" to keep track of post IDs that have been liked
// This ensures that each post can be liked only once, and allows for quick lookup of liked posts
let likedPosts = new Set([]);


function renderPosts(post1) {
    const postsContainer = document.getElementById("posts");
    // postsContainer.innerHTML = "";

    // Iterate over each item in the postsData array using a forEach loop with a parameter
    // Inside the loop, use the parameter to create and populate elements for each post
    // Replace 'post1' with the parameter name to access each post's properties like author, content etc. 

    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const authorElement = document.createElement("h3");
    authorElement.textContent = post1.author;

    const contentElement = document.createElement("p");
    contentElement.textContent = post1.content;

    const imageElement = document.createElement("img");
    imageElement.src = post1.image;
    imageElement.alt = "Post Image";

    const likeButton = document.createElement("button");
    likeButton.textContent = `Like`;
    likeButton.classList.add("like-button");
    likeButton.addEventListener("click", () => {
        if (!likedPosts.has(post1.id)) {
            likePost(post1.id);
            likedPosts.add(post1.id);
            likeButton.disabled = true; // Disable the button after clicking
            //Change the background color of the button to red for all liked posts
            likeButton.style.backgroundColor = 'red';
            // Hint: You might need to iterate through the likedPosts Set and update button styles
            postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
        }
    });

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Write a comment...";

    const commentButton = document.createElement("button");
    commentButton.textContent = "Comment";
    commentButton.classList.add("comment-button");
    // Update the addComment function to take the current post's id and the comment input value as arguments
    commentButton.addEventListener(
        "click",
        () => {
            addComment(commentInput.value, post1.id);
            const commentElement = document.createElement("p");
            commentElement.textContent = commentInput.value;
            commentsContainer.appendChild(commentElement);

            commentInput.value = "";
            postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;
        },
        { once: true }
    );

    const postFooter = document.createElement("div");
    postFooter.classList.add("post-footer");
    // Update the text content to reflect the current post's likes and comments using the loop parameter
    postFooter.textContent = `Likes: ${post1.likes}   Comments: ${post1.comments.length}`;

    const commentsContainer = document.createElement("div");
    commentsContainer.classList.add("comments-container");
    commentsContainer.style.display = "none";

    post1.comments.forEach((comment) => {
        const commentElement = document.createElement("p");
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });

    postElement.appendChild(authorElement);

    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);

    postFooter.addEventListener("click", () => {
        if (commentsContainer.style.display === "none") {
            commentsContainer.style.display = "block";
        } else {
            commentsContainer.style.display = "none";
        }
    });

    postsContainer.appendChild(postElement);
}

// Function to handle post liking
function likePost(id) {
    // 1. Find the post in the postsData array by its ID
    // 2. Increment the likes count for the found post
    // 3. Re-render the posts to reflect the updated likes count
    // Hint: You might need to pass a postId parameter to identify which post to like
    let post1 = postsData.find((post) => post.id == id);
    post1.likes++;
    // renderPosts(post1);
}

// Function to handle adding a comment
function addComment(comment, id) {
    // 1. Find the post in the postsData array by its ID
    // 2. Add the new comment to the comments array of the found post
    // 3. Re-render the posts to reflect the updated comments
    // Hint: You might need to pass a postId parameter to identify which post to add the comment to
    let post1 = postsData.find((post) => post.id == id);
    post1.comments.push(comment);

    // renderPosts();
}

postsData.forEach((post) => {
    renderPosts(post);
});

*/


////-----------------------------------
//for the given scaffold create event Listener and handler for the form.


let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
];
const likedPosts = new Set();
function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    postsData.forEach((post) => {
        postWidget(post, postsContainer);
    });
}

function postWidget(post, postsContainer) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const authorElement = document.createElement('h3');
    authorElement.textContent = post.author;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    const imageElement = document.createElement('img');
    imageElement.src = post.image;
    imageElement.alt = 'Post Image';

    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');
    likeButton.addEventListener('click', () => {
        if (!likedPosts.has(post.id)) {
            likePost(post.id);
            likedPosts.add(post.id);
            likeButton.disabled = true;
            for (let ind of likedPosts) {
                const button = document.querySelectorAll('.like-button')[ind - 1];
                button.style.backgroundColor = 'red';

            }
        }
    });

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button');
    commentButton.addEventListener('click', () => {
        addComment(post.id, commentInput.value);
        commentInput.value = '';
    });

    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none';

    post.comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });

    postElement.appendChild(authorElement);

    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);

    postFooter.addEventListener('click', () => {
        if (commentsContainer.style.display === 'none') {
            commentsContainer.style.display = 'block';
        } else {
            commentsContainer.style.display = 'none';
        }
    });

    postsContainer.appendChild(postElement);
}

// Function to handle post liking
function likePost(postId) {
    const post = postsData.find(post => post.id === postId);
    if (post) {
        post.likes++;
        renderPosts();
    }
}

// Function to handle adding a comment
function addComment(postId, comment) {
    const post = postsData.find(post => post.id === postId);
    if (post) {
        post.comments.push(comment);
        renderPosts();
    }
}

// Create your function here to handle post creation and adding Post to the postsData.
function createPost() {
    const postInput = document.getElementById("postInput");
    const imageInput = document.getElementById("imageInput");
    console.log(postInput.value);
    console.log(imageInput.value);
    var newpost = { id: postsData[postsData.length - 1].id + 1, author: 'Praween', content: postInput.value, likes: 0, comments: [], image: `img/${imageInput.value.split('\\')[imageInput.value.split('\\').length - 1]}` };
    postsData.push(newpost);
    const postsContainer = document.getElementById('posts');
    postWidget(newpost, postsContainer);
}

// Add Event listeners to listen to the submit event of the form.
const addPostForm = document.getElementById('postForm');
addPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createPost();
});

// Initial rendering                      
renderPosts();
