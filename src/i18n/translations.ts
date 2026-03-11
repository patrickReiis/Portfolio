export interface Translations {
  name: string;
  title: {
    aboutMe: string;
    openSource: string;
    projects: string;
    contact: string;
  };
  about: {
    description: string;
  };
  nav: {
    english: string;
    portuguese: string;
  };
  contact: {
    description: {
      email: string;
      collaboration: string;
    };
    resume: string;
    github: string;
    sourceCode: string;
  };
  music: {
    spotify: string;
    youtube: string;
    donation: string;
    donationText: string;
  };
  nostalgia: {
    title: string;
    description: string;
  };
  openSource: {
    ipfs: {
      title: string;
      description: string[];
      link: string;
    };
    monero: {
      title: string;
      description: string[];
      link: string;
    };
  };
}

export const translations: Record<string, Translations> = {
  en: {
    name: "PATRICK PREIS",
    title: {
      aboutMe: "ABOUT ME",
      openSource: "MUSIC JOURNEY",
      projects: "MUSIC PLATFORMS",
      contact: "CONNECT WITH ME"
    },
    about: {
      description: "I used to be an open source developer but I decided to quit it to become a singer. I write my own lyrics and I have my own genre, and I explore different genres (such as rap, rock, eurodance, brazilian funk, R&B, gospel, pagode, arrocha, etc)."
    },
    nav: {
      english: "English",
      portuguese: "Português"
    },
    contact: {
      description: {
        email: "Contact me at patrickpereirareal1@gmail.com",
        collaboration: "I am an independent artist open to collaborations."
      },
      resume: "Music Portfolio",
      github: "Source Code",
      sourceCode: "Source Code"
    },
    music: {
      spotify: "Listen on Spotify",
      youtube: "Watch on YouTube",
      donation: "Support My Music",
      donationText: "I'm an independent artist. Support my journey with Bitcoin:"
    },
    nostalgia: {
      title: "NOSTALGIC PROOF",
      description: "My past as a developer - keeping these as memories of my coding journey:"
    },
    openSource: {
      ipfs: {
        title: "InterPlanetary File System (IPFS)",
        description: [
          "Fixed two issues and wrote tests from scratch using the Go Programming Language.",
          "+117 lines added and -1 line removed."
        ],
        link: "See Pull Request"
      },
      monero: {
        title: "Monero Wallet Generator",
        description: [
          "Improved user experience with a toggleable styled QR Code using JavaScript and CSS.",
          "+30 lines added and 0 line removed."
        ],
        link: "See Pull Request"
      }
    }
  },
  pt: {
    name: "PATRICK PREIS",
    title: {
      aboutMe: "SOBRE MIM",
      openSource: "JORNADA MUSICAL",
      projects: "PLATAFORMAS MUSICAIS",
      contact: "CONECTE-SE COMIGO"
    },
    about: {
      description: "Eu costumava ser um desenvolvedor open source, mas decidi parar para me tornar um cantor. Escrevo minhas próprias letras e tenho meu próprio gênero, e exploro diferentes gêneros (como rap, rock, eurodance, funk brasileiro, R&B, gospel, pagode, arrocha, etc)."
    },
    nav: {
      english: "English",
      portuguese: "Português"
    },
    contact: {
      description: {
        email: "Entre em contato comigo em patrickpereirareal1@gmail.com",
        collaboration: "Sou um artista independente aberto a colaborações com outros músicos/cantores."
      },
      resume: "Portfólio Musical",
      github: "Código Fonte",
      sourceCode: "Código fonte"
    },
    music: {
      spotify: "Ouça no Spotify",
      youtube: "Assista no YouTube",
      donation: "Apoie Minha Música",
      donationText: "Sou um artista independente. Apoie minha jornada com Bitcoin:"
    },
    nostalgia: {
      title: "PROVA NOSTÁLGICA",
      description: "Meu passado como desenvolvedor - mantendo isso como memórias da minha jornada de programação:"
    },
    openSource: {
      ipfs: {
        title: "InterPlanetary File System (IPFS)",
        description: [
          "Corrigi dois problemas e escrevi testes do zero usando a linguagem de programação Go.",
          "+117 linhas adicionadas e -1 linha removida."
        ],
        link: "Ver Pull Request"
      },
      monero: {
        title: "Monero Wallet Generator",
        description: [
          "Aprimorei a experiência do usuário com um QR Code interativo em JavaScript e CSS.",
          "+30 linhas adicionadas e 0 linha removida."
        ],
        link: "Ver Pull Request"
      }
    }
  }
};