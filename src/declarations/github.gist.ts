export interface Gist {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: {
    [fileName: string]: {
      filename: string;
      type: string;
      language: string;
      raw_url: string;
      size: number;
    };
  };
  public: boolean;
  created_at: Date;
  updated_at: Date;
  description?: string;
  comments: number;
  user: null;
  comments_url: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: "User";
    site_admin: boolean;
  };
  truncated: boolean;
}

export interface GistParsed {
  _id: string;
  idGithub: string;
  avatar_url: string;
  username: string;
  tags: Array<string>;
  filename: string;
  type: string;
  language: string;
  raw: string;
  size: number;
  title: string;
  description: string;
  private: boolean;
  createdAt: Date;
  lastUpdate: Date;
  html: string;
  likes: Array<{ avatar_url: string; username: string }>;
}
