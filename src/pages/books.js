import React from 'react';

import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Card } from '../components/base';

const books = [
  {
    title: 'Island',
    author: 'Aldous Huxley',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/en/a/af/Island.JPG',
    description:
      'Fascinating work of utopian fiction detailing the account of a shipwrecked journalist who finds himself on the island of Pala, where Buddhism, free and open sex, and psychedelic drug use are the norm',
  },
  {
    title: 'New York 2140',
    author: 'Kim Stanley Robinson',
    thumbnail:
      'https://img1.od-cdn.com/ImageType-400/0887-1/D38/832/0F/%7BD388320F-E8BF-48A0-B0E7-A2FA62042C59%7DImg400.jpg',
    description:
      'Great futurist novel that anyone with knowledge of New York City should enjoy. Robinson paints a believable picture of the city––complete with its financiers, cops, celebrities, and hoodrats––in a future where the sea level has risen fifty feet.',
  },
  {
    title: 'Parasite Rex',
    author: 'Carl Zimmer',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/51nMwMxNXtL._SX328_BO1,204,203,200_.jpg',
    description:
      'I read this book while traveling through India... A phenomenal depiction of the bizarre world of parasites. Why parasites truly rule the world as we know it.',
  },
  {
    title: 'Being Mortal: Medicine and What Matters in the End',
    author: 'Atul Gawande',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/41thjRxxz2L._SX329_BO1,204,203,200_.jpg',
    description:
      'An important book about life and death in the modern era. Awesome insights into how we can improve health care for the dying',
  },
  {
    title: 'Seveneves',
    author: 'Neal Stephenson',
    thumbnail: 'https://i.harperapps.com/covers/9780062190376/y648.jpg',
    description:
      "This is an excellent hard science fiction novel that opens up with the moon exploding. This explosion sets the scene for an apocolypse that necessitates the building of a space colony initially tethered to the international space station. Worth the read if you're interested in orbital mechanics, genomics, robotics, or space. ",
  },
  {
    title: 'In the Beginning...was the Command Line',
    author: 'Neal Stephenson',
    thumbnail: 'https://wileys.website/img/books/command_line.jpg',
    description:
      'Quick read that will get you thinking about switching from Mac/Windows over to Linux. This book is a bit outdated, but still a great read for those interested in computers.',
  },
  {
    title: 'The Outlaw Ocean: Journeys Across the Last Untamed Frontier',
    author: 'Ian Urbina',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/41ggi--prRL._SX329_BO1,204,203,200_.jpg',
    description:
      'An awesome collection of investigative journalism covering everything from rogue environmental vigilantes to fishing ships capitalizing on slave labor on the open seas',
  },
  {
    title: 'How to Change Your Mind',
    author: 'Michael Pollan',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/How_to_change_your_mind_pollan.jpg/220px-How_to_change_your_mind_pollan.jpg',
    description:
      'This book dives into the research and personalities behind the science of mind altering chemicals, most notibly Psilocybin and LSD. Pollan provides riveting personal anecdotes of his own psychedelic experiences',
  },
  {
    title: 'Sex at Dawn',
    author: 'Christopher Ryan',
    thumbnail: 'https://wileys.website/img/books/sex_at_dawn.jpg',
    description:
      'A new classic which argues that humans are instinctively not monogomous creatures. Have we evolved to be sluts?',
  },
  {
    title: 'Why We Sleep',
    author: 'Matthew Walker',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/51HL0dOfXNL._SX329_BO1,204,203,200_.jpg',
    description:
      'A compelling case for getting those 8 + hours each night. Walker takes a look at a wide range of health problems associated with lack of sleep, sleep disorders, the new science of dreams, and more.',
  },
  {
    title: 'Zero to One',
    author: 'Blake Masters and Peter Thiel',
    thumbnail: 'https://images.gr-assets.com/books/1427728884l/23251016.jpg',
    description:
      'This a great read for anyone interested startups, entrepreneurship, or internet technology.',
  },
  {
    title: 'The Industries of the Future',
    author: 'Alex Ross',
    thumbnail: 'https://wileys.website/img/books/industries_future.jpg',
    description:
      'An excellent look at the worlds shifting economies. Focus on robotics, machine learning, code-ification of money, big data, and other industries.',
  },
  {
    title: 'The Checklist Manifesto: How to Get Things Right.',
    author: 'Atul Gawande',
    thumbnail: 'https://wileys.website/img/books/checklist_manifesto.jpg',
    description:
      'A nifty little book that discusses how something as simple as a checklist is saving lives in operating rooms around the world. Checklists can be applied to a wide range of professions and can ensure that simple mistakes are a thing of the past.',
  },
  {
    title: 'Weapons of Math Destruction',
    author: "Cathy O'Neil",
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/51eUw-v0X%2BL._SX329_BO1,204,203,200_.jpg',
    description:
      'A quick read the explores a number of pertinent cases where reliance on big data and machine learning is creating negative feedback loops that increase socioeconomic inequality.',
  },
  {
    title: 'Change Agent',
    author: 'Daniel Suarez',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/81WvdnufYPL.jpg',
    description:
      'Killer piece of futurist fiction that plays on gene editing, blockchain, and other soon to be technological realities. Was able to smash this book in three days.',
  },
  {
    title: 'Cutting Through Spiritual Materialism',
    author: 'Chögyam Trungpa',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/41-GtQ-Z80L._SX331_BO1,204,203,200_.jpg',
    description:
      'A lovely collection of talks from Trungpa, illustrating that spirutality can be hijacked for selfish purposes...and it often is in the west.',
  },
  {
    title: 'The Undoing Project',
    author: 'Michael Lewis',
    thumbnail:
      'https://kbimages1-a.akamaihd.net/e488376d-026e-4fe3-a62f-542ff4ab3c90/180/1000/False/the-undoing-project-a-friendship-that-changed-our-minds-signed-edition.jpg',
    description:
      'An intimate look at the lives and work of Danny Khaneman and Amos Tversky, who together published a number of seminal works on decision making and heuristics in judgement.',
  },
  {
    title: 'Sapiens: A Brief History of Humankind.',
    author: 'Yuval Noah Harari',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/41+lolL22gL.jpg',
    description:
      'A great overview of humanity and something to get you thinking about humanism, religion, economics, and philosophy.',
  },
  {
    title: 'The Age of Surveillence Capitalism',
    author: 'Shoshana Zuboff',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/71kgvTZyGRL.jpg',
    description:
      'An enticing but dense book detailing the quest of powerful technology companies to predict and control our behavior',
  },
  {
    title: 'Bad Blood',
    author: 'John Carreyrou',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/71rtQvf5UVL.jpg',
    description:
      'Awesome investigative journalism piece detailing the rise and fall of the fraudulent silicon valley blood testing startup Theranos',
  },
  {
    title: 'Homo Deus: A Brief History of Tomorrow',
    author: 'Yuval Noah Harari',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/81hMjlT14ML.jpg',
    description:
      "How do we stay relevent in a future dominated by computers? Exciting, but frightening at times, Harari's depiction of what may be in store for humanity is vivid and based in real philosophy, science, and technology. A must read.",
  },
  {
    title: 'Proof of Heaven: A Neurosurgeons Journey Into the Afterlife',
    author: 'Eben Alexander, MD',
    thumbnail:
      'https://books.google.com/books/content/images/frontcover/JkoAfKP5WvAC?fife=w400-h600',
    description:
      'A quick read depicting a neurosurgeons near death experience (NDE). Bridges science and spirituality. Author has a bit of a god complex...',
  },
  {
    title:
      'Stealing Fire: How Silicon Valley, the Navy SEALs, and Maverick Scientists Are Revolutionizing the Way We Live and Work ',
    author: 'Jamie Wheal and Steven Kotler',
    thumbnail:
      'https://images-na.ssl-images-amazon.com/images/I/81KwTxL8iwL.jpg',
    description:
      'Well written and researched book about flow states, ecstasis, and neurohacking.',
  },
  // {
  //   title: '',
  //   author: '',
  //   description: '',
  // },
];

const BooksPage = () => (
  <Layout>
    <SEO title="Knowledge" />
    {books.map((book) => (
      <Card>
        <img src={book.thumbnail} />
        <div>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <p>{book.description}</p>
        </div>
      </Card>
    ))}
  </Layout>
);

export default BooksPage;
