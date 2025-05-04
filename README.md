TRY EvoEd : https://evoed.vercel.app/

>Inspiration
EvoEd was created in response to a common dissatisfaction among students: conventional education may be tedious, unengaging, and unconnected from how we genuinely love learning. As someone who enjoys both games and the thrill of accomplishment, we wanted to create something that made learning seem more gratifying, engaging, and dynamic—like moving up in your favorite RPG. we was inspired by platforms that leverage progress mechanics and positive reinforcement, but we wanted to take it a step further by creating an experience that combines teaching and exploration. EvoEd is our attempt to transform passive learning into an adventure that will keep you coming back for more. the game principle implemented come straight from RPGs like Skyrim and dark souls, while keeping a classy 16 bit 2D theme. I also took inspiration from the apps like Duolingo for the Path progress mechanics.

>What it does
EvoEd is a gamified education platform that transforms learning into a story-driven experience. Here's what distinguishes it:

Quest-Based Learning: Educational information is organized into quests and challenges. These aren't simply lessons; they're objectives that players must accomplish to get XP and move through a fantasy-themed story.

Player Lore and Progression: Each student is portrayed as a king reincarnated from a forgotten world, a person whose quest for knowledge has overcome death. Their journey via EvoEd reflects their ambition to reconstruct their lost empire through education. Their decisions influence the plot and unlock personalized lore arcs.

Boss Battles with Lore: At the conclusion of key learning modules, players confront "bosses"—tough, quiz-style trials that symbolize mythological guardians of knowledge. Each boss has a background that connects to the platform's evolving mythology realm, combining education and fiction.

Users may track numbers like as XP, badges, mastery levels, and achievements in a simple, gamified interface, with real-time updates reflecting their academic progress.

Secure and customizable: Inspired by Edufy's seamless login flow, EvoEd employs Firebase for secure authentication and customizable learning routes depending on performance and choice.

> How we built it
Frontend: Built using TypeScript and Tailwind CSS, providing a responsive and modern user interface inspired by RPG dashboards and fantasy-themed designs.​

Authentication: Implemented using Firebase Authentication, facilitating secure and seamless user sign-ups, logins, and session management.​

Gamification Layer: Developed custom logic in TypeScript to manage experience points (XP), skill trees, level progression, badge unlocks, and quest rewards, forming the core engagement loop of the platform.​

Backend: While the current repository doesn't include a backend, future iterations of EvoEd could integrate a backend using technologies like Node.js or Flask to handle quest assignments, progress tracking, and boss encounters.​

Database: Plans to incorporate Firestore for real-time data synchronization and persistence, enabling dynamic content updates and user progress tracking.​

Lore System: Designing a flexible JSON-based framework to dynamically generate player-specific storylines and boss dialogues based on module progression, enhancing the immersive learning experience.

> Challenges we ran into
Integration of Firebase Authentication: One of the major challenges was setting up Firebase Authentication to work seamlessly with the user flow. Ensuring a smooth login, sign-up, and session management experience while maintaining security and data integrity was time-consuming, especially with handling various edge cases such as session timeouts and error handling.

User Experience Consistency: While building the frontend with Tailwind CSS and TypeScript, it was challenging to ensure consistency in the design across different screen sizes and devices. Customizing UI elements for a game-inspired look while keeping the interface responsive and user-friendly took multiple iterations to perfect.

Session Management: Firebase provides robust authentication features, but managing user sessions—especially for a gamified learning experience—required careful planning. Ensuring that user progress, such as XP, quests, and badges, was consistently saved and displayed across sessions took extra effort.

Real-Time Data Syncing: The integration of Firestore for real-time data sync and persistence posed challenges, particularly when ensuring that changes to user progress or quest updates were reflected immediately without causing data inconsistencies or latency.

Gamification Logic: Designing a system to handle user progression, badges, and quest completions using TypeScript was challenging due to the complexity of tying these elements to real educational content while still maintaining an enjoyable game-like experience. Ensuring that the gamification layer didn’t overshadow the learning outcomes was key.

>Accomplishments that we're proud of
immersive Lore Framework: We managed to create a compelling backstory that ties learning into a larger universe, complete with custom arcs, boss dialogues, and a rich player identity system.

Fully Functional Gamified Experience: The level-up mechanics, badge systems, and boss encounters work seamlessly with the curriculum—a true blend of education and fantasy.

Secure and Smooth Auth Flow: Borrowing best practices from Edufy, our Firebase integration provides a frictionless experience for users while maintaining full security.

Scalable Architecture: We built the platform in a way that makes adding new courses, storylines, or gameplay mechanics straightforward. The structure is ready for growth

>What we learned
Gamification is a Superpower: When applied meaningfully, gamification transforms passive learning into an active, emotionally resonant experience.

Storytelling Drives Engagement: Users connected more deeply when they had a role to play. Giving them a background as a reincarnated knowledge monarch made them feel like protagonists—not just students.

Modular Thinking is Key: Planning for expansion from the start saved us time and made iteration easier as we added new mechanics and content.

Balancing Systems Takes Time: Educational content, game design, and narrative need careful calibration. Every change in one area affects the others.

>What's next for EvoEd
EvoEd is just getting started. Here’s what we’re working on next:

Backend Integration: Develop and integrate a backend system to manage dynamic content, user progress, and interactive features.​

Database Implementation: Set up Firestore to handle real-time data operations, ensuring a seamless and interactive user experience.​

Lore Expansion: Further develop the lore system to provide personalized narratives, enriching the gamified learning journey. More Courses, More Realms: Expanding our course offerings to include science, tech, philosophy, and the arts—each with its own themed realm and set of bosses.

Expanded Gameplay Modes: Introducing multiplayer learning challenges, time-limited events, exploration-based lessons, and simulation quests for soft skill development.

Deep Boss Lore and Worldbuilding: Every boss will be tied to an ancient legend or forgotten realm. Defeating them will unlock fragments of a greater story, drawing users deeper into EvoEd’s mythology.

Player-Centric Lore Customization: Your monarch’s story will evolve with your choices—will you become a benevolent sage or a tyrant of knowledge?

Mobile App Launch: A cross-platform mobile experience is in development, allowing users to learn and play on the go.

Institutional Integration: We're reaching out to educators to align EvoEd with real-world syllabi, so learning in-game earns real-world credit.
This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
