export type Language = "en" | "jp";

export interface Translations {
  nav: {
    home: string;
    blog: string;
    projects: string;
    interactives: string;
    resume: string;
  };
  home: {
    subtitle: string;
    theLatest: string;
    myStuff: string;
    moreStuff: string;
    welcomeToBlog: string;
    moreContentSoon: string;
    japan2025: string;
    japan2025Description: string;
    devBlog: string;
    devBlogDescription: string;
    nothingyet: string;
    profile: {
      name: string;
      username: string;
      title: string;
      status: string;
    };
    projects: {
      jibash: {
        title: string;
        description: string;
      };
      mogi: {
        title: string;
        description: string;
      };
    };
  };
  blog: {
    title: string;
    subtitle: string;
    noCategories: string;
    noPosts: string;
    noPostsDescription: string;
  };
  projects: {
    title: string;
    subtitle: string;
  };
  resume: {
    title: string;
    subtitle: string;
    };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "home",
      blog: "blog",
      projects: "projects",
      interactives: "interactives",
      resume: "resume",
    },
    home: {
      subtitle: "where the cool stuff is",
      theLatest: "THE LATEST",
      myStuff: "my stuff",
      moreStuff: "more stuff",
      welcomeToBlog: "Welcome to my blog!",
      moreContentSoon: "More content coming soon!",
      japan2025: "japan-2025",
      japan2025Description: "blog posts from Japan May 2025",
      devBlog: "dev-blog",
      devBlogDescription: "developer posts",
      nothingyet: "Nothing here yet!",
      profile: {
        name: "Shaun Colegado",
        username: "channel9",
        title: "web developer",
        status: "With love from sunny California!",
      },
      projects: {
        jibash: {
          title: "jibash",
          description: "language learning app",
        },
        mogi: {
          title: "mogi",
          description: "llm agent framework",
        },
      },
    },
    blog: {
      title: "general-blog",
      subtitle: "random posts",
      noCategories: "No categories yet",
      noPosts: "No blog posts found",
      noPostsDescription: "Make sure there are markdown files in the new-content-structure directory.",
    },
    projects: {
      title: "projects",
      subtitle: "things I've built",
    },
    resume: {
      title: "resume",
      subtitle: "my professional experience",
    },
  },
  jp: {
    nav: {
      home: "ホーム",
      blog: "ブログ",
      projects: "プロジェクト",
      interactives: "インタラクティブ",
      resume: "履歴書",
    },
    home: {
      subtitle: "一体何があるか分からないが、ここにあり",
      theLatest: "最新",
      myStuff: "私の物",
      moreStuff: "その他",
      welcomeToBlog: "ブログへようこそ",
      moreContentSoon: "もっとコンテンツが来る！",
      japan2025: "日本-2025",
      japan2025Description: "2025年5月の日本からのブログ投稿",
      devBlog: "開発ブログ",
      devBlogDescription: "開発者の投稿",
      nothingyet: "まだ何もありません！",
      profile: {
        name: "ショーン・コレガド",
        username: "channel9",
        title: "ウェブ開発者",
        status: "カリフォルニアの青空からお届けします!",
      },
      projects: {
        jibash: {
          title: "jibash",
          description: "言語学習アプリ",
        },
        mogi: {
          title: "mogi",
          description: "LLMエージェントフレームワーク",
        },
      },
    },
    blog: {
      title: "一般ブログ",
      subtitle: "ランダムな投稿",
      noCategories: "まだカテゴリがありません",
      noPosts: "ブログ投稿が見つかりません",
      noPostsDescription: "ディレクトリにマークダウンファイルがあることを確認してください。",
    },
    projects: {
      title: "プロジェクト",
      subtitle: "私が作ったもの",
    },
    resume: {
      title: "歴史書",
      subtitle: "自分の職業経験",
    },
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language];
}
