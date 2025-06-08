# Use an official Java runtime as a parent image
FROM eclipse-temurin:17-jdk

# Set working directory inside the container
WORKDIR /app

# Copy Maven wrapper and pom.xml first (to leverage caching)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Download dependencies (will cache this layer if pom.xml didn't change)
RUN ./mvnw dependency:go-offline -B

# Copy the rest of your project
COPY src src

# Package the application (skip tests if you like)
RUN ./mvnw package -DskipTests

# Run the application
CMD ["java", "-jar", "target/OlaNotes-0.0.1-SNAPSHOT.jar"]
