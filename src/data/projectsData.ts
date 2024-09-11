import spotyclone from "../assets/spotyclone.jpg";
import cakes from "../assets/cakes.jpg";
import messages from "../assets/project-messages.jpg";
import game from "../assets/game.jpg";
import ticTacToe from "../assets/tic-tac-toe.jpg";
import NxN from "../assets/nxn.jpg";
import pool from "../assets/pool.png";
import session from "../assets/sessions.png";
import virus from "../assets/virus.jpeg";
import bidAnalizer from "../assets/crypt.jpg";

const PROJECT_DATA = [
  {
    number: "01",
    title: "Spotify Clone",
    description:
      "An application that allows users to play songs, create playlists, and access information about artists and genres. This project was developed using Ionic with Angular, mimicking the core functionalities of Spotify while providing a user-friendly interface.",
    img: spotyclone,
    linkTo: "https://github.com/enmarcm/SpotyFakeFrontEnd",
  },
  {
    number: "02",
    title: "Sales Management System with Messaging",
    description:
      "A comprehensive system designed to manage the sales operations of a business, specifically a cake shop. It includes features for managing sellers, zones, and income control. The system also facilitates messaging and calls between the administrator and sellers, ensuring smooth communication. This project was developed using React and NodeJS.",
    img: cakes,
    linkTo: "https://github.com/enmarcm/CakeShopManagerFrontend",
  },
  {
    number: "03",
    title: "Messaging Application Development",
    description:
      "A messaging application that includes state management, developed using React Native. This app allows users to send messages in real-time and manage their online presence, providing a seamless communication experience on mobile devices.",
    img: messages,
    linkTo: "https://github.com/enmarcm/ElixirMessengerFrontEnd",
  },
  {
    number: "04",
    title: "Platform Mini-Game",
    description:
      "A fun and engaging game created using vanilla JavaScript and the canvas object. The objective is to navigate through vertical platforms while defeating enemies. The game mechanics are simple yet addictive, providing an enjoyable experience for players of all ages.",
    img: game,
    linkTo: "https://github.com/enmarcm/VerticalPlatformerGame",
  },
  {
    number: "05",
    title: "Tic-Tac-Toe Game",
    description:
      "A classic Tic-Tac-Toe game developed using React. This project showcases the ability to create interactive web applications with a simple yet engaging user interface, allowing players to challenge each other in this timeless game.",
    img: ticTacToe,
    linkTo: "https://github.com/enmarcm/TicTacToe",
  },
  {
    number: "06",
    title: "NxN Equation Solver",
    description:
      "Developed with React, this application allows users to solve NxN equations using the Gauss-Jordan elimination method. It provides a user-friendly interface for inputting equations and displays the solutions clearly, making it a valuable tool for students and professionals alike.",
    img: NxN,
    linkTo: "https://github.com/enmarcm/GaussJordanSolver",
  },
  {
    number: "07",
    title: "Connection Pool (Without Libraries)",
    description:
      "A connection pool implemented in Java with PostgreSQL, developed without the use of external libraries. This system is capable of maintaining a minimum number of connections and managing them effectively, ensuring optimal performance and resource utilization.",
    img: pool,
    linkTo: "https://github.com/enmarcm/JavaConnectionPool",
  },
  {
    number: "08",
    title: "Session Management System",
    description:
      "Developed using NodeJS and Express Session, this project provides basic session management capabilities. It allows for the creation, storage, and retrieval of user sessions, ensuring a secure and efficient user experience.",
    img: session,
    linkTo: "https://github.com/enmarcm/NodeSessionComponent",
  },
  {
    number: "08",
    title: "Virus C#",
    description:
      "A C# application that installs as a program, creating a service that continuously monitors a specified folder. Upon detecting the folder, it sends the data to a server via socket and encrypts the folder on the user's computer.",
    img: virus,
    linkTo: "https://github.com/enmarcm/PredatorVirus",
  },
  {
    number: "08",
    title: "BidAnalyzer",
    description:
      "A full-stack application that allows users to upload encrypted Excel files containing bids. The application uses a private key for encryption and a public key for decryption, analyzes the bids, and identifies the lowest price to determine the winning bid.",
    img: bidAnalizer,
    linkTo: "https://github.com/enmarcm/BidAnalyzer",
  },
];

export default PROJECT_DATA;
