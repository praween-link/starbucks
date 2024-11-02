/*
const blogData = [
    {
        title: 'First Blog Post',
        date: 'January 1, 2022',
        content: 'this is content of the first blog page.'
    },
    {
        title: 'Second Blog Post',
        date: 'February 1, 2022',
        content: 'This is the content of the second blog post.'
    },
    {
        title: 'Third Blog Post',
        date: 'March 1, 2022',
        content: 'This is the content of the third blog post.'
    }
];
//Create your function here with the name addBlog which takes a blog object as parameter

function addBlog(blog) {
    let blogListSelected = document.querySelector('.blog-list');

    let { title, date, content } = blog;

    // const itemLi = document.createElement("li");

    // --blog post card
    const blogItem = document.createElement('div');
    blogItem.className = 'blog-post';
    // --add
    // itemLi.appendChild(blogItem);

    // --blog header
    const blogHeader = document.createElement('div');
    blogHeader.className = 'blog-header';
    // --add
    blogItem.appendChild(blogHeader);

    // --blog title
    const blogTitle = document.createElement('h2');
    blogTitle.className = 'blog-title';
    blogTitle.textContent = title;
    // --blog date
    const blogDate = document.createElement('p');
    blogDate.className = 'blog-date';
    blogDate.textContent = date;
    // --add
    blogHeader.appendChild(blogTitle);
    blogHeader.appendChild(blogDate);

    // --blog content
    const blogContent = document.createElement('p');
    blogContent.className = 'blog-content';
    blogContent.textContent = content;
    // --add
    blogItem.appendChild(blogContent);

    // return blogItem;
    blogListSelected.appendChild(blogItem);
}

//Call each object present in blogData with addBlog.
blogData.forEach(blog => addBlog(blog));

//If page does not update the changes automatically please refresh

*/
/// ====================================================================================
//complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');


    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
    newBox.appendChild(newBlogPost);


    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    var x = newBlogPost.appendChild(newBlogContent);
    console.log(`x==> ${x}`);

    // create a new div with className blog-buttons and append it to newBox

    const newBlogButtons = document.createElement('div');
    newBlogButtons.classList.add('blog-buttons');
    newBox.appendChild(newBlogButtons);

    //Create moveup button with class blog-button and move-up
    const newBlogButton1 = document.createElement('div');
    newBlogButton1.classList.add('blog-button');
    const newMoveUpBtn = document.createElement('move-up');
    newMoveUpBtn.textContent = "Move Up";
    newBlogButton1.appendChild(newMoveUpBtn);
    newBlogButtons.appendChild(newBlogButton1);
    //Add event listerner to moveup button
    newBlogButton1.addEventListener('click', moveUpBlog);

    //Create movedown button with class blog-button and move-down
    const newBlogButton2 = document.createElement('div');
    newBlogButton2.classList.add('blog-button');
    const newMoveDownBtn = document.createElement('move-down');
    newMoveDownBtn.textContent = "Move Down";
    newBlogButton2.appendChild(newMoveDownBtn);
    newBlogButtons.appendChild(newBlogButton2);
    //Add event listerner to movedown button
    newBlogButton2.addEventListener('click', moveDownBlog);


    //Create delete button with class blog-button and delete
    const newBlogButton3 = document.createElement('div');
    newBlogButton3.classList.add('blog-button');
    const newDeleteBtn = document.createElement('delete');
    newDeleteBtn.textContent = "Delete";
    newBlogButton3.appendChild(newDeleteBtn);
    newBlogButtons.appendChild(newBlogButton3);
    //Add event listerner to delete button
    newBlogButton3.addEventListener('click', deleteBlog);

    blogList.appendChild(newBox);

    // Add event listeners to the buttons
    function deleteBlog() {
        console.log("Delete Blog!");
        blogList.removeChild(newBox);
    }
    function moveUpBlog() {
        console.log("Move Up Blog!");
        // blogList.insertBefore(newBox, blogList.children[0]);
        blogList.insertBefore(newBox, blogList.firstChild);
    }
    function moveDownBlog() {
        console.log("Move Down Blog!");
        blogList.appendChild(newBox);
    }
}

const blogData = [
    {
        title: 'First Blog Post',
        date: 'January 1, 2022',
        content: 'This is the content of the first blog post.'
    },
    {
        title: 'Second Blog Post',
        date: 'February 1, 2022',
        content: 'This is the content of the second blog post.'
    },
    {
        title: 'Third Blog Post',
        date: 'March 1, 2022',
        content: 'This is the content of the third blog post.'
    }
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array