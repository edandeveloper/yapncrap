export interface Post {
  slug: string;
  title: string;
  tagline: string;
  date: string;
  tags: string[];
  rotation: number;
  tapeColor: 'yellow' | 'blue';
  paragraphs: string[];
}

export const posts: Post[] = [
  {
    slug: 'am-i-a-hypocrite-or-just-a-hippo',
    title: 'Am I a Hypocrite, or Just a Hippo',
    tagline: 'On the gap between the person you preach and the person you are.',
    date: 'May 20, 2024',
    tags: ['self-reflection', 'humor', 'existential'],
    rotation: -1.5,
    tapeColor: 'yellow',
    paragraphs: [
      "I preach consistency and forget to reply to texts for three days. I advocate for mindfulness and doom-scroll until 2am with the conviction of someone studying for a finals they've known about since September. I tell people rest is important and then lie in bed feeling guilty the moment I'm not being productive. So: am I a hypocrite? Or just a hippo — large, semi-aquatic, and mostly submerged in my own contradictions?",
      "The word hypocrite comes from the Greek hypokritēs, meaning actor. As in, someone playing a role. Which honestly feels generous. At least actors know they're performing. The rest of us are out here delivering lines we wrote for ourselves and then forgetting to memorize them. We cast ourselves as the protagonist of a very coherent personal narrative and then consistently do the thing the protagonist would never do.",
      "Here's what I think is actually going on: we're not hypocrites, we're just people. The values we espouse are aspirational — they're who we're trying to be, not necessarily who we are in this exact moment. There's a version of you that goes to bed at 10pm and reads a book. That version is real. They just happen to be on shift less often than the version that discovers it's 1am and you've been reading hot takes about a controversy you don't actually care about.",
      "The real hypocrites aren't people who struggle to live their values. They're people who use their values as a performance to avoid actually living them. The person who talks endlessly about honesty but is never honest about themselves. The one who's passionate about fairness until it costs them something. That's the gap worth worrying about — not the one between your ideals and your 2am decisions, but the one between what you say and what you actually believe.",
      "So maybe the move is to lower the charge. Not every contradiction in your behavior is a moral failing. Sometimes it's just evidence that being a person is hard and your brain is tired. Give yourself the same grace you'd give a friend who texted you three days late. They're not a bad person. They're just also, sometimes, a little bit of a hippo.",
    ],
  },
  {
    slug: 'why-do-the-best-ideas-come-before-you-fall-asleep',
    title: 'Why Do The Best Ideas Come Before You Fall Asleep',
    tagline: 'Your brain is withholding genius until you are horizontal and helpless.',
    date: 'April 2, 2024',
    tags: ['brain', 'observations', 'random'],
    rotation: 1.2,
    tapeColor: 'blue',
    paragraphs: [
      "There's something genuinely cruel about your brain. It waits. It waits until you've turned off the lights, pulled the blanket to exactly the right height, set an alarm for a time that is both responsible and optimistic, and finally achieved that horizontal peace — and then it taps you on the shoulder. Hey. Hey. I just figured out everything.",
      "This happens to me constantly. The perfect thing to say in an argument I had two weeks ago. The solution to a problem I gave up on in the afternoon. A business idea that is either brilliant or embarrassing and I genuinely can't tell at 11:47pm. The punchline for a joke I've been workshopping since Tuesday. All of it, right as I'm about to go to sleep.",
      "There's actually a reason for this. During the day, your prefrontal cortex is running loud — filtering, evaluating, second-guessing. It's useful but it also shouts over the quieter, more associative parts of your brain that are trying to connect things. When you're falling asleep, that executive control starts to power down. What you get is a brief window — called the hypnagogic state — where your brain is still active but the internal critic has logged off early. Associations run free. Edges blur. Things connect that wouldn't connect under normal interrogation.",
      "The problem is you're also, by definition, about to be unconscious. You tell yourself you'll remember it. You won't. The idea feels so vivid, so complete, that it seems impossible you could forget something this good. You will absolutely forget it. The next morning you'll remember that you had an idea, feel the ghost of its excellence, and reconstruct nothing.",
      "The fix is obvious and I still don't always do it: have something to write on. Not your phone — your phone has apps and notifications and before you know it you've checked Twitter and now you're actually awake. An actual notebook, an actual pen. Analog. Old fashioned. Sitting right there on the nightstand like a responsible person who respects their 11:47pm genius. It's the simplest thing and somehow the hardest thing. Possibly because committing to the notebook means committing to taking the ideas seriously, and then you have to actually do something with them.",
    ],
  },
  {
    slug: 'the-relativity-of-art',
    title: 'The Relativity of Art',
    tagline: 'Is bad art objectively bad? Depends on who you ask. Which is kind of the point.',
    date: 'March 15, 2024',
    tags: ['art', 'philosophy', 'takes'],
    rotation: -0.8,
    tapeColor: 'yellow',
    paragraphs: [
      "If a million people love something, is it good? If only one person loves it — but that person is you — does that make it valid? These are the questions that ruin dinner parties and make people defensive about their favorite movies, and I think that's exactly right. Art is one of the only domains where we simultaneously believe taste is personal and also that some things are objectively better. We hold both positions at once, which is either sophisticated or incoherent, depending on your mood.",
      "The argument for objectivity goes: there are craft elements to any art form. Technique, structure, intentionality, internal consistency. A piece of music can be technically well-composed. A painting can demonstrate mastery of light and perspective. By those standards, some things are simply better executed than others, and taste doesn't change that. Fair enough.",
      "But here's the problem: who decided which craft elements count? Why is harmonic resolution in Western music the measure, and not the microtonal scales of Persian classical music? Why is linear narrative the gold standard of fiction, and not the oral tradition structures that most of humanity has used for most of history? The moment you try to establish objective criteria, you find that the criteria themselves are culturally constructed. The frame is already an argument.",
      "What I actually think is this: art quality is neither purely objective nor purely subjective. It exists in the relationship between the work and the person experiencing it — but that relationship isn't random. Some works have more surface area. They connect with more people across more contexts with more depth. That's not the same as objective quality, but it's not nothing either. A painting that moves you to tears and also moves strangers to tears and also moved people in 1640 to tears has something in it. We just can't name the thing, which is maybe exactly why we needed art to say it.",
      "So when someone tells you your favorite song is objectively bad, they're technically wrong. But when someone tells you that anything goes and all art is equal, they're also wrong, just in a lazier way. The truth is somewhere in the uncomfortable middle — where good taste means knowing what moves you, and also knowing why, and also being honest about the fact that your why is not everyone's why. Which is hard. Which is why most people just pick a side and defend it loudly at dinner parties.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
