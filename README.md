# Movie-Recommendation-System

1. First, we store all movie data in a structured format, typically a JSON file (e.g., data.json). Each movie entry contains information like:
Title
Genre
Duration
Mood
Description
Image URL

2. The app allows the user to choose their movie preferences using three dropdown menus:
Genre: What type of movie do they want (e.g., Comedy, Horror, Drama)?
Mood: What type of mood are they in (e.g., Relaxed, Adventurous, Sad)?
Duration: How long do they want the movie to be (e.g., Short, Medium, Long)?
When the user selects their preferences, these values are stored temporarily in a formData object.

3. Event Listener: Button Click Event Listener
Instead of automatically filtering the movies when the user selects an option from the dropdowns, the app now uses a button click event listener. The user first selects their preferences for Genre, Mood, and Duration, and then clicks the "Get Recommendation" button to trigger the movie recommendation process.

4. Displaying Recommendations
If a match is found, the app updates the HTML to display the movie details (title, genre, description, etc.) in a recommendation card. This is done by dynamically updating the innerHTML of the recommendation div with the movie information.



