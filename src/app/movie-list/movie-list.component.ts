import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  constructor(private router: Router) {}

  // movies = [
  //   { id: 1, name: 'Inception', director: 'Christopher Nolan', year: 2010, hero: 'Leonardo DiCaprio', heroine: 'Marion Cotillard', plot: 'A skilled thief, Dom Cobb, enters people\'s dreams to steal secrets, but he must now plant an idea in someone\'s mind.', image:'assets/images/inception.jpg'},
  //   { id: 2, name: 'Interstellar', director: 'Christopher Nolan', year: 2014, hero: 'Matthew McConaughey', heroine: 'Anne Hathaway', plot: 'A group of astronauts travel through a wormhole in search of a new home for humanity.',image:'assets/images/interstellar.jpg' },
  //   { id: 3, name: 'The Dark Knight', director: 'Christopher Nolan', year: 2008, hero: 'Christian Bale', heroine: 'Maggie Gyllenhaal', plot: 'Batman faces the Joker, a criminal mastermind who seeks to create chaos in Gotham City.',image:'assets/images/dark-knight.jpeg' },
  //   { id: 4, name: 'Avatar', director: 'James Cameron', year: 2009, hero: 'Sam Worthington', heroine: 'Zoe Saldana', plot: 'A paraplegic marine is sent to an alien planet and becomes part of the native tribe, leading a resistance against human invasion.',image:'assets/images/avatar.jpg' },
  //   { id: 5, name: 'Titanic', director: 'James Cameron', year: 1997, hero: 'Leonardo DiCaprio', heroine: 'Kate Winslet', plot: 'A love story unfolds between a poor artist and an aristocratic woman aboard the ill-fated Titanic.',image:'assets/images/titanic.jpeg' },
  //   { id: 6, name: 'Iron Man', director: 'Jon Favreau', year: 2008, hero: 'Robert Downey Jr.', heroine: 'Gwyneth Paltrow', plot: 'Tony Stark, a billionaire genius, builds a powerful suit to fight crime and becomes Iron Man.',image:'assets/images/ironman.jpg' },
  //   { id: 7, name: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999, hero: 'Keanu Reeves', heroine: 'Carrie-Anne Moss', plot: 'A hacker discovers that the world he lives in is a simulated reality controlled by machines.',image:'assets/images/matrix.jpeg' },
  //   { id: 8, name: 'The Godfather', director: 'Francis Ford Coppola', year: 1972, Hero: "Marlon Brando & Al Pacino", Heroine: "Diane Keaton", Plot:"Michael Corleone rises as the ruthless mafia leader after his father’s attack.", image: 'assets/images/the-godfather.jpg' }
    
  // ];
  movies = [
    { id: 1, name: 'Inception' , image:'assets/images/inception.jpg'},
    { id: 2, name: 'Interstellar',image:'assets/images/interstellar.jpg' },
    { id: 3, name: 'The Dark Knight',image:'assets/images/dark-knight.jpeg' },
    { id: 4, name: 'Avatar',image:'assets/images/avatar.jpg' },
    { id: 5, name: 'Titanic',image:'assets/images/titanic.jpeg' },
    { id: 6, name: 'Iron Man',image:'assets/images/ironman.jpg' },
    { id: 7, name: 'The Matrix',image:'assets/images/matrix.jpeg' },
    { id: 8, name: 'The Godfather', image: 'assets/images/the-godfather.jpg' }
    
  ];

  goToSearch() {
    this.router.navigate(['/search']);  //  Navigate to Search Page
  }

  viewDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }

  goToHome() {
    this.router.navigate(['/']);  //  Navigates back to Home Page
  }
}

