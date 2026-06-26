// ============================================================
//  DATA FILE — add books, podcasts, notes and episodes here
//
//  STRUCTURE:
//  Each entry in `sources` is a book or podcast.
//  Each source has:
//    - title       : displayed as the page/section heading
//    - type        : "book" | "podcast" (shown as eyebrow label)
//    - link        : optional URL shown below the title
//    - linkLabel   : label for the link (default: "View source ↗")
//    - keyIdeas    : array of { heading, text } cards
//    - quotes      : array of { text, attribution } blockquotes
//    - episodes    : array of episode objects (see below)
//
//  EPISODE STRUCTURE:
//    - number  : episode number (shown in the badge)
//    - title   : episode title
//    - tips    : array of tip strings
//    - qa      : array of { q, a } objects  ← optional
// ============================================================

const sources = [
  {
    title: "Radical Candor",
    type: "Book & Podcast",
    link: "https://medium.com/@amaya30/top-take-aways-from-radical-candor-6732f8420bf0",
    linkLabel: "Medium summary ↗",

    keyIdeas: [
      {
        heading: "On Praise",
        text: "Say what was good <em>and</em> why it was good, and why it helps the company. Only say things you mean.",
      },
      {
        heading: "Rock Stars vs. Superstars",
        text: "Teams need stability (rock stars who love their current role) and growth (superstars on a steep trajectory). Both are essential — neither is better.",
      },
      {
        heading: "Psychological Safety",
        text: "Build trust so people feel free at work. You're not extracting the best work from them — you're creating conditions for them to bring it out of themselves.",
      },
      {
        heading: "Quick Reminders",
        text: "Visie · Carriere actieplan · Wie doet wat wanneer?",
      },
    ],

    quotes: [
      {
        text: "If you can build a trusting relationship with people so that they feel free at work, then they're much more likely to do the best work of their lives. But you're not 'getting it out of them'; you're creating the conditions for them to bring it out of themselves.",
        attribution: "Kim Scott, Radical Candor",
      },
      {
        text: "Nothing works well if everyone is gunning for the next promotion. Rock stars loved their work and were world-class at it, but they didn't want her job or to be Steve Jobs. Superstars would go crazy if they were still doing the same job in a year. She was explicit about needing a balance of both.",
        attribution: "Kim Scott, Radical Candor",
      },
    ],

    episodes: [
      {
        number: 1,
        title: "Introduction",
        tips: [],
        qa: [],
      },
      {
        number: 2,
        title: "Radically Candid Criticism",
        tips: [
          "Take a moment to show you care — establish a human bond first.",
          "Don't sugarcoat it. Be really clear about what needs improvement.",
          "Do not offer a feedback sandwich.",
        ],
        qa: [
          {
            q: "What is Radically Candid criticism?",
            a: "It happens when you Challenge Directly while simultaneously showing that you Care Personally. Being honest and clear about what needs to improve — without sugarcoating it — while making it evident that you genuinely care about the other person. This combination is what makes tough feedback actually land and motivate change, rather than create defensiveness.",
          },
          {
            q: "Why does it work better than softened or vague feedback?",
            a: "Vague or sugarcoated feedback leaves people confused about what actually needs to change. As Kim Scott puts it, \"It's not mean, it's clear.\" When feedback is direct and specific, the recipient knows exactly what to work on. Pairing that clarity with genuine care makes it psychologically safe enough to hear and act on.",
          },
          {
            q: "What is the feedback sandwich and why avoid it?",
            a: "Sandwiching criticism between two compliments (praise → criticism → praise). While it feels kind, it usually backfires: the critical message gets buried or diluted, and the recipient either misses it entirely or learns to distrust your praise.",
          },
          {
            q: "How can I make it easier for someone to hear tough feedback?",
            a: "Before delivering hard feedback, take a moment to establish a human bond and show you care. Even one genuine sentence signals that your criticism comes from investment in the person, not judgment. Over time, consistently showing you Care Personally builds the trust that makes direct challenges feel safe.",
          },
        ],
      },
      {
        number: 3,
        title: "Ruinous Empathy and Praise",
        tips: [
          "Spend just as much time preparing to praise as you do preparing to criticize.",
          "Make sure your praise clearly identifies both what was good and why it was good.",
          "If you don't mean it, don't say it.",
        ],
        qa: [
          {
            q: "What is Ruinous Empathy in the context of praise?",
            a: "It happens when you Care Personally but fail to Challenge Directly. When it comes to praise, it shows up as giving vague, feel-good compliments just to make someone like you or to avoid discomfort. The result is hollow feedback that doesn't help the person grow or understand what they did well.",
          },
          {
            q: "What's wrong with giving praise just to make someone feel good?",
            a: "Generic, unconvincing praise can feel like a pat on the head. As Dick Costolo puts it, \"Managing by trying to be liked is the path to ruin.\" Effective praise needs to be specific and sincere; otherwise it loses credibility and doesn't help the person understand what behavior to repeat or why it mattered.",
          },
          {
            q: "How should I prepare to give effective praise?",
            a: "Spend just as much time preparing to praise as you do preparing to criticize. Make sure your praise clearly identifies what was good and why it was good — not just a vague \"great job.\" And critically: if you don't mean it, don't say it. Insincere praise erodes trust faster than no praise at all.",
          },
        ],
      },
      {
        number: 4,
        title: "Ruinous Empathy and Criticism",
        tips: [
          "Just say it! If you see something, say something.",
          "Go into a criticism conversation with both your criticism and your objectives written down.",
          "Accept the fact that you may not have a solution in hand.",
        ],
        qa: [
          {
            q: "What is Ruinous Empathy in the context of criticism?",
            a: "It happens when you Care Personally but fail to Challenge Directly — you withhold criticism to avoid discomfort or to spare feelings. The result: the person never gets the feedback they need to improve. As Kim Scott puts it, being \"too nice\" is not actually kind — it's a failure of leadership.",
          },
          {
            q: "Why is giving criticism part of a manager's job?",
            a: "When you become a manager, \"if you don't have anything nice to say, don't say it\" no longer applies. Criticism is a core responsibility because it helps people understand what they need to do differently. Withholding it doesn't protect your team — it leaves them without information they need to grow, and damages trust when problems eventually surface.",
          },
          {
            q: "What should I do before a criticism conversation?",
            a: "Write down two things: the specific criticism you need to deliver and your objectives for the conversation. Having both clearly articulated helps you stay focused and ensures the feedback is purposeful rather than reactive. This also keeps you from getting derailed by emotion in the moment.",
          },
          {
            q: "What do I do if someone gets emotional during the conversation?",
            a: "Don't let the emotional reaction cause you to abandon the feedback — that's Ruinous Empathy in action. Acknowledge the emotion with compassion, give the person a moment if needed, but don't retract or soften the substance of your criticism. The goal is to remain both caring and direct.",
          },
        ],
      },
      {
        number: 5,
        title: "Career Conversations",
        tips: [
          "Have a Life Story conversation.",
          "Have a Visions conversation.",
          "Create a Career Action Plan.",
        ],
        qa: [
          {
            q: "What are Career Conversations?",
            a: "A structured approach — developed by Russ Laraway at Google — for managers to deeply understand what motivates each person, learn about their long-term dreams, and help them make tangible progress toward those dreams. Rather than generic check-ins, Career Conversations give employees a sense of their endgame and an intentional short-term plan to get there.",
          },
          {
            q: "What are the three steps?",
            a: "<strong>Life Story:</strong> Get to know the person's background and what shaped their motivations. <strong>Visions:</strong> Explore their long-term dreams and where they ultimately want to go. <strong>Career Action Plan:</strong> Build a concrete short-term plan that moves them toward their vision. Together these connect day-to-day work to each employee's deeper goals.",
          },
          {
            q: "Why is it hard for employees to share career dreams with their manager?",
            a: "It can feel vulnerable and even risky to say your dreams out loud to your boss. Employees may worry about being judged or pigeon-holed. That's why managers need to actively give people \"license to dream\" — creating psychological safety so that sharing ambitions feels encouraged rather than threatening.",
          },
        ],
      },
      {
        number: 6,
        title: "Telling People What to Do Doesn't Work",
        tips: [
          "Let direct reports choose the agenda for 1:1 meetings.",
          "In team meetings, make it clear whether the agenda is to debate or to decide.",
          "You are not the decider.",
        ],
        qa: [],
      },
      {
        number: 7,
        title: "How to Get Feedback from Your Boss",
        tips: [
          "Have a go-to question.",
          "Embrace the discomfort.",
          "Listen with the intent to understand, not respond.",
          "Reward the candor.",
        ],
        qa: [],
      },
      {
        number: 8,
        title: "How to Give Feedback to Your Boss",
        tips: [
          "Don't let criticism build up.",
          "Ask questions to understand, and ask permission to give another perspective.",
          "Don't pander.",
          "Don't forget to quit.",
        ],
        qa: [],
      },
      {
        number: 9,
        title: "Showing Appreciation Makes Work More Fun",
        tips: [
          "Tell people why their work matters so much.",
          "Celebrate milestones.",
          "Send hand-written thank you notes.",
        ],
        qa: [],
      },
      {
        number: 10,
        title: "Staying Connected with Remote Teams",
        tips: [
          "Have frequent, quick check-ins.",
          "If you can't exchange feedback in person, video conference is second best.",
          "If you must choose between in-person and immediate, choose immediate.",
        ],
        qa: [
          {
            q: "How can I build strong relationships with remote team members?",
            a: "Have quick, regular check-ins rather than infrequent long meetings. Video conferencing preserves the non-verbal cues that build trust. The goal is to make remote team members feel as connected and seen as co-located ones. Consistency matters more than any single grand gesture.",
          },
          {
            q: "What does \"feedback is measured at the listener's ear, not the speaker's mouth\" mean?",
            a: "Your intent as a feedback-giver doesn't determine whether feedback lands well — the receiver's experience does. You might feel you were clear and kind, but if the other person heard your words as harsh or confusing, that's the reality you need to work with. This is especially important in remote and cross-cultural settings.",
          },
          {
            q: "Is Radical Candor harder to practice across different cultures?",
            a: "Yes, it takes more care — but it's still achievable. Radical Candor is universally human but culturally and interpersonally relative. The core principle of caring personally while challenging directly remains constant, but how you deliver feedback needs to be calibrated to the cultural and individual context of the person you're communicating with.",
          },
        ],
      },
      {
        number: 11,
        title: "Creating a Culture of Radical Candor",
        tips: [
          "Create a shared vocabulary.",
          "Encourage self-criticism.",
          "Use frequent reminders.",
        ],
        qa: [],
      },
      {
        number: 12,
        title: "Make Meetings Less Awful",
        tips: [
          "Have an agenda.",
          "Assign roles for the meeting.",
          "Think hard about who needs to be there.",
        ],
        qa: [],
      },
      {
        number: 13,
        title: "Help! My Boss is a Micromanager",
        tips: [
          "Set clear goals.",
          "Ask questions.",
          "Push back.",
          "Don't forget to quit.",
        ],
        qa: [],
      },
      {
        number: 14,
        title: "Guide for New Managers",
        tips: [
          "Distribute important responsibilities to the people on your team.",
          "Make sure there are clear goals for the team and each individual.",
          "Give criticism when it's needed.",
          "Show up for your weekly 1:1s.",
        ],
        qa: [],
      },
      {
        number: 15,
        title: "What's Your Body Language Telling Me?",
        tips: [
          "When giving feedback, watch the person's reaction and adjust.",
          "Don't hide from emotion.",
          "Pay attention to how you're sitting.",
          "Use body language to be more confident.",
        ],
        qa: [],
      },
      {
        number: 16,
        title: "Take Feedback Like a Boss",
        tips: [
          "Remind yourself that feedback is a gift.",
          "Ask for feedback 1–2 times per week.",
          "Don't get mad, get curious.",
          "Schedule a time when you're going to follow up.",
        ],
        qa: [
          {
            q: "Why is it so hard to take feedback even when you know it helps?",
            a: "Receiving feedback triggers a natural threat response in the brain — your instinct is to get defensive, not curious. Recognizing that defensive reaction in the moment is the first step toward getting past it and actually benefiting from what someone is trying to tell you.",
          },
          {
            q: "What does it mean to \"Reward the Candor\" when you disagree?",
            a: "Showing genuine appreciation that someone was honest with you — even if you don't agree. You don't have to accept the feedback wholesale. Take time to reflect, find the piece you can agree with, acknowledge it, then calmly explain why you see the rest differently. This approach demonstrates both Care Personally and Challenge Directly.",
          },
          {
            q: "What role does curiosity play in taking feedback well?",
            a: "Curiosity is the antidote to defensiveness. When you get feedback that stings, shifting from \"I'm being attacked\" to \"I wonder what's behind this?\" changes everything. Ask yourself what behavior might be causing the other person's perception. This helps you extract useful information even from feedback that feels unfair or incomplete.",
          },
        ],
      },
      {
        number: 17,
        title: "Promotion Schmomotion",
        tips: [
          "Learn your team members' values and dreams.",
          "Offer public recognition or a \"guru\" role.",
          "Set growth expectations.",
        ],
        qa: [
          {
            q: "Why are promotions not always the best way to reward high performers?",
            a: "Promotions assume every top performer wants more responsibility — but that's often not true. Some people excel precisely because they love the work they're doing at their current level. Forcing promotions can cause you to lose great contributors, harm team morale, and even hurt the business.",
          },
          {
            q: "What is the danger of projecting your own ambitions onto your team members?",
            a: "When managers assume everyone wants to climb the ladder, they risk misreading motivations. Kim Scott initially wrote off \"Derek\" as un-ambitious because he didn't want a leadership role — when in reality he was deeply ambitious about doing his current job exceptionally well. This projection leads to bad decisions and can cause high performers to leave.",
          },
          {
            q: "What should I do if a promotion would just be a title change?",
            a: "Hollow promotions that pander to ego without offering real growth are a short-term fix that won't keep a high performer engaged for long. Instead, focus on genuine skill development and new challenges. Revisit career conversations (Episode 5) to understand what meaningful growth looks like for that specific person.",
          },
          {
            q: "What is a promotion-obsessed culture and why avoid it?",
            a: "One where advancement in title or scope is treated as the primary measure of success. This mindset can be damaging — it incentivizes the wrong behaviors, creates pressure on people to take roles they're not suited for, and causes you to overlook the immense value of people who are rockstars in their current roles.",
          },
        ],
      },
    ],
  },

  // ── ADD MORE BOOKS OR PODCASTS BELOW ──────────────────────
  // Copy the block above, change the fields, and add your episodes.
  // Example:
  //
  // {
  //   title: "The Making of a Manager",
  //   type: "Book",
  //   link: "https://example.com",
  //   linkLabel: "View on Goodreads ↗",
  //   keyIdeas: [
  //     { heading: "Great managers...", text: "..." },
  //   ],
  //   quotes: [
  //     { text: "...", attribution: "Julie Zhuo" },
  //   ],
  //   episodes: [],
  // },
];
