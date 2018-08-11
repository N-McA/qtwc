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

const headsUpText = `\
Heads Up Guys is a charity partnership with University of British Columbia. They provide online materials that directly connect those in need to practical immediate advice, as well as local support services.

They also work hard to combat the stigma surrounding male mental health issues and to promote help-seeking behaviour amongst men, by producing materials that directly target common misconceptions about depression and anxiety.
`

export const charities = [
  {
    country: "USA",
    flag: "imgs/usa.png",
    cause: "To Write Love on Her Arms",
    causeImage: "imgs/to_write_love.svg",
    donateLink:
      "https://www.justgiving.com/fundraising/quad-tandem-worldies/donate",
    shortName: 'TWLoHA',
    text: twlohaText,
    site: "https://twloha.com/",
  },
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
    country: "Canada",
    flag: "imgs/canada.png",
    cause: "Heads Up Guys",
    causeImage: "imgs/heads_up_guys.svg",
    shortName: 'Heads Up',
    text: headsUpText,
    site: "https://headsupguys.org/for-supporters/",
  },
];
