let btn = document.querySelector(".btn");
let genre = document.getElementById("genre");
let duration = document.getElementById("duration");
let mood = document.getElementById("mood");
// let recommendation = document.getElementById("recommendation");

const formData = {
  genre: "",
  duration: "",
  mood: "",
};

function showRecommendations(filteredMovies) {
  const recommendationDiv = document.getElementById("recommendation");

  if (filteredMovies.length === 0) {
    recommendationDiv.innerHTML = "<p>No matching movies found.</p>";
    recommendationDiv.classList.remove("hidden");
  } else {
    const html = filteredMovies.map((movie) => {
      return `
             <div class="recommendation-card">
        <div class="recommendation-content">
          <div class="image-container">
            <img
              src="${movie.imageUrl}"
              alt="${movie.title}"
              class="movie-image"
            />
          </div>
          <div class="movie-info">
            <h2 class="movie-title">
              ${movie.title}
            </h2>
            <div class="tags">
              <span class="tag genre-tag">
                ${movie.genre}
              </span>
              <span class="tag duration-tag">
                ${movie.duration}
              </span>
              <span class="tag mood-tag">
                ${movie.mood}
              </span>
            </div>
            <p class="description">
              ${movie.description}
            </p>
          </div>
        </div>
      </div>
          `;
    });

    recommendationDiv.innerHTML = html;
    recommendationDiv.classList.remove("hidden");
  }
}

const filterMovies = () => {
  const filteredMovie = movies.filter((movie) => {
    const matchesGenre = formData.genre ? movie.genre === formData.genre : true;
    const matchesDuration = formData.duration
      ? movie.duration === formData.duration
      : true;
    const matchesMood = formData.mood ? movie.mood === formData.mood : true;
    return matchesGenre && matchesDuration && matchesMood;
  });
  showRecommendations(filteredMovie);
};

btn.addEventListener("click", () => {
  formData.genre = genre.value;
  formData.duration = duration.value;
  formData.mood = mood.value;
  filterMovies();
});

const movies = [
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    duration: "Medium",
    mood: "Happy",
    description:
      "A quirky comedy film with a runtime of 99 minutes, perfect for a happy mood. This visually stunning adventure follows the exploits of a legendary hotel concierge and his trusted lobby boy.",
    imageUrl:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Inception",
    genre: "Sci-Fi",
    duration: "Long",
    mood: "Adventurous",
    description:
      "A mind-bending sci-fi thriller that takes you on an incredible journey through dreams within dreams. Perfect for those seeking an adventurous escape.",
    imageUrl:
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Before Sunset",
    genre: "Drama",
    duration: "Short",
    mood: "Relaxed",
    description:
      "A beautiful, dialogue-driven film that unfolds in real-time as two people reconnect in Paris. Perfect for a relaxed evening of thoughtful entertainment.",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    duration: "Medium",
    mood: "Excited",
    description:
      "An adrenaline-pumping action spectacle that keeps you on the edge of your seat. Perfect for when you're in the mood for high-octane entertainment.",
    imageUrl:
      "https://images.unsplash.com/photo-1508435234994-67cfd7690508?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "A Quiet Place",
    genre: "Horror",
    duration: "Medium",
    mood: "Adventurous",
    description:
      "A unique and tense horror film that will keep you holding your breath. Perfect for those seeking thrills and innovative storytelling.",
    imageUrl:
      "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Toy Story (1995)",
    genre: "Comedy",
    duration: "Short",
    mood: "Happy",
    description:
      "A heartwarming story of a toy cowboy and an astronaut action figure who must learn to coexist in a world where toys come to life when no one is looking.",
    imageUrl:
      "https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRveSUyMHN0b3J5fGVufDB8fDB8fHww",
  },
  {
    title: "Toy Story 2 (1999)",
    genre: "Comedy",
    duration: "Medium",
    mood: "Happy",
    description:
      "The toys are back in action as Woody gets kidnapped by a toy collector, and Buzz and the gang must save him. A deeper dive into themes of friendship and loyalty.",
    imageUrl:
      "https://wallpapers.com/images/hd/toy-story-2-blue-sky-0kocuyzuwtq4ksng.jpg",
  },
  {
    title: "Toy Story 3 (2010)",
    genre: "Comedy",
    duration: "Long",
    mood: "Happy",
    description:
      "The toys face their biggest challenge when Andy prepares to leave for college. They find themselves in a daycare where they must escape from dangerous toys and find their way home.",
    imageUrl:
      "https://www.originalfilmart.com/cdn/shop/products/toy_story_3_2010_british_quad_original_film_art_a_240x.jpg?v=1586095442",
  },
  {
    title: "Toy Story 4 (2019)",
    genre: "Comedy",
    duration: "Medium",
    mood: "Happy",
    description:
      "Woody, Buzz Lightyear, and the gang are back for an unexpected adventure when a new toy named Forky joins the group and is lost during a road trip.",
    imageUrl:
      "https://www.shutterstock.com/image-photo/bangkok-thailand-jun-17-2019-260nw-1426658111.jpg",
  },
  {
    title: "Finding Nemo (2003)",
    genre: "Drama",
    duration: "Medium",
    mood: "Happy",
    description:
      "A clownfish named Marlin embarks on a journey across the ocean to rescue his son, Nemo. Along the way, he makes new friends and faces new challenges.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRni3eq24AumET3VXLNA8j0iUEPG0l4mI6bjA&s",
  },
  {
    title: "Monsters, Inc. (2001)",
    genre: "Comedy",
    duration: "Medium",
    mood: "Happy",
    description:
      "Monsters Sulley and Mike are top scare-team workers at Monsters, Inc. But when a human child accidentally enters their world, chaos ensues, and they must find a way to return the child home safely.",
    imageUrl:
      "https://image.tmdb.org/t/p/original/dbCbexfNY1P1z0InxKA6EC0nrMg.jpg",
  },
];
