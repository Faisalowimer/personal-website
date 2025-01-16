type AboutMeSections = {
    [key: string]: string;
};

export type TabType = 'personal' | 'journey' | 'interests' | 'education';

export const TABS: { id: TabType; label: string }[] = [
    { id: 'personal', label: 'Story' },
    { id: 'journey', label: 'Journey' },
    { id: 'interests', label: 'Interests' },
    { id: 'education', label: 'Education' },
];

export const ABOUT_ME_SECTIONS: AboutMeSections = {
    personal: `<div>
Hello, I'm Faisal.
        <p>A Palestinian born in the middle of the desert in Saudi Arabia, where my first introduction to technology came through a <strong>Windows 95 desktop</strong>. Seeing words appear on a screen, playing games, and talking to my friends through a machine felt like witchcraft, something magical yet terrifying.
        <p>From that moment, I was fascinated by technology but also <strong>intimidated</strong> by it. I thought, <strong>"I could never build something like this."</strong>
        <h3 class="text-base font-bold border-b border-gray-400">A Journey of Unexpected Turns...</h3>
Despite my interest in tech, my early ambitions were far from coding. I actually wanted to become a <strong>sergeant</strong> (thankfully, that never happened, because I would have been <strong>miserable</strong>). Instead, I pursued <strong>business school</strong>, eager to learn how to lead, build, and operate companies.
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
As I built my personal website, I wanted to pay tribute to where it all began—<strong>Windows 95</strong>.
        <p>The operating system that first made me fall in love with technology...The computer screen that once <strong>intimidated</strong> me...<br/>Now, here I am.
            <li><strong>Building apps</strong>
            <li><strong>Solving problems</strong>
            <li><strong>Living my dream in New York City</strong>
    </div>`,

    journey: `📌 **Professional Journey**

🚀 **Current Focus**  
• Full Stack Development with Next.js and TypeScript  
• AI-powered applications & automation  
• Building scalable web applications  

📍 **Career Timeline**  

📌 **2015 - First Line of Code**  
Wrote my first "Hello, World!" and thought I was hacking the planet.  

📌 **2017 - Built My First Full App**  
Created a web app to [describe fun or meaningful early project].  

📌 **2019 - Entering the Business World**  
Gained business experience through [consulting, family business, etc.].  

📌 **2021 - Startup & Fintech**  
Joined a fintech startup as the **first employee**, leading business operations.  

📌 **2022 - Moved to NYC**  
Finally made it to **New York City** to pursue **tech and entrepreneurship**.  

📌 **2023 - Committing to Tech**  
Joined a **full-stack bootcamp** and fully transitioned into software development.  

📌 **2024 - AI, Automation & Full-Stack**  
Now focused on **building real-world applications and AI-driven tools**.`,

    interests: `🎯 **Interests & Hobbies**

🖥 **Tech Interests**  
• AI & Machine Learning 🤖  
• Web Development & Modern Frameworks 🌍  
• Open Source Contributions 💡  
• System Architecture & Design 🏗️  

🎮 **Gaming & Fun Stuff**  
• Strategy games (Chess, Starcraft, Factorio)  
• Classic retro games (because, well… Windows 95)  

📚 **Reading & Learning**  
• AI research papers & dev blogs  
• Books on system design & efficiency  

☕ **Coding Rituals**  
• 2AM deep-dive coding sessions fueled by coffee  
• Breaking things to learn how to fix them 🤡`,

    education: `❌ **(This section is removed to avoid redundancy with resume.)**`
};
