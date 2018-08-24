const mhrukText = `\
Mental Health Research UK (MHR UK), is a charity dedicated to directly funding research into mental illness and its treatment. 

MHR UK ensures that 95% of all donated money is funnelled directly into research, supporting PhD scholarships across the UK. 

They help to channel their students into careers in mental health research, so funding a PhD may initiate a lifetime's work. The also support MDRes programs, that help doctors move into academic psychiatry.  

By funding basic research, MHRUK hopes to have a long term impact.
`

const twlohaText = `\
To Write Love on Her Arms (TWLOHA) is an organisation that aims to present hope and help for those struggling with mental illness. TWLOHA works directly with sufferers of depression, addiction and self harm; helping to bridge the gap between traditional medical help and those in need.

Out of a base in Florida, they work hard to promote help seeking and distribute funds to treatment and recovery centers, as well as crisis hotlines. So far, they've given away more than two million dollars.
`

export const charities = [
  {
    country: "Great Britain",
    flag: "imgs/union-jack.png",
    cause: "Mental Health Research UK",
    causeImage: "imgs/mental_health_research.png",
    donateLink:
      "https://www.justgiving.com/fundraising/quad-tandem-worldies-mhruk/donate",
    text: mhrukText,
    shortName: 'MHRUK',
    site: 'http://www.mentalhealthresearchuk.org.uk/',
  },
  {
    country: "USA & Canada",
    flag: "imgs/usa-canada.png",
    cause: "To Write Love on Her Arms",
    causeImage: "imgs/to_write_love.svg",
    donateLink:
      "https://give.twloha.com/give/f1575995/#!/donation/checkout",
    shortName: 'TWLoHA',
    text: twlohaText,
    site: "https://twloha.com/",
  },
];
