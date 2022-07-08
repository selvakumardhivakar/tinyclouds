import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Dhivakar Selvakumar",
  author: "Dhivakar Selvakumar",
  avatar: "./ry.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:selvakumardhivakar@gmail.com" },
    { title: "GitHub", url: "https://github.com/selvakumardhivakar" },
  ],
  background: "#f9f9f9",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
