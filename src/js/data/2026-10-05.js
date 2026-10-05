// dataSetVersion = "2026-10-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-10-05;
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Slice of Life", key: "SoL" },
      { name: ".entourage", key: "ETG" },
      { name: "#SubjectMadness!", key: "SM" },
    ]
  },
  {
    name: "Remove Male Characters",
    key: "notmale",
    tooltip: "Check this to remove all non-female characters."
  },
  {
    name: "Remove Female Characters",
    key: "notfemale",
    tooltip: "Check this to remove all non-male characters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Kei Shindoune",
    img: "sol01.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Kairi Hiiragizawa",
    img: "sol02.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Yuu Naemoto",
    img: "sol03.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Kai Shindoune",
    img: "sol04.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Moira Verogli",
    img: "sol05.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Yuuya Hondou",
    img: "sol06.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Yuuma Hondou",
    img: "sol07.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Sanae Konishi",
    img: "sol08.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Riho Sanada",
    img: "sol09.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Kyle Verogli",
    img: "sol10.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Harley Wiese",
    img: "sol11.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Fleur Pratt",
    img: "sol12.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Ayana Tateishi",
    img: "sol13.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Ryousuke Tateishi",
    img: "sol14.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Claire-Ann Verogli",
    img: "sol15.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Yomi Hondou",
    img: "sol16.png",
    opts: {
      verses: [ "SoL" ],
      notmale: true 
    }
  },
  {
    name: "Taiga Hondou",
    img: "sol17.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Asca Verogli",
    img: "sol18.png",
    opts: {
      verses: [ "SoL" ],
      notfemale: true 
    }
  },
  {
    name: "Physics",
    img: "sm01.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Chemistry",
    img: "sm02.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Biology",
    img: "sm03.png",
    opts: {
      verses: [ "SM" ],
      notmale: true 
    }
  },
  {
    name: "Geography",
    img: "sm04.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Sociology",
    img: "sm05.png",
    opts: {
      verses: [ "SM" ],
      notmale: true 
    }
  },
  {
    name: "Economics",
    img: "sm06.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Psychology",
    img: "sm07.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "History",
    img: "sm08.png",
    opts: {
      verses: [ "SM" ],
      notmale: true 
    }
  },
  {
    name: "Psychology",
    img: "sm07.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "The Arts",
    img: "sm09.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Civics",
    img: "sm10.png",
    opts: {
      verses: [ "SM" ],
      notmale: true 
    }
  },
  {
    name: "Religion Studies",
    img: "sm11.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Linguistics",
    img: "sm12.png",
    opts: {
      verses: [ "SM" ],
      notmale: true 
    }
  },
  {
    name: "Mathematics",
    img: "sm13.png",
    opts: {
      verses: [ "SM" ],
      notmale: true 
    }
  },
  {
    name: "Informatics",
    img: "sm14.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Environment Education",
    img: "sm15.png",
    opts: {
      verses: [ "SM" ],
      notmale: true 
    }
  },
  {
    name: "Physical Education",
    img: "sm16.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Family and Consumer Science",
    img: "sm17.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Philosophy",
    img: "sm18.png",
    opts: {
      verses: [ "SM" ],
      notfemale: true 
    }
  },
  {
    name: "Esther Weidmann",
    img: "etg01.png",
    opts: {
      verses: [ "ETG" ],
      notmale: true 
    }
  },
  {
    name: "Nataniela Kaplanski",
    img: "etg02.png",
    opts: {
      verses: [ "ETG" ]
    }
  },
  {
    name: "Yuriya Kalashnikov",
    img: "etg03.png",
    opts: {
      verses: [ "ETG" ],
      notfemale: true 
    }
  },
 {
    name: "Keira Hawthorne",
    img: "etg04.png",
    opts: {
      verses: [ "ETG" ],
      notmale: true 
    }
  },
  {
    name: "Geoffrey Bailey-Meagher",
    img: "etg05.png",
    opts: {
      verses: ["ETG"],
      notfemale: true 
    }
  },
  {
    name: "Mikail Arshavin",
    img: "etg06.png",
    opts: {
      verses: ["ETG"],
      notfemale: true 
    }
  },
  {
    name: "Attila Rafal Shafi",
    img: "etg07.png",
    opts: {
      verses: ["ETG"],
      notfemale: true 
    }
  },
  {
    name: "Phillia Pinho",
    img: "etg08.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  },
  {
    name: "Imogen Langley",
    img: "etg09.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  },
  {
    name: "Bayuwira Natanegara",
    img: "etg10.png",
    opts: {
      verses: ["ETG"],
      notfemale: true 
    }
  },
  {
    name: "Felicia Morra",
    img: "etg11.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  },
  {
    name: "Kaylynn Yeager",
    img: "etg12.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  },
  {
    name: "Sister Addie",
    img: "etg13.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  },
  {
    name: "Sister Kalli",
    img: "etg14.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  },
  {
    name: "Sister Riella",
    img: "etg15.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  },
  {
    name: "Sister Mira",
    img: "etg16.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  },
  {
    name: "Thaddeus Xanthos",
    img: "etg17.png",
    opts: {
      verses: ["ETG"],
      notfemale: true 
    }
  }
  {
    name: "Kwan  Wei",
    img: "etg18.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  }
  {
    name: "Darayavaus Shiraz",
    img: "etg19.png",
    opts: {
      verses: ["ETG"],
      notfemale: true 
    }
  }
  {
    name: "Erraine George",
    img: "etg20.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  }
  {
    name: "Alexia Meagher",
    img: "etg21.png",
    opts: {
      verses: ["ETG"],
      notmale: true 
    }
  }
  {
    name: "Thomas Yorkshire",
    img: "etg22.png",
    opts: {
      verses: ["ETG"],
      notfemale: true 
    }
  }
];
