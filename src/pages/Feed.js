import React, { Component } from "react";
import "./Feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";
import photo from "../assets/photo.jpg";

class Feed extends Component {
  state = {
    feeds: [],
    search: ""
  };

  componentDidMount() {
    const feeds = [
      {
        name: "Maykon Capellari",
        address: "Maringá",
        likes: 1000,
        image: "photos/photo1.jpg",
        description: "Parque do Japão - 2017",
        hashtags: ["#parquejapao", "#db1", "#top"]
      },
      {
        name: "Érika Capellari",
        address: "Maringá",
        likes: 9000,
        image: "photos/photo2.png",
        description: "React Top",
        hashtags: ["#react", "#instagram", "#top"]
      }
    ];
    setTimeout(() => {
      this.setState({ feeds: feeds });
    }, 3000);
  }

  onSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const pattern = RegExp(`(${this.state.search})`, "i");
    return (
      <section id="post-list">
        <input
          type="text"
          value={this.state.search}
          onChange={this.onSearchChange}
          placeholder="Pesquisar pelo nome"
        />
        {!this.state.feeds.length && <div id="loading">Loading...</div>}
        {this.state.feeds
          .filter(feed => feed.name.match(pattern))
          .map((feed, index) => (
            <article key={`feed_${index}`}>
              <header>
                <div className="user-info">
                  <span>{feed.name}</span>
                  <address>{feed.address}</address>
                </div>
                <img src={more} alt="Mais" />
              </header>
              <img src={`${window.location.href}${feed.image}`} alt="Foto" />
              <footer>
                <div className="actions">
                  <img src={like} alt="" />
                  <img src={comment} alt="" />
                  <img src={send} alt="" />
                </div>

                <strong>{feed.likes} curtidas</strong>

                <p>
                  {feed.description}
                  <span>{feed.hashtags.join(" ")}</span>
                </p>
              </footer>
            </article>
          ))}
      </section>
    );
  }
}

export default Feed;
