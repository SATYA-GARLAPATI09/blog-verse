function BlogPost({ Author, Title, Content }) {
  return (
    <div className="blog-post">
      <p>Author: {Author}</p>
      <p>Title: {Title}</p>
      <p>Content: {Content}</p>
    </div>
  );
}
export default BlogPost;
