function readmore() {
  const post = document.getElementById("firstpost");
  const link = document.querySelector(".link");
  if (post.style.display === "none" || post.style.display === "") {
    post.style.display = "block";
    link.textContent = "Read Less";
  } else {
    post.style.display = "none";
    link.textContent = "Read more";
  }
}

function getblog() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title.trim() === "" || content.trim() === "") {
    alert("Both fields are required.");
    return;
  }

  const newblog = { title, content };
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  blogs.push(newblog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  display();
}
function display() {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const container = document.querySelector(".left-content");
  container.innerHTML = "";

  blogs.forEach((blog, index) => {
    const post = document.createElement("section");
    post.className = "blog-post";

    // Add HTML content
    post.innerHTML = `
      <h2>${blog.title}</h2>
      <p>${blog.content}</p>
      <i class="fas fa-heart"></i>
    `;

    
    container.appendChild(post);
  });
}



window.onload = display;
