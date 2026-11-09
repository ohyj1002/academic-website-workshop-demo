export type Pub = { cite: string; title: string; venue: string; url: string; note?: string };
export type Theme = { id: string; name: string; summary: string; pubs: Pub[] };

// All entries reproduced from the CV (cv.pdf). Asterisk (*) follows the CV's notation.
export const THEMES: Theme[] = [
  {
    id: "relational-ai",
    name: "Human–AI relationships and relational chatbots",
    summary: "How people build relationships with AI chatbots and voice assistants, and how those relationships matter for wellbeing and behavior.",
    pubs: [
      { cite: "Oh, Y. J.*, Hu, J., Zhu, R., Lim, J. I., & Zhang, X. (2026).", title: "Artificial intelligence chatbots as relational agents: A systematic review of human-AI chatbot relationships.", venue: "International Journal of Human-Computer Interaction, 1-25.", url: "https://doi.org/10.1080/10447318.2026.2648799", note: "Featured study" },
      { cite: "Oh, Y. J.*, Liang, K.-H., Kim, D. D., Zhang, X., Yu, Z., Fukuoka, Y., & Zhang, J. (2025).", title: "Enhancing physical activity through a relational artificial intelligence chatbot: A feasibility and usability study.", venue: "Digital Health, 11.", url: "https://doi.org/10.1177/20552076251324445" },
      { cite: "Wolfe, B. H., Oh, Y. J., Choung, H., Cui, X., Weinzapfel, J., Cooper, R. A., Lee, H., & Lehto, R. (2025).", title: "Caregiving artificial intelligence chatbot for older adults: A mixed-methods study on their preferences, well-being, and social connectivity.", venue: "Journal of Internet Medical Research, 27, e65776.", url: "https://doi.org/10.2196/65776" },
      { cite: "Choung, H., Oh, Y. J., Wolfe, B. H., Cui, X., Weinzapfel, J., & Cooper, R.A. (2026).", title: "Exploring older adults' use of AI voice assistants through the lens of self-determination theory.", venue: "Health Communication, 1-15.", url: "https://doi.org/10.1080/10410236.2026.2694693" },
      { cite: "Liang, K. H., Shi, W., Oh, Y. J., Wang, H. C., Zhang, J., & Yu, Z. (2024).", title: "Dialoging resonance in human-chatbot conversation: How users perceive and reciprocate recommendation chatbot's self-disclosure strategy.", venue: "Proceedings of the ACM on Human-Computer Interaction, 8(CSCW1), 1-28.", url: "https://doi.org/10.1145/3653691", note: "Refereed conference paper" },
      { cite: "Xue, H., Oh, Y. J., Zhou, X., Zhang, X., & Oxley, B. (2026).", title: "Users' prompting strategies and ChatGPT's contextual adaptation shape conversational information-seeking experiences.", venue: "Scientific Reports, 16(1), 12112.", url: "https://doi.org/10.1038/s41598-026-42465-4" },
      { cite: "Hu, J. M. & Oh, Y. J. (2025).", title: "Stronger algorithmic beliefs were associated with more benign interpretations in unideal online dating scenarios.", venue: "Cyberpsychology, Behavior, and Social Networking, 28(8), 594-598.", url: "https://doi.org/10.1089/cyber.2025.0085" },
    ],
  },
  {
    id: "ai-persuasion",
    name: "AI, persuasion, and health messaging",
    summary: "When AI is the messenger: credibility, agency, and message design in AI-delivered persuasion.",
    pubs: [
      { cite: "Oh, Y. J.*, Park, S., & Ryu, J. Y. (2026).", title: "Boosting organ donation self-efficacy through AI-generated health messaging: the differential impacts of \u201cwhy\u201d vs. \u201chow\u201d messaging and media modality.", venue: "Health Communication, 41(9), 1580-1589.", url: "https://doi.org/10.1080/10410236.2025.2580327" },
      { cite: "Oh, Y. J.*, Ryu, J. Y., Han, J., Park, S., Lim, J. I., Youk, S., & Park, H. S. (2025).", title: "Trust in AI doctors: How credibility and message richness in AI-based providers influence patient adherence.", venue: "Advances in Human-Computer Interaction, 2025(1), 5934127.", url: "https://doi.org/10.1155/ahci/5934127" },
      { cite: "Calabrese, C., Xue, H., Zhang, X., & Oh, Y. J.* (2026).", title: "Leveraging artificial intelligence chatbots to employ bypassing and correction strategies for addressing misinformation about contraceptive use.", venue: "Science Communication, 48(3), 507-541.", url: "https://doi.org/10.1177/10755470261418533" },
      { cite: "Liao, W., Oh, Y. J., Feng, B., & Zhang, J. (2023).", title: "Understanding the influence discrepancy between human and artificial agent in advice interactions: The role of stereotypical perception of agency.", venue: "Communication Research, 50(5), 633-664.", url: "https://doi.org/10.1177/00936502221138427" },
      { cite: "Shi, W., Wang, X., Oh, Y. J., Zhang, J., Sahay, S., & Yu, Z. (2020).", title: "Effects of persuasive dialogues: Testing bot identities and inquiry strategies.", venue: "In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (pp. 1-13).", url: "https://dl.acm.org/doi/10.1145/3313831.3376843", note: "Refereed conference paper" },
    ],
  },
  {
    id: "health-chatbots",
    name: "Chatbots and technology for health behavior",
    summary: "Designing and evaluating conversational and mobile technologies that support physical activity, diet, and health.",
    pubs: [
      { cite: "Oh, Y. J.*, Zhang, J., Fang, M. L., & Fukuoka, Y. (2021).", title: "A systematic review of artificial intelligence chatbots for promoting physical activity, healthy diet, and weight loss.", venue: "International Journal of Behavioral Nutrition and Physical Activity, 18(1), 1-25.", url: "https://doi.org/10.1186/s12966-021-01224-6" },
      { cite: "Zhang, J., Oh, Y. J., Lange, P., Yu, Z., & Fukuoka, Y. (2020).", title: "Artificial intelligence chatbot behavior change model for designing artificial intelligence chatbots to promote physical activity and a healthy diet.", venue: "Journal of Medical Internet Research, 22(9), e22845.", url: "https://doi.org/10.2196/22845" },
      { cite: "Liang, K. H., Lange, P., Oh, Y. J., Zhang, J., Fukuoka, Y., & Yu, Z. (2021).", title: "Evaluation of in-person counseling strategies to develop physical activity chatbot for women.", venue: "SIGDIAL.", url: "https://arxiv.org/pdf/2107.10410.pdf" },
      { cite: "Oh, Y. J.*, Hoffmann, T. J., & Fukuoka, Y. (2023).", title: "A novel approach to assess weekly self-efficacy for meeting personalized physical activity goals via a cellphone: 12-week longitudinal study.", venue: "JMIR Formative Research, 7(1), e38877.", url: "https://doi.org/10.2196/38877" },
    ],
  },
  {
    id: "interpersonal",
    name: "Interpersonal influence and conversation",
    summary: "The conversational dynamics, such as accommodation, joint attention, and shared emotion, that make influence succeed.",
    pubs: [
      { cite: "Liao, W.*, Oh, Y. J.*, Zhang, J., & Feng, B. (2023).", title: "Conversational dynamics of joint attention and shared emotion predict outcomes in interpersonal influence situations: an interaction ritual perspective.", venue: "Journal of Communication, 73(4), 342-355.", url: "https://doi.org/10.1093/joc/jqad003" },
      { cite: "Liao, W., Zhang, J., Oh, Y. J., & Palomares, N. A. (2021).", title: "Linguistic accommodation enhances compliance to charity donation: The role of interpersonal communication processes in mediated compliance-gaining conversations.", venue: "Journal of Computer-Mediated Communication, 36(3), 167-185.", url: "https://doi.org/10.1093/jcmc/zmab001" },
    ],
  },
  {
    id: "computational",
    name: "Public health, misinformation, and computational methods",
    summary: "Large-scale, computational analyses of health discourse, emotion, and misinformation in media environments.",
    pubs: [
      { cite: "Oh, Y. J.*, Rasul, M. E., Mckinley, E., & Calabrese, C. (2025).", title: "From digital traces to public vaccination behaviors: Leveraging large language models for big data classification.", venue: "Frontiers in Artificial Intelligence, 8, 1602984.", url: "https://doi.org/10.3389/frai.2025.1602984" },
      { cite: "Oh, Y. J.*, Rasul, M. E., Lim, J. I., Calabrese, C., McKinley, E., Stevens, H., Turner, M. M., Lapinski, M. K., & Peng, T. Q. (2025).", title: "Targeting anger for COVID-19 prevention: The motivating role of anger on media use and vaccination intention.", venue: "PLoS One, 20(12), e0338183.", url: "https://doi.org/10.1371/journal.pone.0338183" },
      { cite: "Rasul, M. E., Calabrese, C., Oh, Y. J., Cho, H. J., Jeon, M., & Boukes, M. (2025).", title: "\u201cIt's all fake news!\u201d: How perceptions of misinformation and disinformation influence news consumption across traditional media, social media, and AI.", venue: "Journalism & Mass Communication Quarterly, 102(4), 993-1019.", url: "https://doi.org/10.1177/10776990251373085" },
      { cite: "Oh, Y. J., Jeon, M., Cho, H. J., & Rasul, M. E. (2026).", title: "Narcissism predicts misinformation engagement through information seeking: Evidence from a survey.", venue: "Acta Psychologica, 262, 106155.", url: "https://doi.org/10.1016/j.actpsy.2025.106155" },
      { cite: "Stevens, H., Rasul, M.E., & Oh, Y. J. (2022).", title: "Emotions and incivility in vaccine mandate discourse: Natural language processing insights.", venue: "JMIR Infodemiology, 2(2), e37635.", url: "https://doi.org/10.2196/37635" },
      { cite: "Stevens, H. R., Oh, Y. J., & Taylor, L. R. (2021).", title: "Desensitization to fear-inducing COVID-19 health news on Twitter: Observational study.", venue: "JMIR Infodemiology, 1(1), e26876.", url: "https://doi.org/10.2196/26876" },
    ],
  },
];
