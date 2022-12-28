
An Example of the UN [Universal Declaration of Human Rights](https://www.un.org/en/about-us/universal-declaration-of-human-rights) in RDF, is below.

```
<script type="application/ld+json">
{

  "@context": {

    "udhr": "http://www.udhr.org/ontology/udhr#",

    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",

    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",

    "xhtml": "http://www.w3.org/1999/xhtml/"

  },

  "@graph": [

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasPreamble": {

        "@type": "udhr:Preamble",

        "udhr:hasText": {

          "@value": "\n      Whereas recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world,\n      Whereas disregard and contempt for human rights have resulted in barbarous acts which have outraged the conscience of mankind, and the advent of a world in which human beings shall enjoy freedom of speech and belief and freedom from fear and want has been proclaimed as the highest aspiration of the common people,\n      Whereas it is essential, if man is not to be compelled to have recourse, as a last resort, to rebellion against tyranny and oppression, that human rights should be protected by the rule of law,\n      Whereas it is essential to promote the development of friendly relations between nations,\n      Whereas the peoples of the United Nations have in the Charter reaffirmed their faith in fundamental human rights, in the dignity and worth of the human person and in the equal rights of men and women and have determined to promote social progress and better standards of life in larger freedom,\n      Whereas Member States have pledged themselves to achieve, in co-operation with the United Nations, the promotion of universal respect for and observance of human rights and fundamental freedoms,\n      Whereas a common understanding of these rights and freedoms is of the greatest importance for the full realization of this pledge,\n      Now, Therefore THE GENERAL ASSEMBLY proclaims THIS UNIVERSAL DECLARATION OF HUMAN RIGHTS as a common standard of achievement for all peoples and all nations, to the end that every individual and every organ of society, keeping this Declaration constantly in mind, shall strive by teaching and education to promote respect for these rights and freedoms and by progressive measures, national and international, to secure their universal and effective recognition and observance, both among the peoples of Member States themselves and among the peoples of territories under their jurisdiction.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 1,

        "rdfs:label": {

          "@value": "Article 1. All human beings are born free and equal in dignity and rights.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 2,

        "rdfs:label": {

          "@value": "Article 2. Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 3,

        "rdfs:label": {

          "@value": "Article 3. Everyone has the right to life, liberty and security of person.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone has the right to life, liberty and security of person.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 4,

        "rdfs:label": {

          "@value": "Article 4. No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 5,

        "rdfs:label": {

          "@value": "Article 5. No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 6,

        "rdfs:label": {

          "@value": "Article 6. Everyone has the right to recognition everywhere as a person before the law.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone has the right to recognition everywhere as a person before the law. ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 7,

        "rdfs:label": {

          "@value": "Article 7. All are equal before the law and are entitled without any discrimination to equal protection of the law. All are entitled to equal protection against any discrimination in violation of this Declaration and against any incitement to such discrimination.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      All are equal before the law and are entitled without any discrimination to equal protection of the law. All are entitled to equal protection against any discrimination in violation of this Declaration and against any incitement to such discrimination.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 8,

        "rdfs:label": {

          "@value": "Article 8. Everyone has the right to an effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone has the right to an effective remedy by the competent national tribunals for acts violating the fundamental rights granted him by the constitution or by law.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 9,

        "rdfs:label": {

          "@value": "Article 9. No one shall be subjected to arbitrary arrest, detention or exile.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      No one shall be subjected to arbitrary arrest, detention or exile.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 10,

        "rdfs:label": {

          "@value": "Article 10. Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 11,

        "rdfs:label": {

          "@value": "Article 11. Everyone charged with a penal offence has the right to be presumed innocent until proved guilty according to law in a public trial at which he has had all the guarantees necessary for his defence.",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone charged with a penal offence has the right to be presumed innocent until proved guilty according to law in a public trial at which he has had all the guarantees necessary for his defence.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        No one shall be held guilty of any penal offence on account of any act or omission which did not constitute a penal offence, under national or international law, at the time when it was committed. Nor shall a heavier penalty be imposed than the one that was applicable at the time the penal offence was committed.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 12,

        "rdfs:label": {

          "@value": "Article 12. No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 13,

        "rdfs:label": {

          "@value": "Article 13. (1) Everyone has the right to freedom of movement and residence within the borders of each state. (2) Everyone has the right to leave any country, including his own, and to return to his country.",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to freedom of movement and residence within the borders of each state.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to leave any country, including his own, and to return to his country.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 14,

        "rdfs:label": {

          "@value": "Article 14. (1) Everyone has the right to seek and to enjoy in other countries asylum from persecution. (2) This right may not be invoked in the case of prosecutions genuinely arising from non-political crimes or from acts contrary to the purposes and principles of the United Nations.",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to seek and to enjoy in other countries asylum from persecution.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        This right may not be invoked in the case of prosecutions genuinely arising from non-political crimes or from acts contrary to the purposes and principles of the United Nations.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 15,

        "rdfs:label": {

          "@value": "Article 15. (1) Everyone has the right to a nationality. (2) No one shall be arbitrarily deprived of his nationality nor denied the right to change his nationality.",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to a nationality.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        No one shall be arbitrarily deprived of his nationality nor denied the right to change his nationality.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 16,

        "rdfs:label": {

          "@value": "Article 16. (1) Men and women of full age, without any limitation due to race, nationality or religion, have the right to marry and to found a family. They are entitled to equal rights as to marriage, during marriage and at its dissolution. (2) Marriage shall be entered into only with the free and full consent of the intending spouses. (3) The family is the natural and fundamental group unit of society and is entitled to protection by society and the State.",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Men and women of full age, without any limitation due to race, nationality or religion, have the right to marry and to found a family. They are entitled to equal rights as to marriage, during marriage and at its dissolution.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        Marriage shall be entered into only with the free and full consent of the intending spouses.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 4",

            "udhr:hasText": {

              "@value": "\n       The family is the natural and fundamental group unit of society and is entitled to protection by society and the State.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 17,

        "rdfs:label": {

          "@value": "Article 17. (1) Everyone has the right to own property alone as well as in association with others. (2) No one shall be arbitrarily deprived of his property.",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to own property alone as well as in association with others.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        No one shall be arbitrarily deprived of his property.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 18,

        "rdfs:label": {

          "@value": "Article 18. Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private, to manifest his religion or belief in teaching, practice, worship and observance.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 19,

        "rdfs:label": {

          "@value": "Article 19. Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone has the right to freedom of opinion and expression; this right includes freedom to hold opinions without interference and to seek, receive and impart information and ideas through any media and regardless of frontiers.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 20,

        "rdfs:label": {

          "@value": "Article 20. (1) Everyone has the right to freedom of peaceful assembly and association. (2) No one may be compelled to belong to an association.",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to freedom of peaceful assembly and association.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        No one may be compelled to belong to an association.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 21,

        "rdfs:label": {

          "@value": "Article 21. (1) Everyone has the right to take part in the government of his country, directly or through freely chosen representatives. (2)  Everyone has the right of equal access to public service in his country. (3)  The will of the people shall be the basis of the authority of government; this will shall be expressed in periodic and genuine elections which shall be by universal and equal suffrage and shall be held by secret vote or by equivalent free voting procedures.",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to take part in the government of his country, directly or through freely chosen representatives.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right of equal access to public service in his country.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 3",

            "udhr:hasText": {

              "@value": "\n        The will of the people shall be the basis of the authority of government; this will shall be expressed in periodic and genuine elections which shall be by universal and equal suffrage and shall be held by secret vote or by equivalent free voting procedures.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 22,

        "rdfs:label": {

          "@value": "Article 22. Everyone, as a member of society, has the right to social security and is entitled to realization, through national effort and international co-operation and in accordance with the organization and resources of each State, of the economic, social and cultural rights indispensable for his dignity and the free development of his personality.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone, as a member of society, has the right to social security and is entitled to realization, through national effort and international co-operation and in accordance with the organization and resources of each State, of the economic, social and cultural rights indispensable for his dignity and the free development of his personality.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 23,

        "rdfs:label": {

          "@value": "Article 23. (1) Everyone has the right to work, to free choice of employment, to just and favourable conditions of work and to protection against unemployment. (2)  Everyone, without any discrimination, has the right to equal pay for equal work. (3)  Everyone who works has the right to just and favourable remuneration ensuring for himself and his family an existence worthy of human dignity, and supplemented, if necessary, by other means of social protection. (4)  Everyone has the right to form and to join trade unions for the protection of his interests.Everyone has the right to take part in the government of his country, directly or through freely chosen representatives. ",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to work, to free choice of employment, to just and favourable conditions of work and to protection against unemployment.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        Everyone, without any discrimination, has the right to equal pay for equal work.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 3",

            "udhr:hasText": {

              "@value": "\n        Everyone who works has the right to just and favourable remuneration ensuring for himself and his family an existence worthy of human dignity, and supplemented, if necessary, by other means of social protection.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 4",

            "udhr:hasText": {

              "@value": "\n         Everyone has the right to form and to join trade unions for the protection of his interests.Everyone has the right to take part in the government of his country, directly or through freely chosen representatives.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 24,

        "rdfs:label": {

          "@value": "Article 24. Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 25,

        "rdfs:label": {

          "@value": "Article 25. (1) Everyone has the right to a standard of living adequate for the health and well-being of himself and of his family, including food, clothing, housing and medical care and necessary social services, and the right to security in the event of unemployment, sickness, disability, widowhood, old age or other lack of livelihood in circumstances beyond his control. (2)  Motherhood and childhood are entitled to special care and assistance. All children, whether born in or out of wedlock, shall enjoy the same social protection. ",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to a standard of living adequate for the health and well-being of himself and of his family, including food, clothing, housing and medical care and necessary social services, and the right to security in the event of unemployment, sickness, disability, widowhood, old age or other lack of livelihood in circumstances beyond his control.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n         Motherhood and childhood are entitled to special care and assistance. All children, whether born in or out of wedlock, shall enjoy the same social protection.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 26,

        "rdfs:label": {

          "@value": "Article 26. (1) Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages. Elementary education shall be compulsory. Technical and professional education shall be made generally available and higher education shall be equally accessible to all on the basis of merit. (2)  Education shall be directed to the full development of the human personality and to the strengthening of respect for human rights and fundamental freedoms. It shall promote understanding, tolerance and friendship among all nations, racial or religious groups, and shall further the activities of the United Nations for the maintenance of peace. (3)  Parents have a prior right to choose the kind of education that shall be given to their children. ",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages. Elementary education shall be compulsory. Technical and professional education shall be made generally available and higher education shall be equally accessible to all on the basis of merit.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        Education shall be directed to the full development of the human personality and to the strengthening of respect for human rights and fundamental freedoms. It shall promote understanding, tolerance and friendship among all nations, racial or religious groups, and shall further the activities of the United Nations for the maintenance of peace.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 3",

            "udhr:hasText": {

              "@value": "\n         Parents have a prior right to choose the kind of education that shall be given to their children.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 27,

        "rdfs:label": {

          "@value": "Article 27. (1) Everyone has the right freely to participate in the cultural life of the community, to enjoy the arts and to share in scientific advancement and its benefits. (2)  Everyone has the right to the protection of the moral and material interests resulting from any scientific, literary or artistic production of which he is the author. ",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has the right freely to participate in the cultural life of the community, to enjoy the arts and to share in scientific advancement and its benefits.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n         Everyone has the right to the protection of the moral and material interests resulting from any scientific, literary or artistic production of which he is the author.\n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 28,

        "rdfs:label": {

          "@value": "Article 28. Everyone is entitled to a social and international order in which the rights and freedoms set forth in this Declaration can be fully realized.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Everyone is entitled to a social and international order in which the rights and freedoms set forth in this Declaration can be fully realized.\n    ",

          "@language": "en"

        }

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 29,

        "rdfs:label": {

          "@value": "Article 29. (1) Everyone has duties to the community in which alone the free and full development of his personality is possible.  (2)  In the exercise of his rights and freedoms, everyone shall be subject only to such limitations as are determined by law solely for the purpose of securing due recognition and respect for the rights and freedoms of others and of meeting the just requirements of morality, public order and the general welfare in a democratic society.  (3)  These rights and freedoms may in no case be exercised contrary to the purposes and principles of the United Nations. ",

          "@language": "en"

        },

        "udhr:hasParagraph": [

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 1",

            "udhr:hasText": {

              "@value": "\n        Everyone has duties to the community in which alone the free and full development of his personality is possible.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 2",

            "udhr:hasText": {

              "@value": "\n        In the exercise of his rights and freedoms, everyone shall be subject only to such limitations as are determined by law solely for the purpose of securing due recognition and respect for the rights and freedoms of others and of meeting the just requirements of morality, public order and the general welfare in a democratic society.\n      ",

              "@language": "en"

            }

          },

          {

            "@type": "udhr:Paragraph",

            "rdfs:label": "Paragraph 3",

            "udhr:hasText": {

              "@value": "\n          These rights and freedoms may in no case be exercised contrary to the purposes and principles of the United Nations. \n      ",

              "@language": "en"

            }

          }

        ]

      }

    },

    {

      "@id": "http://www.udhr.org/",

      "@type": "udhr:Declaration",

      "udhr:hasArticle": {

        "@type": "udhr:Article",

        "udhr:articleNumber": 30,

        "rdfs:label": {

          "@value": "Article 30. Nothing in this Declaration may be interpreted as implying for any State, group or person any right to engage in any activity or to perform any act aimed at the destruction of any of the rights and freedoms set forth herein.",

          "@language": "en"

        },

        "udhr:hasText": {

          "@value": "\n      Nothing in this Declaration may be interpreted as implying for any State, group or person any right to engage in any activity or to perform any act aimed at the destruction of any of the rights and freedoms set forth herein.\n    ",

          "@language": "en"

        }

      }

    }

  ]

}
</script>
```