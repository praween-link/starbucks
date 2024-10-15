//Do not alter the starter code.
function main() {
    let document = 90;
    console.log(document);
    //Create your class "User" here with all the properties and methods
    class User {
        constructor(name, email, password) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.posts = [];
        }
        get getName() { return this.name; }
        get getEmail() { return this.email; }
        get getPassword() { return this.password; }
        set setName(name) { this.name = name; }
        set setEmail(email) { this.email = email; }
        set setPassword(password) { this.password = password; }


        addPost(post) {
            this.posts.push(post);
        }
        deletePost(post) {
            const x = this.posts.filter(p => p.title !== post.title);
            this.posts = [...x];
        }
        displayPosts() {
            console.log(`${this.posts.map((p) => ` ${p.title}`)}`);
        }
    }

    //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
    class Post extends User {
        constructor(name, email, password, title, content, date) {
            super(name, email, password);
            this.title = title;
            this.content = content;
            this.date = date;
            this.likeCount = 0;
        }
        get getTitle() { return this.title; }
        get getContent() { return this.content; }
        get getDate() { return this.date; }
        set setTitle(title) { this.title = title; }
        set setContent(content) { this.content = content; }
        set setDate(date) { this.date = date; }

        get getLikeCount() { return this.likeCount; }

        addLike() {
            this.likeCount++;
        }
        displayDetails() {
            console.log(`Owner: ${this.name}\nTitle: ${this.title}\nContent: ${this.content}\nDate: ${this.date}\nLikes: ${this.likeCount}`);
        }
    }

    const user1 = new User("John", "john@example.com", "password123");

    const post1 = new Post(
        "John",
        "john@example.com",
        "password123",
        "My first post",
        "Lorem ipsum dolor sit amet",
        "2021-01-01"
    );
    console.log(post1.likeCount);
    const post2 = new Post(
        "John",
        "john@example.com",
        "password123",
        "My second post",
        "Consectetur adipiscing elit",
        "2021-01-02"
    );

    user1.addPost(post1);
    user1.addPost(post2);

    post1.addLike();
    post1.addLike();

    user1.deletePost(post1);
    user1.displayPosts();
    // Output:
    // Posts by John:
    // - My first post
    // - My second post

    post1.displayDetails();
    // Output:
    // Owner: John
    // Title: My first post
    // Content: Loremipsum dolor sit amet
    // Date: 2021-01-01
    // Likes: 2
    return { User, Post };
}
main();