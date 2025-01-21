type AboutMeSections = {
        [key: string]: string;
};

export type TabType = 'personal' | 'journey' | 'interests' | 'principles';

export const TABS: { id: TabType; label: string }[] = [
        { id: 'personal', label: 'Story' },
        { id: 'journey', label: 'Journey' },
        { id: 'interests', label: 'Interests' },
        { id: 'principles', label: 'Principles' },
];

export const ABOUT_ME_SECTIONS: AboutMeSections = {
        personal: `<div>
Hello, I'm Faisal.
        <p>A Palestinian born in the middle of the desert in Saudi Arabia, where my first introduction to technology came through a <strong>Windows 95 desktop</strong>. Seeing words appear on a screen, playing games, and talking to my friends through a machine felt like witchcraft, something magical yet terrifying.
        <p>From that moment, I was fascinated by technology but also <strong>intimidated</strong> by it. I thought, <strong>"I could never build something like this."</strong>
        <h3 class="text-base font-bold border-b border-gray-400">A Journey of Unexpected Turns...</h3>
Despite my interest in tech, my early ambitions were far from coding. I actually wanted to become a <strong>surgeon</strong> (thankfully, that never happened, because I would have been <strong>miserable</strong>). Instead, I pursued <strong>business school</strong>, eager to learn how to lead, build, and operate companies.
        <p>During business school, life had other plans. I was diagnosed with Crohn's disease at a young age, a challenge that shaped my resilience and perspective. I developed a deep appreciation for the simpler things in life, which made me more humble and compassionate.
        <p>Coming from a <strong>family business</strong>, I saw firsthand what it took to be an entrepreneur. After business school, I considered joining <strong>consulting</strong> in one of the Big Four, but luckily, I didn't because I would have been <strong>miserable</strong>.
        <p>Instead, I joined the family business, gaining real-world experience. But something inside me always pushed me further. I had a deep feeling that I was meant to do <strong>something bigger</strong>, something that wasn't possible in my current environment.
        <h3 class="text-base font-bold border-b border-gray-400">The Leap of Faith...</h3>
In pursuit of that bigger dream, I moved to the <strong>United States</strong> to continue my education, with one goal in mind:
        <p><strong>Live and work in New York City.</strong>
        <p>I always felt that my full potential would be unlocked there, that something was waiting for me in the <strong>land of the free and home of the brave</strong>.
        <p>I earned my <strong>master's degree</strong>, shifting my interest toward <strong>investment banking</strong> and <strong>private equity</strong> but, once again, luckily, that didn't happen.
        <h3 class="text-base font-bold border-b border-gray-400">The "Lightning Bolt" Moment...</h3>
The moment that changed everything for me happened in a finance class.
        <p>We had to build an investment portfolio and run data analysis. Knowing my <strong>Excel</strong> skills were strong, I was confident... until I saw a classmate open a terminal, integrate Yahoo Finance APIs, and automate everything using Python, completing what should have been a three-day project in <strong>less than an hour</strong>.
        <p>That was my <strong>"lightning bolt" moment</strong>. That was when I realized:<br/>
<strong>I needed to learn how to code.</strong>
        <h3 class="text-base font-bold border-b border-gray-400">Building, Failing, and Trying Again...</h3>
When the pandemic hit, I made my first attempt at learning to code but I <strong>failed</strong>. Without guidance, I got stuck debugging and had no idea how to move forward.
        <p>So, I did what I knew best: I focused on the skills I had accumulated throughout my life and business instead.
        <p>An opportunity came to join a <strong>fintech startup</strong> as its <strong>first employee</strong> and I took it. I had the rare chance to build a company from scratch, witnessing every stage:
            <li>Designing the first version
            <li>Building the MVP
            <li>Raising capital
            <li>Launching the product
            <li>Acquiring first users
            <li>Iterating and going to market
        <p>But there was one big problem: I couldn't go deeper into the technical side because I <strong>lacked the engineering skills</strong>.
        <h3 class="text-base font-bold border-b border-gray-400">The Hardest Decision of My Life...</h3>
Being on a <strong>student visa</strong>, I needed sponsorship to stay in the US, but with the uncertainty of covid times, I couldn't leave leave my future to chance. I had to find another way, as a <strong>Palestinian</strong>, I had one other option:<br/>
Apply for <strong>asylum</strong>.
        <p>This was one of the <strong>hardest choices</strong> I've ever made—it meant:
            <li><strong>Not leaving the US for years</strong>
            <li><strong>No visits home, no friends or family</strong>
            <li><strong>No way to go back on this decision</strong>
        <p>I had to make it work.
        <h3 class="text-base font-bold border-b border-gray-400">The NYC Chapter – The Fire Gets Bigger...</h3>
In 2022, I finally moved to <strong>New York City</strong>—and everything changed.
        <p>I immersed myself in the <strong>tech ecosystem</strong>, meeting <strong>entrepreneurs</strong>, <strong>investors</strong>, and <strong>builders</strong> every week. The energy, the people, and the relentless drive for innovation <strong>fueled me</strong> like never before.
        <p>This was the environment I had been waiting for.<br/>
I wasn't just moving forward, I was <strong>accelerating</strong>.
        <h3 class="text-base font-bold border-b border-gray-400">The AI & Coding Revelation...</h3>
With <strong>AI</strong> changing the world, I couldn't just watch from the sidelines. I needed to be part of it.
        <p>I joined a <strong>full-stack bootcamp</strong>, committing fully to learning software engineering. In just <strong>three months</strong>, I went from zero to building full-stack applications—and something inside me finally clicked:
            <li><strong>This is it</strong>
            <li><strong>This is what I was meant to do</strong>
            <li><strong>I want to spend my life building things that solve real-world problems</strong>
        <h3 class="text-base font-bold border-b border-gray-400">Full Circle – The Windows 95 Tribute...</h3>
As I built my personal website, I wanted to pay tribute to where it all began—<strong>Windows 95</strong>. How I didn't understand technology (and still don't) but I was fascinated by it and now able to build things with it.
        <p>The operating system that first made me fall in love with technology...The computer screen that once <strong>intimidated</strong> me...Now, here I am:
            <li><strong>Building apps</strong>
            <li><strong>Solving problems</strong>
            <li><strong>Living my dream in New York City with clear purpose</strong>
    </div>`,

        journey:

                `Riyadh, SA  
-----------
1995 – Born into this world  
|
|
|
2000 - Early interaction with computers (Windows 95 magic)  
|
|
|
2007 - Dreamed of living and working in NYC and decided I must pursue my dream (Life-changing decision)  
|
|
|
2012 - Graduated high school  
|
2013 - Failed to join med school, thank god, and decided to join business school (Life-changing decision)  
2013 - Diagnosed with Crohn's disease (Life-changing event)  
|
|
|
2016 - Graduated from business school  

Amman, Jordan  
-------------
2016 - Underwent Crohn’s disease surgery (Life-changing event)  

Riyadh, SA  
-----------
2017 - Failed to join the big four, thank god, and decided to join the family business (Life-changing decision)  
|
2018 - Quit the family business to continue my education in the US (Life-changing decision)  

Boston, MA  
----------
2019 - Finished first master's degree in International Business  
|
2020 - Finished second master's degree in Finance  
2020 - COVID happened → A lot of soul-searching, self-reflection, and many Warzone wins
2020 - Failed to join investment banking, thank god, and decided to join a newly founded fintech startup (Life-changing decision)  

Newport Beach, CA  
-----------------
2021 - Filed for asylum immigration (Life-changing decision)  
2021 - Doordashing, Ubering, and working at fintech startups to make ends meet  

New York, NY  
------------
2022 - Moved to NYC (Life-changing decision)  
2022 - Found love in the city of love with my soon to be wife (Life-changing event)  
|
2023 - Got engaged   
2023 - Launched Ihsan MVP with a dev agency, wasn't very satisfied with the outcome but it was the best I could do at the time
|
2024 - Got married, left my job, joined Fractal bootcamp (Life-changing decision)  
|
2025 - Ready to build and work with AI agents as a software engineer
    `,

        interests: `<h3 class="text-base font-bold">Interests & Hobbies</h3>|
├── <strong>Creativity</strong>  
│   ├── Cooking - Tasting the world through food and flavors  
│   ├── Fashion - Expressing identity through style  
│   ├── Design - A taste for the simpler things in life  
│   ├── Coding - Newest obsession, where anything is possible
│  
├── <strong>Physical</strong>  
│   ├── Working Out - Strength, endurance, and discipline  
│   ├── Soccer - Favorite sport to watch and play  
│   ├── Ping Pong - Quick reflexes, fast decisions  
│   ├── Learning Ancient Skills - Understanding lost arts and old crafts
│   
├── <strong>Entertainment, Learning & Exploration</strong>  
│   ├── Documentaries - Deep dives into history, psychology, and business  
│   ├── Readings - interest in learning history, philosophy, and religion  
│   ├── Movies & Shows - Recently acquired taste for science fiction  
│   ├── Traveling - Exploring cultures, histories, and flavors
│   `
        ,
        principles: `<h3 class="text-base font-bold">Principles I live by and shapes me everyday...</h3>
├── "Believe in god, yourself, and have faith." 
|
├── "A strong believer is better than a weak believer."  
|
├── "Honesty, integrity, and loyalty above all."  
|
├── "Choose how you want to live your life."  
|
├── "Avoid non existent mental barriers."  
|
├── "Learn from yesterday, plan for tomorrow, and live in the present because it’s the only moment that matters."  
|
├── "The best time to start something was yesterday."  
|
├── "Don't delay today's work to tomorrow."  
|
├── "Always start with 'What is the worst that can happen?' If you can afford it… just do it."  
|
├── "Nothing is easy, nothing is hard."  
|
├── "Partner well in life and business. Your wife and your team will shape your future whether you like it or not."  
|
├── "Whatever most people do, I do the opposite." 
|
├── "In most cases, the last thing I could care about is what people think." 
|
├── "Never been, never will be a kiss-ass."  
|
├── "Never did, never will speak corporate jargon." 
|
 
`,
};
