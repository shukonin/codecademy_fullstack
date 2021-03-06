const messageElements = {
  emojis: ['🐵', '🐶', '🐺', '🐱', '🦁', '🐯', '🦊', '🦝', '🐰', '🐸'],
  phrases: [
    'you will be lucky',
    'you will find love',
    'your friends are going to surprise you',
    'you have to congratulate a colleage',
    'you will kiss a girl',
    'you will kiss a boy',
    'you shall leave on vacation',
    'you must do something rebel',
    'you must commit to make exercise',
    'your energy is going to be high',
    'your energy is going to be low',
    'your neighbor will party often until 3.00am',
    'you health will need special care',
    'a friend of yours will fall in love',
    'a new job opportunity will come',
    'you will get a raise',
    'your favorite team will be unbeaten',
    'you must go to the cinema',
    'you must try a new recipe',
  ],
  motivation: [
    'Rule books tell people what to do. Frameworks guide people how to act. Rule books insist on discipline. Frameworks allow for creativity',
    "Greatness doesn't start with a market opportunity, it starts with a problem that needs solving. The opportunity comes from marketing the solution.",
    'Our passion lies deep in who we are not what we do.',
    'The quality of a leader cannot be judged by the answers they give but, by the questions they ask.',
    "Let's stop talking about what we do and start talking about what we believe.",
    'We can learn about our future from our past because, regardless of technology or the speed of innovation, people are still people.',
    "If the challenge we face doesn't scare us, then it's probably not that important.",
    'Instead of expending energy to fit into the group, it’s better to expend energy to find the group in which we fit.',
    'We all have the luxury of looking out for ourselves. Leaders also have the honor of looking out for others.',
    'Managers work to see numbers grow. Leaders work to see people grow.',
    'Before we can build the world we want to live in, we have to imagine it. Greatness starts with a clear vision of the future.',
    'A weak leader likes to tell us how many people work for them. A great leader is humbled to tell us how many people they work for.',
    'Ambition is refusing to quit on ourselves. Leadership is refusing to quit on others.',
    'Those who know WHAT they do tend to work harder. Those who know WHY tend to work smarter.',
    'There are only a finite number of problems but there are an infinite number of solutions.',
    'The only ones who fear failure are those who have never tasted it.',
    'Trust is built on telling the truth, not telling people what they want to hear.',
    'We have to dream. How else will we make a future that does not yet exist?',
    'The leaders who get the most out of their people are the leaders who care most about their people.',
    'What makes a movement strong is not the number of people willing to give money, but the number of people willing to believe there is hope.',
  ],
};

const randomMessage = () => {
  const randomEmoji = Math.floor(Math.random() * messageElements.emojis.length);
  const randomPhrase = Math.floor(
    Math.random() * messageElements.phrases.length
  );
  const randomMotivation = Math.floor(
    Math.random() * messageElements.motivation.length
  );
  return `Hi! your identity emoji is ${messageElements.emojis[randomEmoji]} 
  This month ${messageElements.phrases[randomPhrase]} 
  Remember: ${messageElements.motivation[randomMotivation]}`;
};

console.log(randomMessage());
