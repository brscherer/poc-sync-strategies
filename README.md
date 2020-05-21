# 🤓 PoC - Synchronization Strategies

This is a simple app to present the differences between optimist and pessimist synchronization strategies

## 🚀 Getting Started

To run this project, first you need to have [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed in your PC

Then, open your terminal and go to the folder you want to install this project and run the following commands:

- `https://github.com/brscherer/poc-sync-strategies.git`
- `cd poc-sync-strategies`
- `docker-compose up --build`

Main application will be running on `http://localhost:3001` and the node server will be running on `http://localhost:8080`

## 👣 To give some context...

But in this case, what do we mean by Synchronization Strategy?

According to [Bartosz Pietrucha](https://angular-academy.com/angular-architecture-best-practices/), there are two ways of implementing an update:

> **Optimistic update** changes the UI state first and attempts to update the backend state. This provides a user with a better experience, as he does not see any delays, because of network latency. If backend update fails, then UI change has to be rolled back.
>
> **Pessimistic update** changes the backend state first and only in case of success updates the UI state. Usually, it is necessary to show some kind of spinner or loading bar during the execution of backend request, because of network latency.

And this is the concept we want to proof here 🤘
