export interface Owner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  language: string | null;
  forks_count: number;
  forks: number;
  watchers_count: number;
  watchers: number;
  open_issues_count: number;
  open_issues: number;
  stargazers_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
  } | null;
  topics: string[];
}

export interface RepositoryDetail extends Omit<Repository, 'default_branch'> {
  default_branch: string;
  temp_clone_token: string | null;
  allow_squash_merge: boolean;
  allow_merge_commit: boolean;
  allow_rebase_merge: boolean;
  delete_branch_on_merge: boolean;
  homepage: string | null;
  disabled: boolean;
  visibility: string;
  size: number;
  auto_init: boolean;
}