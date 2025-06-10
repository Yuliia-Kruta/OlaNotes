<h1 align="center">OlaNotes</h1>
<br/>
<img align="left" src="./olanotes.gif" width="30%" height="auto"/>
<br/><br/><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project Link: <a target="new" href="https://olanotes.onrender.com/">Live Demo</a>
<br/><br/><br/><br/><br/>
<br/>
<h2>Project description</h2>
<b>OlaNotes</b> is a cloud-based note-taking web application built with Java and Spring Boot. It allows users to securely register, log in, create and manage notes through intuitive dashboard.
The application leverages a MySQL cloud database and is deployed using Docker on Render.
<br/><br/>
This was my first ever pet project.

<h2>Features</h2>
<ul>
  <li>User registration and authentication</li>
  <li>Create, edit, and delete notes</li>
  <li>Built-in text editor</li>
  <li>Mark notes as favourite or pinned</li>
  <li>Notes dashboard with grid and list views</li>
  <li>Search notes</li>
  <li>Edit user profile</li>
  <li>Password encryption</li>
  <li>Responsive design</li>
</ul>

<h2>Technologies Used</h2>
<h3>Backend</h3>
- Java + Spring Boot<br/>
- Spring MVC (Web layer)<br/>
- Spring Security (Authentication & Authorization)<br/>
- Spring JPA + Hibernate (ORM, persistence)<br/>
- MySQL (Relational database)<br/>
- Maven (Build and dependency management)<br/>

<h3>Frontend</h3>
- HTML5<br/>
- CSS3<br/>
- JavaScript<br/>
- jQuery + AJAX<br/>
- Thymeleaf <br/>
- Bootstrap <br/>

<h2>Getting Started</h2>
To get a local copy up and running, follow these simple steps.

<h3>Prerequisites</h3>
<h5>1. Make sure you have all the following installed:</h5>
- Java 17+<br/>
- Maven<br/>
- MySQL server

<h3>Installation</h3>
<h5>Clone the repository:</h5>
https://github.com/Yuliia-Kruta/OlaNotes.git

<h5>Navigate to the project directory:</h5>
<code>cd OlaNotes</code>

<h3>Local Setup</h3>

<h5>Configure <code>application.properties</code></h5>
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver<br/>
spring.datasource.url=YOUR_DB_URL<br/>
spring.datasource.username=YOUR_DB_USERNAME<br/>
spring.datasource.password=YOUR_DB_PASSWORD<br/>
spring.jpa.hibernate.ddl-auto=update<br/>
spring.jpa.show-sql=true

<h5>Build the project:</h5>
<code>mvn clean install</code>

<h5>Run the project:</h5>
<code>mvn spring-boot:run</code>
<br/><br/>
The app will be available at http://localhost:8080 (or another port if specified).

<h2>License</h2>
Distributed under the MIT License. See LICENSE for more information.
