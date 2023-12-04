export function fetchBlog() {
    return new Promise(async(resolve) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    resolve({ data });
});
}
