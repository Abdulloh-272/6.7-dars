document.addEventListener("DOMContentLoaded", () => {
  async function asyncData() {
    try {
      const url = "https://jsonplaceholder.typicode.com/comments";
      let response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      domUi(data);
    } catch (err) {
      console.log(err);
    }
  }

  asyncData();
});

function domUi(comments) {
  comments.forEach((comment) => {
    const wrap = document.querySelector(".wrapper");
    const name = document.createElement("h2");
    const email = document.createElement("h3");
    const id = document.createElement("h4");
    const body = document.createElement("p");
    const div = document.createElement("div");

    name.textContent = comment.name;
    email.textContent = comment.email;
    id.textContent = comment.id;
    body.textContent = comment.body;
    div.append(id, name, email, body);
    wrap.appendChild(div);
    name.classList.add("text-xl", "text-white", "mt-2");
    id.classList.add("text-xl", "text-gray-700", "font-semibold");
    email.classList.add("text-xl", "text-white", "mt-2");
    body.classList.add("text-xl", "text-white", "mt-2");

    div.classList.add(
      "bg-cyan-400",
      "w-[500px]",
      "h-[300px]",
      "rounded-lg",
      "shadow-xl",
      "shadow-gray-400",
      "text-center",
      "flex",
      "flex-col",
      "justify-center",
      "px-5"
    );
  });
}
