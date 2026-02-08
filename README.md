# mern-microservices-chatapp - Built with pure "Vibe Coding" energy

RabbitChat: Event-Driven MERN Microservices
A real-time, scalable chat application built with the MERN stack and RabbitMQ. This project demonstrates a decoupled microservices architecture where services communicate asynchronously via a message broker.

Architecture Overview
Unlike traditional monolithic chat apps, this system splits concerns into independent services:

Client: Next.js based frontend using Tailwind CSS.

Auth Service: Handles user registration and JWT authentication.

Chat Service: Manages chat rooms and message history.

Messaging Broker (RabbitMQ): Ensures reliable, asynchronous delivery of messages between services.

Gateway/Socket Service: Manages real-time WebSocket connections with users.
